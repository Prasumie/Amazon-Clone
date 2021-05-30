import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useStateValue} from "./StateProvider";
{/*rfce*/}
function Header() {
const[{basket}] = useStateValue();
console.log(basket);
return (
<nav className="header">
{/*logo on the left*/}
<Link to="/">
<img className="header_logo"
src="https://pngimg.com/uploads/amazon/
amazon_PNG11.png"/>
</Link>
{/*Search Box*/}
<div className="header_search"> 
<input type="text" className="header_searchInput"/>
<SearchIcon className="header_searchIcon"/>
</div>
{/*Links*/}
<div className="header_nav">

{/*First Links*/}
<Link to="/login" className="header_link">
<div className="header_option">
<span className="header_optionLineOne">Hello</span>
<span className="header_optionLineTwo">Sign In</span>
</div>
</Link>
{/*Second Links*/}
<Link to="/" className="header_link">
<div className="header_option">
<span className="header_optionLineOne">Return</span>
<span className="header_optionLineTwo">& Orders</span>
</div>
</Link>
{/*Third Links*/}
<Link to="/" className="header_link">
<div className="header_option">
<span className="header_optionLineOne">Your</span>
<span className="header_optionLineTwo">Prime</span>
</div>
</Link>

</div>
{/*Basket Icon*/}
<Link to="/checkout" className="header_link">
<div className="header_optionBasket">
<ShoppingCartIcon/>
<span className="header_optionLineTwo_basketCount">{basket?.length}</span>
</div>
</Link>
</nav>
);
}

export default Header;
