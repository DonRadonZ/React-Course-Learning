import {useState} from 'react'

// const initialItems = [
//   { id: 1, description: "Milk", quantity: 2, bought: false },
//   { id: 2, description: "Candy", quantity: 12, bought: false },
//   { id: 3, description: "Softener", quantity: 6, bought: false },
// ];


export default function App() {
  const [items, setItems] = useState([]);
  

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items)=> items.filter((item)=>item.id !== 
    id));
  }

  function handleToggleItem(id){
    setItems((items) => 
    items.map((item) => 
      item.id === id ? {...item, bought: !item.bought}
      : item
      )
    );
  };

  function handleClearItem(){
    const confirmed = window.confirm('Are you sure you want to delete all items?');
    
    if(confirmed)
    setItems([]);
  }

  return(
    <div className="app">
      <Logo/>
      <Form onAddItems={handleAddItems} />
      <BuyingList 
      items={items} 
      onDeleteItem={handleDeleteItem}
      onToggleItem={handleToggleItem}
      onClearItem={handleClearItem}
       />
      <Stats items={items}/>
    </div>
  )
}

function Logo() {
  return(
    <h1>🛒 To Buy ✅</h1>
  )
}

function Form({onAddItems}) {
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

    onAddItems(newItem);

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

function BuyingList({items, onDeleteItem, onToggleItem, onClearItem}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if(sortBy === 'input') sortedItems = items;

  if(sortBy === 'description') sortedItems = items
  .slice()
  .sort((a,b) => a.description.localeCompare(
    b.description));

  if(sortBy === 'bought') 
  sortedItems = items
.slice()
.sort((a,b) => Number(a.bought) - Number(b.bought));

  return (
  <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} 
          onDeleteItem={onDeleteItem} 
          onToggleItem={onToggleItem}
          key={item.id} />
        ))}
      </ul>

      <div className='actions'> 
        <select value={sortBy} onChange={e=>setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="bought">Sort by bought status</option>
        </select>
        <button onClick={onClearItem}>Clear list</button>
      </div>
  </div>
  )
} 

function Item({item, onDeleteItem, onToggleItem}){
  
  return(
    <li>
      <input type="checkbox" value={item.bought} 
      onChange={()=> onToggleItem(item.id)} />
      <span style={item.bought ? {textDecoration: 'line-through'} : {}}>
        {item.quantity} {item.description} 
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>    
    </li>
  )
}

function Stats({ items }) {
  if(!items.length) return(
  <p className='stats'><em>Start adding some items to your buying List</em></p>)

  const numItems = items.length;
  const numBought = items.filter((item) => item.bought).length;
  const percentage = Math.round((numBought / numItems) * 100)
  return (<footer className="stats">
   <em>
    {percentage === 100 ? 'You got everything!'  
    : `You have ${numItems} items on your list, 
    and you already packed ${numBought} (${percentage}%)`} 
    </em>
  </footer>
  );
} 