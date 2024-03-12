import { useState } from "react";


import UpcomingSessions from '../Sessions/UpcomingSessions';

import Button from "../UI/Button";


export default function Header() {
 const [upcomingSessionVisible, setUpcomingSessionVisible] = useState(false);

 function showUpcomingSession(){
    setUpcomingSessionVisible(true)
 }
 
 function hideUpcomingSession(){
    setUpcomingSessionVisible(false)
 }

 return(
    <>
        {upcomingSessionVisible && (
            <UpcomingSessions onClose={hideUpcomingSession}/>
        )}
    </>
 )
}