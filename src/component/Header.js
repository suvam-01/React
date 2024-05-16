const Title= ()=>(
    <a href="/">
    <img
    className="logo"
      alt="logo"
      src="https://content.jdmagicbox.com/comp/chandauli/a9/9999p5412.5412.211225124946.d8a9/catalogue/spice-villa-mughalsarai-chandauli-restaurants-cnnfjztpe1.jpg"
    
    />
    </a>
  );


const Header=()=>{
    return(
      <div className="header">
        <Title/>
        <div className="nav-items">
          <ul>
            <li>Home </li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
  
        </div>
      </div>
  
    )
  }

  export default Header