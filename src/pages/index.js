import Men from "./men/Men";
import Home from "./home/Home";
import Women from "./women/Women";
import Youth from "./youth/Youth";
import About from "./about/About";
import Events from "./events/Events";
import Giving from "./giving/Giving";
import Contact from "./contact/Contact";
import Messages from "./messages/Messages";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/Navbar";
import Leadership from "./leadership/Leadership";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Main() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/men" exact component={Men} />
        <Route path="/about" exact component={About} />
        <Route path="/women" exact component={Women} />
        <Route path="/youth" exact component={Youth} />
        <Route path="/giving" exact component={Giving} />
        <Route path="/events" exact component={Events} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/messages" exact component={Messages} />
        <Route path="/leadership" exact component={Leadership} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Main;
