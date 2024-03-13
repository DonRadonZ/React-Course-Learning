import { useEffect, useRef } from "react";

import Modal, {type ModalHandle} from "../UI/Modal";


import UpcomingSession from "./UpcomingSession";

import { useSessionsContext } from '../../store/session-context';
import Button from "../UI/Button";


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

    function handleCancelSession(sessionId: string){
        sessionsCtx.cancelSession(sessionId);
    }

    const hasSessions = sessionsCtx.upcomingSessions.length > 0;

    return(
        <Modal ref={modal} onClose={onClose}>
            <h2>Upcoming Session</h2>
            {hasSessions && (
                <ul>
                    {sessionsCtx.upcomingSessions.map((session) => (
                        <li key={session.id}>
                            <UpcomingSession
                                session={session}
                                onCancel={() => handleCancelSession(session.id)}
                            />
                        </li>
                    ))}
                </ul>
            )}
            {!hasSessions && <p>You hadn't add any session</p>}
            <p className="action">
                <Button onClick={onClose}>Close</Button>
            </p>
        </Modal>
    )
}