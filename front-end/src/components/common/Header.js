import React, {PropTypes} from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
   <nav>
      <NavLink className="nav-item nav-link" exact activeClassName="active" to="/">Home</NavLink>
       {" | "}
       <NavLink className="nav-item nav-link"  activeClassName="active" to="/posts" >Posts</NavLink>
        {" | "}
       <NavLink className="nav-item nav-link" activeClassName="active" to="/about">About</NavLink>
    </nav>


    
  );
};

export default Header