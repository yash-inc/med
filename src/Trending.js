import React, { useEffect, useState } from 'react'
import faker from 'faker';
import './Trending.css';



function Trending() {

    const [users, setUser] = useState([])

    useEffect(() => {
        getUsers();
    }, [])

    function getUsers() {
        fetch("https://django-react-blog-application.herokuapp.com/get_blog/").then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
                setUser(resp)
            })
        })
    }
    
    
    
    return (
        

        <div div className = "TBox" >
            <div className="trandingstrip">
                <i className="trandingicon"></i>
                <p className="trandingtext">Trending ON MEDIUM</p>
            </div>

            <div className="sixTrendingBox">{
                users.map((item, i) =>
                
                    <div className="onesize">
                            <span className="topsixnumber">0{i}</span>
                    
                        <div className="innerblockof3row">
                            <div className="authorname">
                                <a href="/" className="ui avatar image">
                                    <img alt="..." className="forcingimg" src={item.image} />
                                </a>
                                <p> {item.user}</p>
                            </div>

                            <div className="artcalheading">
                                <text>{item.article}</text>
                            </div>

                            <div className="articaldateandtime">
                                    <p>{item.tags[0]} <span>
                                    {item.tags[1]} </span>
                                    <span>{item.tags[2]}</span></p>
                            </div>
                    
                        </div>
                    </div>

            
            )
            }</div>


            
            
        </div >
        
    )
    
}
export default Trending