import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories=["all", ...new Set(items.map((item)=>item.category))];

function App() {
  const [menuItems, setmenuItems]=useState(items);
  const [categories, setCategories]=useState(allCategories);

  const filterItems=({category})=>{
    if(category==="all"){
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
    <Categories categories={categories} filterItems={filterItems}/>
    <Menu items={menuItems}/>
  </main>;
}

export default App;