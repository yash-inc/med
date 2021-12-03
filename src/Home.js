import Navigation from "./Navigation";
import Header from "./Header";
import Trending from './Trending';
import Infiniteblogposts from './Infiniteblogposts'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Login from "./Login";
// import Signin from "./Signin";


function Home() {
  
  return (
     
      <div>
          <Navigation />
          <Header />
          <Trending />
          <Infiniteblogposts />

      </div>
        
  );
}

export default Home;









    