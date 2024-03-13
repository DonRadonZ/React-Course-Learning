import { Outlet } from 'react-router-dom';
import Header from '../components/Navigation/MainHeader';
import SessionContextProvider from '../store/session-context';

export default function Root() {
  return (
    <>
    <SessionContextProvider>
      {/* Todo: Add Header */}
      <Header/>
      <Outlet />
      </SessionContextProvider>
    </>
  );
}
