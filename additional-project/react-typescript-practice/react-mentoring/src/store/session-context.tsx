import { createContext, useContext, ReactNode, useReducer } from 'react';


export type Session = {
    id: string;
    title: string;
    summary: string;
    description: string;
    duration: number;
    date: string;
    image: string;

}

type SessionState = {
    upcomingSessions: Session[];
}

type SessionContextValue = SessionState & {
    bookSession: (session: Session) => void;
    cancelSession: (sessionId: string) => void;
}

export const SessionContext = createContext<SessionContextValue | null>(null);


// eslint-disable-next-line react-refresh/only-export-components
export function useSessionsContext(){
    const context = useContext(SessionContext);
    if(!context) {
        throw new Error(
            'useSessionsContext must be use within a SessionContextProvider'
        );
    }
    return context
}

type BookSessionAction = {
  type: 'BOOK_SESSION';
  session: Session;
};

type CancelSessionAction = {
  type: 'CANCEL_SESSION';
  sessionId: string;
};

type SessionAction = BookSessionAction | CancelSessionAction;

function sessionsReducer(state: SessionState, action: SessionAction) {
    if(action.type === 'BOOK_SESSION') {
        if(
            state.upcomingSessions.some((session) => session.id === action.session.id)
        ){
            return state
        }
        return {
            upcomingSessions: state.upcomingSessions.concat(action.session),
        };
    }

    if(action.type === 'CANCEL_SESSION') {
        return {
            upcomingSessions: state.upcomingSessions.filter(
                (session) => session.id !== action.sessionId),
        };
    }  
    return state

}

export default function SessionContextProvider({children}: {children: ReactNode}){
    const[sessionState, dispatch] = useReducer(sessionsReducer, {
        upcomingSessions: []
    });

    function bookSession(session: Session) {
        dispatch({ type: 'BOOK_SESSION', session });
  }
    function cancelSession(sessionId: string) {
        dispatch({ type: 'CANCEL_SESSION', sessionId });
  }

  const ctxValue = {
    upcomingSessions : sessionState.upcomingSessions,
    bookSession,
    cancelSession
  }

  return(
    <SessionContext.Provider value={ctxValue}>
        {children}
    </SessionContext.Provider>
  )
}

