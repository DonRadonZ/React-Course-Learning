import {useState} from 'react'

import Logo from './components/Logo';
import Form from './components/Form';
import  BuyingList  from './components/BuyingList';
import Stats from './components/Stats';

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





