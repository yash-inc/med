import { BrowserRouter as Link } from "react-router-dom";
import './Infiniteblogposts.css'
import faker from 'faker';
function Infiniteblogposts() {
    return (
        <div className="infitescrollentiresection" >
            <div className="infitescrolltwoblocks">
                <div className="IScrolltwoCoulmn">
                    <div className="scrollsection">
                        <div className="post">
                       
                            <div className="postcontent">
                                <div className="articleprofile">
                                    <div className="articleprofileavatar">
                                        <a href="/" className="ui avatar image">
                                            <img alt="..." className="forcingimgininfinite" src={faker.image.avatar()} />
                                        </a> 
                                    </div>
                                    <div className="articleprofilename">
                                        <p className="articleprofilename">{faker.internet.userName()} aka {faker.name.firstName()}  {faker.name.lastName()} from {faker.address.cityName()} </p>
                                    </div>
                                </div>

                                <div className="articleheading">
                                
                                    <h2>{ faker.lorem.sentence()}</h2>
                                
                                </div>
                                <div className="onearticleline">
                                    <h3>{ faker.lorem.paragraph()}</h3>
                                    
                                </div>
                                <div className="DTSection">
                                    <span>{faker.date.month()}</span>
                                    <a>--</a>
                                    <span>{ faker.address.country()}</span>
                                    <a>--</a>
                                    <button type="button"> <Link to="/signin"><span>Read More</span></Link></button>
                                </div>
                            </div>
                            
                            
                            <a className="postimg">{ }</a>
                           
                        </div>
                        
                        {/*  */}
                        <div className="post">
                            <div className="postcontent">
                                <div className="articleprofile">
                                    <div className="articleprofileavatar">
                                        <a href="/" className="ui avatar image">
                                            <img alt="..." className="forcingimgininfinite" src={faker.image.avatar()} />
                                        </a> 
                                    </div>
                                    <div className="articleprofilename">
                                        <p className="articleprofilename">{faker.internet.userName()} aka {faker.name.firstName()}  {faker.name.lastName()} from {faker.address.cityName()} </p>
                                    </div>
                                </div>

                                <div className="articleheading">
                                    <h2>{ faker.lorem.sentence()}</h2>
                                </div>
                                <div className="onearticleline">
                                    <h3>{ faker.lorem.paragraph()}</h3>
                                    
                                </div>
                                <div className="DTSection">
                                    <span>{faker.date.month()}</span>
                                    <a>--</a>
                                    <span>{ faker.date.weekday()}</span>
                                    <a>--</a>
                                    <button type="button"> <Link to="/signin"><span>Read More</span></Link></button>
                                </div>
                            </div>
                            <a className="postimg"></a>
                        </div>
                        {/*  */}
                        <div className="post">
                            <div className="postcontent">
                                <div className="articleprofile">
                                    <div className="articleprofileavatar">
                                        <a href="/" className="ui avatar image">
                                            <img alt="..." className="forcingimgininfinite" src={faker.image.avatar()} />
                                        </a> 
                                    </div>
                                    <div className="articleprofilename">
                                        <p className="articleprofilename">{faker.internet.userName()} aka {faker.name.firstName()}  {faker.name.lastName()} from {faker.address.cityName()} </p>
                                    </div>
                                </div>

                                <div className="articleheading">
                                    <h2>{ faker.lorem.sentence()}</h2>
                                </div>
                                <div className="onearticleline">
                                    <h3>{ faker.lorem.paragraph()}</h3>
                                    
                                </div>
                                <div className="DTSection">
                                    <span>{faker.date.month()}</span>
                                    <a>--</a>
                                    <span>{ faker.date.weekday()}</span>
                                    <a>--</a>
                                    <span>{ faker.address.country()}</span>
                                    <a>--</a>
                                    <button type="button"> <Link to="/signin"><span>Read More</span></Link></button>
                                </div>
                            </div>
                            <a className="postimg"></a>
                        </div>
                        {/*  */}
                        <div className="post">
                            <div className="postcontent">
                                <div className="articleprofile">
                                    <div className="articleprofileavatar">
                                        <a href="/" className="ui avatar image">
                                            <img alt="..." className="forcingimgininfinite" src={faker.image.avatar()} />
                                        </a> 
                                    </div>
                                    <div className="articleprofilename">
                                        <p className="articleprofilename">{faker.internet.userName()} aka {faker.name.firstName()}  {faker.name.lastName()} from {faker.address.cityName()} </p>
                                    </div>
                                </div>

                                <div className="articleheading">
                                    <h2>{ faker.lorem.sentence()}</h2>
                                </div>
                                <div className="onearticleline">
                                    <h3>{ faker.lorem.paragraph()}</h3>
                                    
                                </div>
                                <div className="DTSection">
                                    <span>{faker.date.month()}</span>
                                    <a>--</a>
                                    <span>{ faker.date.weekday()}</span>
                                    <a>--</a>
                                    <span>{ faker.address.country()}</span>
                                    <a>--</a>
                                    <button type="button"> <Link to="/signin"><span>Read More</span></Link></button>
                                </div>
                            </div>
                            <a className="postimg"></a>
                        </div>
                        {/*  */}
                        <div className="post">
                            <div className="postcontent">
                                <div className="articleprofile">
                                    <div className="articleprofileavatar">
                                        <a href="/" className="ui avatar image">
                                            <img alt="..." className="forcingimgininfinite" src={faker.image.avatar()} />
                                        </a> 
                                    </div>
                                    <div className="articleprofilename">
                                        <p className="articleprofilename">{faker.internet.userName()} aka {faker.name.firstName()}  {faker.name.lastName()} from {faker.address.cityName()} </p>
                                    </div>
                                </div>

                                <div className="articleheading">
                                    <h2>{ faker.lorem.sentence()}</h2>
                                </div>
                                <div className="onearticleline">
                                    <h3>{ faker.lorem.paragraph()}</h3>
                                    
                                </div>
                                <div className="DTSection">
                                    <span>{faker.date.month()}</span>
                                    <a>--</a>
                                    <span>{ faker.date.weekday()}</span>
                                    <a>--</a>
                                    <span>{ faker.address.country()}</span>
                                    <a>--</a>
                                    <button type="button"> <Link to="/signin"><span>Read More</span></Link></button>
                                </div>
                            </div>
                            <a className="postimg"></a>
                        </div>
                        {/*  */}
                        <div className="post">
                            <div className="postcontent">
                                <div className="articleprofile">
                                    <div className="articleprofileavatar">
                                        <a href="/" className="ui avatar image">
                                            <img alt="..." className="forcingimgininfinite" src={faker.image.avatar()} />
                                        </a> 
                                    </div>
                                    <div className="articleprofilename">
                                        <p className="articleprofilename">{faker.internet.userName()} aka {faker.name.firstName()}  {faker.name.lastName()} from {faker.address.cityName()} </p>
                                    </div>
                                </div>

                                <div className="articleheading">
                                    <h2>{ faker.lorem.sentence()}</h2>
                                </div>
                                <div className="onearticleline">
                                    <h3>{ faker.lorem.paragraph()}</h3>
                                    
                                </div>
                                <div className="DTSection">
                                    <span>{faker.date.month()}</span>
                                    <a>--</a>
                                    <span>{ faker.date.weekday()}</span>
                                    <a>--</a>
                                    <span>{ faker.address.country()}</span>
                                    <a>--</a>
                                    <button type="button"> <Link to="/signin"><span>Read More</span></Link></button>
                                </div>
                            </div>
                            <a className="postimg"></a>
                        </div>
                        {/*  */}
                        <div className="post">
                            <div className="postcontent">
                                <div className="articleprofile">
                                    <div className="articleprofileavatar">
                                        <a href="/" className="ui avatar image">
                                            <img alt="..." className="forcingimgininfinite" src={faker.image.avatar()} />
                                        </a> 
                                    </div>
                                    <div className="articleprofilename">
                                        <p className="articleprofilename">{faker.internet.userName()} aka {faker.name.firstName()}  {faker.name.lastName()} from {faker.address.cityName()} </p>
                                    </div>
                                </div>

                                <div className="articleheading">
                                    <h2>{ faker.lorem.sentence()}</h2>
                                </div>
                                <div className="onearticleline">
                                    <h3>{ faker.lorem.paragraph()}</h3>
                                    
                                </div>
                                <div className="DTSection">
                                    <span>{faker.date.month()}</span>
                                    <a>--</a>
                                    <span>{ faker.date.weekday()}</span>
                                    <a>--</a>
                                    <span>{ faker.address.country()}</span>
                                    <a>--</a>
                                    <button type="button"> <Link to="/signin"><span>Read More</span></Link></button>
                                </div>
                            </div>
                            <a className="postimg"></a>
                        </div>
                        {/*  */}
                        <div className="post">
                            <div className="postcontent">
                                <div className="articleprofile">
                                    <div className="articleprofileavatar">
                                        <a href="/" className="ui avatar image">
                                            <img alt="..." className="forcingimgininfinite" src={faker.image.avatar()} />
                                        </a> 
                                    </div>
                                    <div className="articleprofilename">
                                        <p className="articleprofilename">{faker.internet.userName()} aka {faker.name.firstName()}  {faker.name.lastName()} from {faker.address.cityName()} </p>
                                    </div>
                                </div>

                                <div className="articleheading">
                                    <h2>{ faker.lorem.sentence()}</h2>
                                </div>
                                <div className="onearticleline">
                                    <h3>{ faker.lorem.paragraph()}</h3>
                                    
                                </div>
                                <div className="DTSection">
                                    <span>{faker.date.month()}</span>
                                    <a>--</a>
                                    <span>{ faker.date.weekday()}</span>
                                    <a>--</a>
                                    <span>{ faker.address.country()}</span>
                                    <a>--</a>
                                    <span>{ faker.address.zipCode()}</span>
                                </div>
                            </div>
                            <a className="postimg"></a>
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
