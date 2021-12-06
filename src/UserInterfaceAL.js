import './UserInterfaceAL.css';
import faker from 'faker';

function UserInterfaceAL() {
    return (
        <div>
            <nav className="UIFNavbase" >
                <div className="UIFNav">
                    <div className="UIFNavlogo" />
                </div>
            </nav>
            
            <div className="postsection">
                <div className="middlepostsection">
                    <div className="mainheading">{faker.lorem.sentence()}</div>
                    <div className="mainheaderimage"></div>
                </div>
            </div>

        </div>
    )
 }

export default UserInterfaceAL