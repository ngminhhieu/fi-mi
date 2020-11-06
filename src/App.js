import React from "react";
import "./App.sass";
import Footer from "./Footer/Footer.jsx";
import Header from "./Header/Header.jsx";
import Home from "./Pages/Home/Home.jsx";
import Team from "./Pages/Team/Team.jsx";
import Architecture from "./Pages/Architecture/Architecture.jsx";
import Objective from "./Pages/Objective/Objective.jsx";
import Deliverable from "./Pages/Deliverable/Deliverable.jsx";
import Publication from "./Pages/Publication/Publication.jsx";
import News from "./Pages/News/News.jsx";
import NewsDetail from "./Pages/NewsDetail/NewsDetail.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/architecture" component={Architecture} />
          <Route exact path="/objective" component={Objective} />
          {/* <Route exact path="/deliverable" component={Deliverable} /> */}
          <Route exact path="/publication" component={Publication} />
          <Route exact path="/news" component={News} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/news-detail/:id" component={NewsDetail} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
