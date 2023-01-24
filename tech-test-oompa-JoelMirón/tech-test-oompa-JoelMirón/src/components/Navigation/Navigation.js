import { Redirect, Switch } from "react-router";
import { Route, Link } from "react-router-dom";
import MainView from 'components/MainView/MainView';
import TopBar from 'components/Navigation/TopBar'
import { OompaLoompaDetail } from "components/MainView/components/OompaLoompaDetail";

const Navigation = () => {
  return (
  <>   
  <TopBar/>
        <Link to="/"></Link>
        <Link to="/detail"></Link>

        <Switch>
          <Route exact path="/">     <MainView/></Route>
          <Route path="/:id"><OompaLoompaDetail/> </Route>
          <Redirect to="/" />
        </Switch>

   


      </>
   
  );
};

export default Navigation;
