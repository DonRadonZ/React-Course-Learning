import { useEffect, useRef } from "react";

import Modal, {type ModalHandle} from "../UI/Modal";


import UpcomingSession from "./UpcomingSession";

import { useSessionsContext } from "../../store/session-context";


type UpcomingSessionProps = {
    onClose: () => void;
}


export default function UpcomingSessions({onClose}: UpcomingSessionProps){
    const modal = useRef<ModalHandle>(null);
    const sessionsCtx = useSessionsContext();

    console.log(sessionsCtx);

    useEffect(() => {
        if(modal.current){
            modal.current.open();
        }
    },[])

    function handleCancelSessions(sessionId: string){
        sessionsCtx.cancelSession(sessionId);
    }

    const hasSessions = sessionsCtx.upcomingSessions.length > 0;

    return(
        <Modal ref={modal} onClose={onClose}>
            <h2>U</h2>
        </Modal>
    )
}