import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import menu from './data';

function App() {
  const [menuItems, setmenuItems]=useState(items);
  const [categories, setCategories]=useState([]);

  const filterItems=(category)=>{
    if(category==="All"){
      setmenuItems(items);
    }
    else{
      const newItems=items.filter((item)=>item.category===category);
      setmenuItems(newItems);
    }
    
  }

  return <main>
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
    </section>
    <Categories filterItems={filterItems}/>
    <Menu items={menuItems}/>
  </main>;
}

export default App;