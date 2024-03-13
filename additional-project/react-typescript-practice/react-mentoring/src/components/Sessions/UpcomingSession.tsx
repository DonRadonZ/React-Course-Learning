import Button from "../UI/Button";

type UpcomingSessionProp = {
    session:{
        id: string;
        title: string;
        summary: string;
        date: string;
    }
    onCancel: () => void;
}

export default function UpcomingSession({session,onCancel}: UpcomingSessionProp){
    return(
        <article className="upcoming-session">
            <div>
                <h3>{session.title}</h3>
                <p>{session.summary}</p>
            </div>
            <time dateTime={new Date(session.date).toISOString()}>
                {new Date(session.date).toLocaleDateString('th-TH',{
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                })}
            </time>
            <p className="action">
                <Button textOnly onClick={onCancel}>
                    Cancel
                </Button>
            </p>
        </article>
    )
}