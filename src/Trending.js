import faker from 'faker';
import './Trending.css';



function Trending() {
    return (
        <div className="TBox">
            <div className="trandingstrip">
                <i className="trandingicon"></i>
                <p className="trandingtext">Trending ON MEDIUM</p>
            </div>

            <div className="sixTrendingBox">
                <div className="onesize">
                    <span className="topsixnumber">01</span>
                    
                    <div className="innerblockof3row">
                        <div className="authorname">
                        <a href="/" className="ui avatar image">
                         <img alt="..." className="forcingimg" src={faker.image.avatar()} />
                        </a> 
                            <p> {faker.name.firstName()}  {faker.name.lastName()} </p>
                        </div>

                        <div className="artcalheading">
                            <text>{faker.lorem.paragraph()} </text>
                        </div>

                        <div className="articaldateandtime">
                            <p>in {faker.date.month()}  from { faker.address.cityName() }</p>
                        </div>
                    
                    </div>
                </div>    
                <div className="onesize">
                    <span className="topsixnumber">02</span>
                    <div className="innerblockof3row">

                        <div className="authorname">
                        <a href="/" className="ui avatar image">
                         <img alt="..." className="forcingimg" src={faker.image.avatar()} />
                        </a> 
                            <p> {faker.name.firstName()}  {faker.name.lastName()} </p>
                        </div>

                        <div className="artcalheading">
                            <text>{faker.lorem.paragraph()} </text>
                        </div>

                        <div className="articaldateandtime">
                            <p>in {faker.date.month()}  from { faker.address.cityName() }</p>
                        </div>
                    
                    </div>
                </div>
                <div className="onesize">
                    <span className="topsixnumber">03</span>
                    <div className="innerblockof3row">

                        <div className="authorname">
                        <a href="/" className="ui avatar image">
                         <img alt="..." className="forcingimg" src={faker.image.avatar()} />
                        </a> 
                            <p> {faker.name.firstName()}  {faker.name.lastName()} </p>
                        </div>

                        <div className="artcalheading">
                            <text>{faker.lorem.paragraph()} </text>
                        </div>

                        <div className="articaldateandtime">
                            <p>in {faker.date.month()}  from { faker.address.cityName() }</p>
                        </div>
                    
                    </div>
                </div>
                <div className="onesize">
                    <span className="topsixnumber">04</span>
                    <div className="innerblockof3row">

                        <div className="authorname">
                        <a href="/" className="ui avatar image">
                         <img alt="..." className="forcingimg" src={faker.image.avatar()} />
                        </a> 
                            <p> {faker.name.firstName()}  {faker.name.lastName()} </p>
                        </div>

                        <div className="artcalheading">
                            <text>{faker.lorem.paragraph()} </text>
                        </div>

                        <div className="articaldateandtime">
                            <p>in {faker.date.month()}  from { faker.address.cityName() }</p>
                        </div>
                    
                    </div>
                </div>
                <div className="onesize">
                    <span className="topsixnumber">05</span>
                    <div className="innerblockof3row">

                        <div className="authorname">
                        <a href="/" className="ui avatar image">
                         <img alt="..." className="forcingimg" src={faker.image.avatar()} />
                        </a> 
                            <p> {faker.name.firstName()}  {faker.name.lastName()} </p>
                        </div>

                        <div className="artcalheading">
                            <text>{faker.lorem.paragraph()} </text>
                        </div>

                        <div className="articaldateandtime">
                            <p>in {faker.date.month()}  from { faker.address.cityName() }</p>
                        </div>
                    
                    </div>
                </div>
                <div className="onesize">
                    <span className="topsixnumber">06</span>
                    <div className="innerblockof3row">

                        <div className="authorname">
                        <a href="/" className="ui avatar image">
                         <img alt="..." className="forcingimg" src={faker.image.avatar()} />
                        </a> 
                            <p> {faker.name.firstName()}  {faker.name.lastName()} </p>
                        </div>

                        <div className="artcalheading">
                            <text>{faker.lorem.paragraph()} </text>
                        </div>

                        <div className="articaldateandtime">
                            <p>in {faker.date.month()}  from { faker.address.cityName() }</p>
                        </div>
                    
                    </div>
                </div>
            </div>
            
            
        </div>
    )
    
}
export default Trending
   






































