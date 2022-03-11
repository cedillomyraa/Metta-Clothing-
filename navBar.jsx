import'./navBar.css';

const NavBar = () => {
     return(
    //<div className='navBar'>
//     <h2>This is the Nav Bar</h2>
//    </div>
   <div className="topnav">
   <a className="home" href="#home">Home</a>
   <a href="#shop">Shop</a>
   <a href="#contact">Contact</a>
   <a href="#about">About</a>
   <a href="#cart">Cart</a>
 </div>
   
   );

};

export default NavBar;