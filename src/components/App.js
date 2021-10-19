import {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {
  const [allItems, setAllItems] = useState([])
  const [search, setSearch] = useState('')
  const [items, setItems] = useState([]);


  //LEFT OFF HERE = GET ITEMS FROM FETCH TO RENDER SEARCH??
  useEffect (() => {
    fetch('http://localhost:6001/listings')
    .then((r) => r.json())
    .then((items) => {
      setItems(items)
      setAllItems(items)
    })
  }, []) 

  function handleSearch(e){
    //debugger;
    setSearch(e.target.value)
    //filter based on search
    //setItems(items.filter((item) => item.description.toLowerCase().includes(e.target.value.toLowerCase())))
  }

 

  function handleDeleteClick(id){
    console.log(id)
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE", 
    })
      .then((r) => r.json())
      .then(() => console.log('deleted'))

      setItems(items.filter((item) => item.id !== id))
  } 

  return (
    <div className="app">
      <Header search={search} handleSearchInApp={handleSearch} setItems={setItems} items={allItems} />
      <ListingsContainer items={items} handleDeleteClick={handleDeleteClick}/>
    </div>
  );
}

export default App;
