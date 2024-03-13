import {FormEvent, useEffect, useRef} from "react"

import Modal, {ModalHandle} from "../UI/Modal"
import Input from "../UI/Input"
import Button from "../UI/Button"
import { Session, useSessionsContext } from "../../store/session-context"

type BookSessionProps = {
    session: Session
    onDone: () => void
}

export default function BookSession({session, onDone}: BookSessionProps){
    const modal = useRef<ModalHandle>(null)
    const sessionsCtx = useSessionsContext();

    useEffect(() => {
        if(modal.current){
            modal.current.open();
        }
    },[]);

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        console.log(data);
        sessionsCtx.bookSession(session);
        onDone();
    }

    return(
        <Modal ref={modal} onClose={onDone}>
            <h2>Book Session</h2>
            <form onSubmit={handleSubmit}>
                <Input label="Your Name" id="name" name="name" type="text"/>
                <Input label="Your Email" id="email" name="email" type="email"/>
                <p className="action">
                    <Button type="button" textOnly onClick={onDone}>Cancel</Button>
                    <Button>Booking</Button>
                </p>
            </form>
        </Modal>
    )
}