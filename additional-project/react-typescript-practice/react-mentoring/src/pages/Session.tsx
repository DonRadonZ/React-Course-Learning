import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { SESSIONS } from '../dummy-sessions.ts';
import BookSession from '../components/Sessions/BookSession.tsx';

import Button from '../components/UI/Button.tsx';

export default function SessionPage() {
  const params = useParams<{ id: string }>();
  const [isBooking, setIsBooking] = useState(false);

  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);

  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }

  function handleBooking(){
    setIsBooking(true)
  }

  function handleCancel(){
    setIsBooking(false)
  }


  return (
    <main id="session-page">
      {isBooking && (
        <BookSession session={loadedSession} onDone={handleCancel}/>
      )}
      <article>
        <header>
          <img
            src={loadedSession.image}
            alt={loadedSession.title}
          />
          <div>
            <h2>{loadedSession.title}</h2>
            <time dateTime={new Date(loadedSession.date).toISOString()}>
              {new Date(loadedSession.date).toLocaleDateString('th-TH', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </time>
            <p>
              {/* Todo: Add button that opens "Book Session" dialog / modal */}
              <Button onClick={handleBooking}>Start Booking</Button>
            </p>
          </div>
        </header>
        <p id="content">{loadedSession.description}</p>
      </article>
    </main>
  );
}
