import { getContent, removeDates, removeLocalStorageItems, setDates, getStoragedContent } from "utils";
import { useState,useEffect} from "react";
const moment = require("moment");

export const useGetOompas = (type, api, hasMore, page) => {
let customApi = ""
  const [oompas, setOompas] = useState(type === "all" ? JSON.parse( localStorage.getItem("allstoragedOompaLoompas")) || [] :
                              JSON.parse( localStorage.getItem(type + "storagedOompaLoompa")) || []);
  const [oompasToFilter, setOompasToFilter] = useState(JSON.parse( localStorage.getItem("allstoragedOompaLoompas")) || []);
  const [idPage, setIdPage] = useState(JSON.parse( localStorage.getItem("actualPage")) ? JSON.parse( localStorage.getItem("actualPage")) : 1)
  const [hasMorePages, setHasMorePages] = useState(hasMore)
  let{actualDateStorage,refreshingDateStorage,actualPage,actualDate,clearDate} = getStoragedContent()


  useEffect(() => {
    getSingleOompa();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  useEffect(() => {
    getOompas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])


  if (moment(actualDateStorage).isAfter(refreshingDateStorage)) {
    removeDates(type)
    removeLocalStorageItems(type)
    setIdPage(1)
    setOompas([]);
    setOompasToFilter([]);
  }


  const getOompas = async () => {
     customApi = api + actualPage
    const response = await getContent(customApi);

    if (idPage < response.data.total + 1 && type === "all" && hasMorePages) {
       localStorage.setItem("actualPage", JSON.stringify(response.data.current + 1));
      setHasMorePages(response.data.current < response.data.total)
      setIdPage((actualPage) => actualPage + 1)
      setOompas((prevOompas) => prevOompas.concat(response.data.results));
      setOompasToFilter((oompas) => oompas.concat(response.data.results));
      removeDates(type)
      setDates(type,actualDate,clearDate)
      const storagedOompas = JSON.parse( localStorage.getItem("allstoragedOompaLoompas"));
      const mergedOompas = storagedOompas ? storagedOompas.concat(response.data.results) : response.data.results
       localStorage.setItem("allstoragedOompaLoompas", JSON.stringify(mergedOompas));
    }
  }


  const getSingleOompa = async () => {

    if ((oompas.length === 0 || moment(actualDateStorage).isAfter(refreshingDateStorage)) && type !== "all") {
       customApi = api + type
      const response = await getContent(customApi)
      setOompas(response.data);
      setDates(type,actualDate,clearDate)
    }
  }

  return [oompas, setOompas, oompasToFilter, hasMorePages];
};