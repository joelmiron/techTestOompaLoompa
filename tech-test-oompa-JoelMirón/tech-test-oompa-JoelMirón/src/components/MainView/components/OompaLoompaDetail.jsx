import { useGetOompas } from "hooks/useGetOompas";
import { useParams } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";
import { API } from "constants/constants";
import BodyDetail from "./BodyDetail";

export const OompaLoompaDetail = () => {
  let { id } = useParams();
  const type = id;
  const api = API + "/";
  let [oompa] = useGetOompas(type, api);
  const [storagedOompaLoompa, setStoragedOompaLoompa] = useState(JSON.parse(  localStorage.getItem(id + "storagedOompaLoompa")) || []
  );

  useEffect(() => {
    updateStorageItems(oompa);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [oompa]);

  const updateStorageItems = (oompa) => {
    if (Object.keys(storagedOompaLoompa).length === 0) {
      setStoragedOompaLoompa(oompa);
    }
      localStorage.setItem(id + "storagedOompaLoompa",JSON.stringify(oompa)
    );
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
