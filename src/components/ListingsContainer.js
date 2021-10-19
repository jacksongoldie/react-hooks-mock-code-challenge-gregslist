import ListingCard from "./ListingCard";

function ListingsContainer({ items, handleDeleteClick }) {

/*   const [items, setItems] = useState([]);

  useEffect (() => {
    fetch('http://localhost:6001/listings')
    .then((r) => r.json())
    .then((items) => setItems(items))
  }, []) */

/*   function handleDeleteClick(id){
    console.log(id)
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE", 
    })
      .then((r) => r.json())
      .then(() => console.log('deleted'))

      setItems(items.filter((item) => item.id !== id))
  } */


  
  return (
    <main>
      <ul className="cards">
        {items.map((item) => (
          <ListingCard 
          key={item.id} 
          item={item} 
          onDeleteItem={handleDeleteClick}/>
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
