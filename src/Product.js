import React from "react";
import "./Product.css";
import Noty from "noty";
import "../node_modules/noty/lib/noty.css";
import "../node_modules/noty/lib/themes/mint.css";
import { useStateValue } from "./StateProvider";
function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log(basket);
  const addToBasket = () => {
    // To dispatch item to data layer

    new Noty({
      type: "success",
      layout: "topRight",
      text: `<div class="noty__container"><div class="noty__image"><img src=${image}></div><div class="noty__text"><strong>${title} </strong>has been added to your basket.</div></div>`,
      closeWith: ["button"],
    }).show();

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="The lean Product" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
