import { useState } from "react";
import { NavLink } from "react-router-dom";


import UpcomingSessions from '../Sessions/UpcomingSessions';
import Button from "../UI/Button";




export default function Header() {
 const [upcomingSessionsVisible, setUpcomingSessionsVisible] = useState(false);

 function showUpcomingSessions(){
    setUpcomingSessionsVisible(true)
 }
 
 function hideUpcomingSessions(){
    setUpcomingSessionsVisible(false)
 }

 return(
    <>
        {upcomingSessionsVisible && (
            <UpcomingSessions onClose={hideUpcomingSessions}/>
        )}
        <header id="main-header">
               <h1>React Mentor</h1>
               <nav>
               <ul>
                  <li>
                     <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''} end>Our Mission</NavLink>
                  </li>
                  <li>
                     <NavLink to="/sessions" className={({isActive}) => isActive ? 'active' : ''} end>Browser Session</NavLink>
                  </li>
                  <li>
                     <Button onClick={showUpcomingSessions}>Upcoming Session</Button>
                  </li>
               </ul>
            </nav>
        </header>
    </>
 )
}