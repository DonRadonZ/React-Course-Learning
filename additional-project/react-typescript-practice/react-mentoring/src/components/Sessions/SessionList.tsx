import SessionItem from "./SessionItem";

type SessionListProp = {
    sessions: {
    id: string;
    title: string;
    summary: string;
    image: string 
    }[],
}

export default function SessionList({sessions}: SessionListProp){
    return(
        <ul className="session-list">
            {sessions.map((session) => (
            <li key={session.id}>
                <SessionItem {...session}/>
            </li>
            ))}   
        </ul>
    )

}