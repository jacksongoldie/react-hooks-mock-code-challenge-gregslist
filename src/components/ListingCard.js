import {useState} from "react";

function ListingCard({ item, onDeleteItem }) {

  const [isFavorited, setIsFavorited] = useState(false);

 /*  function handleFavorite(){

  } */

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image ? item.image : "https://via.placeholder.com/300x300"} alt={"description"} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button className="emoji-button favorite active" onClick={() => setIsFavorited(!isFavorited)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={() => setIsFavorited(!isFavorited)}>☆</button>
        )}
        <strong>{item.description ? item.description : "no description"}</strong>
        <span> · {item.location}</span>
        <button className="emoji-button delete" onClick={() => onDeleteItem(item.id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
