import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

export const Navbar = () => {
  const cartItems = useSelector((state)=> state.cart)
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
  <Link class="navbar-brand" to='/'>Rakun Store</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link class="nav-link" aria-current="page" to='/'>Home</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" aria-current="page" to='/cart'>Cart</Link>
        </li>
      </ul>
      <span class="navbar-text">
        Cart Items : {cartItems.length}
      </span>
    </div>
  </div>
</nav>
        {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to='/'>Redux Store</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/cart'>Cart</Link>
        </li>
      </ul>
      <span class="navbar-text">
        Cart Items : 0
      </span>
    </div>
  </div>
</nav> */}
    </div>
  )
}
