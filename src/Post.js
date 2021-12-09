import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Post = (props) => {
  

  // const [heading, setheading] = useState();
  // const [article, setarticle] = useState();
  // const [id, setid] = useState();
 
  let Location = useLocation();

  

  
  // console.log("yeh ek lock => " + JSON.stringify(Location));
  //  console.log(props,'props');
  //  let Id = Location.id;
  //  let Id = Location.state.Id;

  console.log(Location.data.id, " Location.data.Id id here new");
  console.log("this is my props", props)

  // useEffect(() => {
  //   axios(` https://django-react-blog-application.herokuapp.com/blog/${Id} `)
  //     .then(data => {
  //     let getheading = data.data.heading;
  //     let getarticle = data.data.article;
  //     let getid = data.data.uuid;
    
  //       setheading(getheading);
  //       console.log(setheading);
  //       setarticle(getarticle)
  //       console.log(setarticle);
  //       setid(getid)
  //       console.log("id" + getid);
      
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });

  // },[]);
 
    
  return (
      <div>
      <p>hii</p>
        <h1>{ props.id}</h1>

        {/* <p>{id}. {heading}</p>
      <a> {article} </a> */}
      </div>
        
    );

}
export default Post







// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link, useLocation } from "react-router-dom";


// const Post = (prosp) => {

//     const [users, setUser] = useState();
//     const [heading, setheading] = useState();
//     const [article, setarticle] = useState();
//     const [id, setid] = useState();

//     console.log(Location);
//     console.log(props,'props');
//     let Id = Location.value.Id;
    
//     let Location = useLocation();
    
//     let Id = Location.value.Id;
//     console.log(Id, " Location.data.Id id here new");

//     useEffect(() => {
//         axios(` https://django-react-blog-application.herokuapp.com/blog/${Id} `)
//           .then(data => {
//           let getheading = data.data.heading;
//           let getarticle = data.data.article;
//           let getid = data.data.uuid;
        
//           setheading(getheading);
//           setarticle(getarticle)
//           setid(getid)
          
//           })
//           .catch(function(error) {
//             console.log(error);
//           });
    
//     }, []);
    

//     return (
//         <>
    
//           <Link to="/">           
//               <h1 className="">Back... </h1>
//           </Link>
           
//                 id:{id}. <br/> <a>{heading}</a>
//                   <br />
//                  <p>{article}</p> 
             
          
    
//         </>
    
//     );


// }
// export default Post
