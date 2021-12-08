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
   


                // <div className="onesize">
                //     <span className="topsixnumber">02</span>
                //     <div className="innerblockof3row">

                //         <div className="authorname">
                //         <a href="/" className="ui avatar image">
                //          <img alt="..." className="forcingimg" src={faker.image.avatar()} />
                //         </a> 
                //             <p> {faker.name.firstName()}  {faker.name.lastName()} </p>
                //         </div>

                //         <div className="artcalheading">
                //             <text>{faker.lorem.paragraph()} </text>
                //         </div>

                //         <div className="articaldateandtime">
                //             <p>in {faker.date.month()}  from { faker.address.cityName() }</p>
                //         </div>
                    
                //     </div>
                // </div>
                // <div className="onesize">
                //     <span className="topsixnumber">03</span>
                //     <div className="innerblockof3row">

                //         <div className="authorname">
                //         <a href="/" className="ui avatar image">
                //          <img alt="..." className="forcingimg" src={faker.image.avatar()} />
                //         </a> 
                //             <p> {faker.name.firstName()}  {faker.name.lastName()} </p>
                //         </div>

                //         <div className="artcalheading">
                //             <text>{faker.lorem.paragraph()} </text>
                //         </div>

                //         <div className="articaldateandtime">
                //             <p>in {faker.date.month()}  from { faker.address.cityName() }</p>
                //         </div>
                    
                //     </div>
                // </div>
                // <div className="onesize">
                //     <span className="topsixnumber">04</span>
                //     <div className="innerblockof3row">

                //         <div className="authorname">
                //         <a href="/" className="ui avatar image">
                //          <img alt="..." className="forcingimg" src={faker.image.avatar()} />
                //         </a> 
                //             <p> {faker.name.firstName()}  {faker.name.lastName()} </p>
                //         </div>

                //         <div className="artcalheading">
                //             <text>{faker.lorem.paragraph()} </text>
                //         </div>

                //         <div className="articaldateandtime">
                //             <p>in {faker.date.month()}  from { faker.address.cityName() }</p>
                //         </div>
                    
                //     </div>
                // </div>
                // <div className="onesize">
                //     <span className="topsixnumber">05</span>
                //     <div className="innerblockof3row">

                //         <div className="authorname">
                //         <a href="/" className="ui avatar image">
                //          <img alt="..." className="forcingimg" src={faker.image.avatar()} />
                //         </a> 
                //             <p> {faker.name.firstName()}  {faker.name.lastName()} </p>
                //         </div>

                //         <div className="artcalheading">
                //             <text>{faker.lorem.paragraph()} </text>
                //         </div>

                //         <div className="articaldateandtime">
                //             <p>in {faker.date.month()}  from { faker.address.cityName() }</p>
                //         </div>
                    
                //     </div>
                // </div>
                // <div className="onesize">
                //     <span className="topsixnumber">06</span>
                //     <div className="innerblockof3row">

                //         <div className="authorname">
                //         <a href="/" className="ui avatar image">
                //          <img alt="..." className="forcingimg" src={faker.image.avatar()} />
                //         </a> 
                //             <p> {faker.name.firstName()}  {faker.name.lastName()} </p>
                //         </div>

                //         <div className="artcalheading">
                //             <text>{faker.lorem.paragraph()} </text>
                //         </div>

                //         <div className="articaldateandtime">
                //             <p>in {faker.date.month()}  from { faker.address.cityName() }</p>
                //         </div>
                    
                //     </div>
                // </div>



































