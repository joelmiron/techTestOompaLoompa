import SearchBar from "components/SearchBar/SearchBar";
import { Suspense } from "react";
import { useGetOompas } from "hooks/useGetOompas";
import React, { useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { API } from "api";
const OompaLoompaMain = React.lazy(() =>import("./components/OompaLoompaMain"));

const MainView = () => {
  const type = "all";
  
  const api = API+"?page=";
  const [page, setPage] = useState(1);
  const [hasMore,setHasMore] = useState(true)
  const [oompas, setOompas,oompasToFilter] = useGetOompas(type, api,hasMore,page);
  const elementRef = useRef();


  return (
    <div className="MainContainer">
       <SearchBar setOompas={setOompas} oompas={oompas}  setHasMore={setHasMore} oompasToFilter={oompasToFilter}  />

      <div className="titleMain">
        <div className="title">Find your Oompa Loompa  </div>
        <div className="subTitle">There are more than 100k</div>
      </div>
      <InfiniteScroll dataLength={oompas.length}  hasMore={hasMore} next={() => setPage((prevPage) => prevPage + 1)}> 
      <div className="oompaLoompasContainer">
        <Suspense fallback={null}>
          {oompas ? (
            oompas.map((oompa) => (
              <OompaLoompaMain
                key={oompa.id}
                id={oompa.id   }
                image={oompa.image}
                firstName={oompa.first_name}
                lastName={oompa.last_name}
                gender={oompa.gender}
                profession={oompa.profession}
              />
            ))
          ) : (
            <></>
          )}
        </Suspense>
      </div>
      </InfiniteScroll>
      <div ref={elementRef}></div>
    </div>
  );
};

export default MainView;
