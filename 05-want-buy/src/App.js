const initialItems = [
  { id: 1, description: "Milk", quantity: 2, packed: false },
  { id: 2, description: "Candy", quantity: 12, packed: false },
];


export default function App() {
  return(
    <div className="app">
      <Logo/>
      <Form/>
      <BuyingList/>
      <Stats/>
    </div>
  )
}

function Logo() {
  return(
    <h1>🛒 To Buy ✅</h1>
  )
}

function Form() {
  return <div className="add-form">
    <h3>What do you need to buy?</h3>
  </div>
}

function BuyingList() {
  
  return (
  <div  className="list">
    <ul>
      {initialItems.map((item) => (
        <Item item={item}/>
    ))}
    </ul>
  </div>
  )
} 

function Item({item}){
  return(
    <li>
      <span>
        {item.quantity} {item.description} 
      </span>
      <button>X</button>    
    </li>
  )
}

function Stats() {
  return <footer className="stats">
   <em> You have X items on your list, and you already packed X (X%) </em>
  </footer>
} 