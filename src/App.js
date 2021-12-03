import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

import Login from "./Login";
import Signin from "./Signin";
import Home from "./Home";


function App() {
  
  return (
    <Router>
    <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/login" component={Login}/>
         <Route path="/signin" component={Signin}/>
    </Switch>
  </Router>
        
  );
}

export default App;



// import React, { Suspense, lazy } from "react";


// Login = lazy(() => import('./Login'))
// Signin = lazy(() => import('./Signin'))

// class App extends React.Component {
//   render(){
//       return (
//           <div>
//               <h1>LazyLoading</h1>
//               <Suspense fallback={<div>Pleasewait login is loading</div>} >
//               <Login />
//               </Suspense>
//               <Suspense fallback={<div>pleasewait signin is loading</div>}>
//                   <Signin/>
//               </Suspense>

//           </div>
//       );
//   }
// }
// export default App;







// privious work

    // <Router>
    //   <Switch>
    //   <Route exect path="/" component={Home} />
    //     <Route exect path="/login" component={Login} />
    //       <Route exact path="/signin" component={Signin}/> 
    //   </Switch>

    // </Router>