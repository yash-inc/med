import './UserInterfaceAL.css';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import InNav from './InNav';

function UserInterfaceAL() {
    return (
        <div>
            <InNav />
            
            <div className="postsection">
                <div className="middlepostsection">
                    <div className="mainheadinginUIAL">{faker.lorem.sentence()}</div>
                    <div className="profiledetails">
                        <div className="profiledetailstwosec"> 
                            <div className="userprofile">
                                <div className="dp"><img className="dpf" src={faker.image.image()} />  </div>
                                <p className="usernameinUP">{faker.name.firstName()} {faker.name.lastName() }</p>
                            </div>
                            <div className="socialhandels">
                                <p className="pinsocialhandels"><i class="inverted black large twitter icon"></i>
                                    <i class="inverted black large facebook f icon"></i>
                                    <i class="inverted black large instagram icon"></i>
                                    <i class="inverted black large linkify icon"></i>
                                    <i class="inverted black large share square icon"></i>
                                    <i class="inverted black large ellipsis horizontal icon"></i>
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="mainheaderimage">
                     <img src={faker.image.image()} />
                    </div>

                    <div className="postarea">
                        
                        <p>{ faker.lorem.paragraphs()}</p>
                        <a>{ faker.lorem.sentence()}</a>
                        <p>{ faker.lorem.paragraphs()}</p>
                        <a>{ faker.lorem.sentence()}</a>
                        <p>{ faker.lorem.paragraphs()}</p>
                        <a>{ faker.lorem.sentence()}</a>
                        <p>{ faker.lorem.paragraphs()}</p>
                        <a>{ faker.lorem.sentence()}</a>
                        <p>{ faker.lorem.paragraphs()}</p>
                        <a>{ faker.lorem.sentence()}</a>

                    </div>
                </div>
            </div>

        </div>
    )
 }

export default UserInterfaceAL










































// import './UserInterfaceAL.css';
// import React from 'react';
// import faker from 'faker';
// import InNav from './InNav';

// function UserInterfaceAL() {
//     return (
//         <div>
//             <InNav />
            
//             <div className="postsection">
//                 <div className="middlepostsection">
//                     <div className="mainheadinginUIAL">{faker.lorem.sentence()}</div>
//                     <div className="profiledetails">
//                         <div className="profiledetailstwosec"> 
//                             <div className="userprofile">
//                                 <div className="dp"><img className="dpf" src={faker.image.image()} />  </div>
//                                 <p className="usernameinUP">{faker.name.firstName()} {faker.name.lastName() }</p>
//                             </div>
//                             <div className="socialhandels">
//                                 <p className="pinsocialhandels"><i class="inverted black large twitter icon"></i>
//                                     <i class="inverted black large facebook f icon"></i>
//                                     <i class="inverted black large instagram icon"></i>
//                                     <i class="inverted black large linkify icon"></i>
//                                     <i class="inverted black large share square icon"></i>
//                                     <i class="inverted black large ellipsis horizontal icon"></i>
//                                 </p>

//                             </div>
//                         </div>
//                     </div>

//                     <div className="mainheaderimage">
//                      <img src={faker.image.image()} />
//                     </div>

//                     <div className="postarea">
                        
//                         <p>{ faker.lorem.paragraphs()}</p>
//                         <a>{ faker.lorem.sentence()}</a>
//                         <p>{ faker.lorem.paragraphs()}</p>
//                         <a>{ faker.lorem.sentence()}</a>
//                         <p>{ faker.lorem.paragraphs()}</p>
//                         <a>{ faker.lorem.sentence()}</a>
//                         <p>{ faker.lorem.paragraphs()}</p>
//                         <a>{ faker.lorem.sentence()}</a>
//                         <p>{ faker.lorem.paragraphs()}</p>
//                         <a>{ faker.lorem.sentence()}</a>

//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
//  }

// export default UserInterfaceAL