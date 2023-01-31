import { getContent } from "api";
import { useState, useEffect } from "react";
const moment = require("moment");

export const useGetOompas = (type,api,hasMore,page) => {

  const actualDateStorage = JSON.parse(window.localStorage.getItem(type+"actualDate"));
  const refreshingDateStorage = JSON.parse(window.localStorage.getItem(type+"clearDate"));
  const [oompas, setOompas] = useState(type === "all" ? JSON.parse(window.localStorage.getItem("allstoragedOompaLoompas")) || []
                                      : JSON.parse(window.localStorage.getItem(type+"storagedOompaLoompa")) || []);
  const [oompasToFilter, setOompasToFilter] = useState(JSON.parse(window.localStorage.getItem("allstoragedOompaLoompas")) || []);
  let actualPage = JSON.parse(window.localStorage.getItem("actualPage")) ?  JSON.parse(window.localStorage.getItem("actualPage")) : 1;
  const [idPage, setIdPage] = useState(JSON.parse(window.localStorage.getItem("actualPage")) ?  JSON.parse(window.localStorage.getItem("actualPage")) : 1)
  let actualDate = moment().format("LLL");
  let clearDate = moment().add(1, "day").format("LLL");
  const [hasMorePages ,setHasMorePages] = useState(hasMore)


  useEffect(() => {
    getOneOmpa();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  useEffect(() =>{

   
    getOompas();
  
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[page])


if(moment(actualDateStorage).isAfter(refreshingDateStorage))  {
  localStorage.removeItem(type+"clearDate");
  localStorage.removeItem(type+"actualdate");
  localStorage.removeItem(type+"storagedOompaLoompa");
  localStorage.removeItem("allstoragedOompaLoompas");
  localStorage.removeItem("actualPage");
  setIdPage(1)
  setOompas([]);
  setOompasToFilter([]);
}


    const getOompas = async () => {   

      let apiUpdated = api+actualPage
      const response = await getContent(apiUpdated);

if(idPage < response.data.total + 1 && type ==="all" && hasMorePages ) {
  window.localStorage.setItem("actualPage", JSON.stringify(response.data.current + 1));
  setHasMorePages( response.data.current < response.data.total)
  setIdPage((actualPage) => actualPage + 1)
  setOompas((prevOompas) => prevOompas.concat(response.data.results) );
  setOompasToFilter((oompas) => oompas.concat(response.data.results));
  localStorage.removeItem(type+"clearDate");
  localStorage.removeItem(type+"actualdate");
  window.localStorage.setItem(type+"actualDate", JSON.stringify(actualDate));
  window.localStorage.setItem(type+"clearDate", JSON.stringify(clearDate)); 
  const storagedOompas = JSON.parse(window.localStorage.getItem("allstoragedOompaLoompas")); 
  const mergedOompas = storagedOompas ? storagedOompas.concat(response.data.results) : response.data.results
   window.localStorage.setItem("allstoragedOompaLoompas", JSON.stringify(mergedOompas)); 
} 
}


const getOneOmpa = async () => {
 
  if ( (oompas.length === 0 || moment(actualDateStorage).isAfter(refreshingDateStorage)) && type !== "all") {
    let customApi=api+type
    const response = await getContent(customApi)           
        setOompas(response.data);
        window.localStorage.setItem(type+"actualDate", JSON.stringify(actualDate));
        window.localStorage.setItem(type+"clearDate", JSON.stringify(clearDate));  
  }
}

  return [oompas, setOompas, oompasToFilter,hasMorePages]   ;
};
