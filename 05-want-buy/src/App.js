import {useState} from 'react'
const initialItems = [
  { id: 1, description: "Milk", quantity: 2, bought: false },
  { id: 2, description: "Candy", quantity: 12, bought: false },
  { id: 2, description: "Softener", quantity: 6, bought: true },
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
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1)

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description, quantity, bought: false,
      id: Date.now()
    };
    console.log(newItem);

    setDescription('');
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to buy?</h3>
      <select

        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map
          ((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)} />
      <button>Add</button>
    </form>
  );
}

function BuyingList() {
  
  return (
  <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
  </div>
  )
} 

function Item({item}){
  return(
    <li>
      <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
        {item.quantity} {item.description} 
      </span>
      <button>❌</button>    
    </li>
  )
}

function Stats() {
  return <footer className="stats">
   <em> You have X items on your list, and you already packed X (X%) </em>
  </footer>
} 