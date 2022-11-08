import React, { useState, useEffect } from "react";
import { getSingleItemFromAPI } from "./mockService";
import { useParams } from "react-router-dom";
import "./itemdetail.css";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  let params = useParams();
  let id = params.id;

  useEffect(() => {
    getSingleItemFromAPI(id)
      .then((itemsDB) => {
        setProduct(itemsDB);
      })
      .catch((error) => alert(error));
  }, [id]);

  return (
    <div className="card-detail2">
      <div className="card-detail_img">
        <img src={product.thumbnail} />
      </div>
      <div className="card-detail_detail">
        <h2>{product.nombre}</h2>
        <p>{product.categoria}</p>
        <h4 className="priceTag">$ {product.precio}</h4>
      </div>
      {/* <ItemCount stock={product.stock}/> */}
    </div>
  );
}

export default ItemDetailContainer;
