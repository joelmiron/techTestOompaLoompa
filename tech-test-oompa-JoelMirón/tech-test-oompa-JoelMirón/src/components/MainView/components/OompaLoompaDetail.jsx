import { useGetOompas } from "hooks/useGetOompas";
import { useParams } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";
import BodyDetail from "./BodyDetail";

export const OompaLoompaDetail = () => {
  let { id } = useParams();
  const type = id;
  const api ="https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/";
  let [oompa] = useGetOompas(id, type, api);
  const [storagedOompaLoompa, setStoragedOompaLoompa] = useState(JSON.parse(window.localStorage.getItem(id + "storagedOompaLoompa")) || []);

  useEffect(() => {
    updateStorageItems(oompa);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [oompa]);


  const updateStorageItems = (oompa) => {
    //check if the page Oompa Loompa exists on localStorage, if don't exists use returned oompaLoompa from customHook if not, use storaged Oompa Loompa
    if (Object.keys(storagedOompaLoompa).length === 0) {
      setStoragedOompaLoompa(oompa);  
    }
    //set data from OompaLoompa on Local Storage
    window.localStorage.setItem(id + "storagedOompaLoompa",JSON.stringify(oompa));
  };

  return (
    <>
      {storagedOompaLoompa ? (
        <BodyDetail
          image={storagedOompaLoompa.image}
          name={storagedOompaLoompa.first_name}
          lastName={storagedOompaLoompa.last_name}
          gender={storagedOompaLoompa.gender}
          profession={storagedOompaLoompa.profession}
          description={storagedOompaLoompa.description}
        />
      ) : (
        <div>loading</div>
      )}
    </>
  );
};
