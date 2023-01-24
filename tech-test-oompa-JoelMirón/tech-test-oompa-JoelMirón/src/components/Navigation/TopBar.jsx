import logoLoompa from "assets/img/logo-loompa.png";
import { useHistory } from "react-router";

const TopBar = () => {
  const history = useHistory();

  const navigation = () => {
    history.replace("/");
  };

  return (
    <div className="topBar">
      <div className="titleContainer">
        <img title="logoLoompa" className="loompaImg" alt="logoLoompa" src={logoLoompa} onClick={navigation}/>Oompa Loompa's Crew
      </div>
    </div>
  );
};

export default TopBar;
