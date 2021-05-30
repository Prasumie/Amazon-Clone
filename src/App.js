import React from 'react';
import './App.css';
import Header from './Header';
import Checkout from "./Checkout";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";

function App() {
return (
<Router>
<div className="app">

<Switch>

<Route path="/checkout">
<Header/>
<Checkout/>
</Route>

<Route path="/login">
<Header/>
<Login/>
</Route>

<Route path="/">
<Header/>
<Home/>
</Route>

</Switch>

</div>
</Router>
);
}
{
/*We need React-router*/
}
{
/*localhost.com*/
}
{
/*localhost.com/checkout*/
}
{
/*localhost.con/login*/
}
export default App;
