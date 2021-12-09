import { BrowserRouter as Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './Infiniteblogposts.css';
import Post from "./Post";
function Infiniteblogposts() {

    const [users, setUser] = useState([])
    
    useEffect(() => {
        getUsers();
       }, []
    )
    function getUsers() {
        fetch("https://django-react-blog-application.herokuapp.com/get_blog/").then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
                setUser(resp)
                // console.log("yeh hai" + resp[0].uuid)
                // setid(resp[0].uuid)
                
            })
        })
    }
    const [id, setid] = useState([])
    var uuid = null
    let ID =null
    
    return (
        <div className="infitescrollentiresection" >
            <div className="infitescrolltwoblocks">
                <div className="IScrolltwoCoulmn">
                    <div className="scrollsection">
                        
                        <div className="creatingflex">
                            {users.map((item, i) => 
                                // ID(item.id),
                                
                                <div className="post">
                        
                                    <div className="postcontent">
                                        <div className="articleprofile">
                                            <div className="articleprofileavatar">
                                                <a href="/" className="ui avatar image">
                                                    <img alt="..." className="forcingimgininfinite" src={item.image} />
                                                    
                                                </a>
                                            </div>
                                            <div className="articleprofilename">
                                                <p className="articleprofilename">{item.user} </p>
                                            </div>
                                        </div>

                                        <div className="articleheading">
                                            <h2>{item.heading}</h2>
                            
                                        </div>
                                        <div className="onearticleline">
                                            <h3>{item.article}</h3>
                                        
                                        </div>
                                        <div className="DTSection">
                                            
                                            <a>id={item.uuid}</a>
                                            <Post id={item.uuid}/>
                                             
                                            <button type="button">
                                                <Link to={{
                                                    pathname: "/post",
                                                    ID : item.uuid,
                                                }}>
                                                    <>Read More</></Link></button> 
                                            
                                        </div>
                                    </div>
                                
                                
                                    <img className="postimg" src={item.image}></img>
                            
                                </div>
                            
    
                            )}
                        </div>



                    </div>


                    {/* the features section which is on the right side of the screen */}
                    <div className="profilesection">
                        <div className="keywordsection">
                            <div className="keywordsectioncoulmn">
                                <div className="discovertxt">
                                    <p className="discovertext">DISCOVER MORE OF WHAT MATTERS TO YOU</p>
                                </div>
                                <div className="featurtags">
                                    <p className="tags">Self</p>
                                    <p className="tags">Relationships</p>
                                    <p className="tags">Data Science</p>
                                    <p className="tags">Programming</p>
                                    <p className="tags">Productivity</p>
                                    <p className="tags">Javascript</p>
                                    <p className="tags">Machine Learning</p>
                                    <p className="tags">Politics</p>
                                    <p className="tags">Health</p>
                                </div>

                                <div className="footer">
                                    <p className="footertext">Help</p>
                                    <p className="footertext">Status</p>
                                    <p className="footertext">Writers</p>
                                    <p className="footertext">Blog</p>
                                    <p className="footertext">Careers</p>
                                    <p className="footertext">Privacy</p>
                                    <p className="footertext">Terms</p>
                                    <p className="footertext">About</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
 }

export default Infiniteblogposts
