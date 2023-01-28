import React from 'react';
import './Navbar.css'

function Navbar() {
  const navElem = document.getElementsByClassName("navbar");
  const navbarLinks = document.getElementsByClassName("navbar-links");
  const navbarLinksList = document.getElementsByTagName("li")
  const root = document.getElementById("root");

  let scrolledOnce = false;
  
  // listen for scrolling events
  window.addEventListener("scroll", animateNavbar);
  
  function animateNavbar() {

    let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollPos == 0 && scrolledOnce == true) {
      scrolledOnce = false;
      navElem[0].style.animation = "navbarChangeBackgroundBack 0.2s linear 1 forwards"
      for (let i = 0; i < navbarLinksList.length; i++) {
        navbarLinksList[i].style.animation = "shiftNavbarBack 0.2s linear 1 forwards"
      }
      root.style.setProperty('--hover-color', 'rgba(40, 240, 165, 0.4)');

    } else if (scrollPos >= 100) {
      scrolledOnce = true;
      navElem[0].style.animation = "navbarChangeBackground 0.2s linear 1 forwards"
      for (let i = 0; i < navbarLinksList.length; i++) {
        navbarLinksList[i].style.animation = "shiftNavbar 0.2s linear 1 forwards"
      }
      root.style.setProperty('--hover-color', 'rgb(85, 85, 85, 0.5)');
    } 
  }

  function smoothScroll(id) {
    document.getElementById(id).scrollIntoView({behavior: "smooth"});
  }

  return (
      <nav className="navbar">
        <div className="brand-title">Scare The Bears</div>
        <a  
          className="toggle-button" 
          onClick={() => {
          navbarLinks[0].classList.toggle('active');
        }}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className="navbar-links">
          <ul className="navbar-links-list">
            <li><a onClick={() => {smoothScroll("home")}}>HOME</a></li>
            <li><a onClick={() => {smoothScroll("about")}}>GENERATOR</a></li> 
          </ul>
        </div>
      </nav>
    );
}

export default Navbar