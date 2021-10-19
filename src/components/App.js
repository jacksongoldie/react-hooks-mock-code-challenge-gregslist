import {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {

  const [search, setSearch] = useState('')
  const [items, setItems] = useState([]);

  useEffect (() => {
    fetch('http://localhost:6001/listings')
    .then((r) => r.json())
    .then((items) => setItems(items))
  }, []) 

  function handleSearch(value){
    console.log(value)
    setSearch(value)
    //filter based on search
    setItems(items.filter((item) => item.description.toLowerCase().includes(search.toLowerCase())))
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
      <Header search={search} handleSearchInApp={handleSearch} />
      <ListingsContainer items={items} handleDeleteClick={handleDeleteClick}/>
    </div>
  );
}

export default App;
