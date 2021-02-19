import AboutUs from "./pages/AboutUs";
import GlobaStyles from "./components/GlobalStyles";
import Nav from "./components/NavBar";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobaStyles />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
