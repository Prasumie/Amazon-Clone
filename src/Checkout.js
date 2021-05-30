import React from "react";
import{useStateValue} from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
function Checkout() {
const [{basket}] = useStateValue();
return (
<div className="checkout">
<img className="checkout_ad" src="https://yt3.ggpht.com/hW8WcvwOgy69I5etqtcUhW8ReUwAa8Te_rAMDA9sKjQ6cAzDgNcwTctMLq6eDqk2TvUafLQpYJg=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"/>
<img className="checkout_ad" src="https://yt3.ggpht.com/L3YXqipHuhFBHUO6UqCpr49I4tQaUEuA1fPfdwOJct30EK9wuAnNViyHysvt5RRV4lAqdm4A=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"/>

{basket?.length === 0 ?(
<div>
<h2>Your Shopping Basket is empty</h2>
<p>You have no products in your basket. to buy one click on "Add to basket.Have a good time shopping online."</p>
</div>
) : (
<div>
<h2 className="checkout_title">Your Shopping Basket</h2>
{basket.map(item =>(
<CheckoutProduct
item   ={item.id}
title  ={item.title}
image  ={item.image}
price  ={item.price}
rating ={item.rating}
/>
))}
</div>
)}
</div>
);
}
export default Checkout;