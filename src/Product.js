import React from 'react';
import "./Product.css";
import star from './star.png'; 
import {useStateValue} from "./StateProvider";

function Product({id, title, image, rating, price}) {
const [{basket}, dispatch]= useStateValue();
const addToBasket = () =>{
dispatch({
type: 'ADD_TO_BASKET',
item:{
id:id,
title:title,
image: image,
price:price,
rating:rating
}
})
}
return (
<div className="product">
<div className="product_info">
<p>{title}</p>
<p className="product_price">
<small>$</small>
<strong>{price}</strong>
</p>
<div className="product_rating">
{Array(rating)
.fill()
.map((_) =>(
<p>
<img className="star" src={star}/>
</p>
))}
</div>
</div>
<img src={image}/>
<button onClick={addToBasket}>Add to basket</button>
</div>
)
}
export default Product;
