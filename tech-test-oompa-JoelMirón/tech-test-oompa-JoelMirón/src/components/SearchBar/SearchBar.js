import iconSearch from "assets/img/ic_search.png";
import { useState } from "react/cjs/react.development";

const SearchBar = ({ setOompas,oompas, oompasToFilter,setHasMore }) => {
  const [search, setSearch] = useState("");

  //OnChange event from searchBar
  const searchValue = (e) => {
    let searchBar = e.target.value;
    setSearch(searchBar);
    loompaSearch(searchBar);
    setHasMore(false)
if(searchBar.length === 0){
  setHasMore(true)
}
    
  };

  //search bar filter function
  const loompaSearch = (searchBar) => {
    let loompaResult = oompasToFilter.filter((loompa) => {
      if (
        loompa.first_name
          .toString()
          .toLowerCase()
          .includes(searchBar.toLowerCase()) ||
        loompa.last_name
          .toString()
          .toLowerCase()
          .includes(searchBar.toLowerCase()) ||
        loompa.profession
          .toString()
          .toLowerCase()
          .includes(searchBar.toLowerCase())
      ) {
        return loompa;
      }
      return false;
    });
    setOompas(loompaResult);


    
  };

  return (
    <div className="searchContainer">
      <div className="searchBar">
        <div className="inputContainer">
          <input placeholder="Search" value={search} onChange={searchValue} />

          <img className="searchImg" alt="searchImg" src={iconSearch} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
