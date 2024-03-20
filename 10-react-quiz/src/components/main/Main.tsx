import { ReactNode } from 'react';


type MainProp = {
    children: ReactNode
  }

export default function Main({children}: MainProp) {
  return (
    <main className='main'>
      {children}
    </main>
  )
}