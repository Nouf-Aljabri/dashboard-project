import {Component} from "react";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {brand:"" }
    }
    
   componentDidMount() {
    this.setState({brand:"Nrt Solution"});
   }

    render() { 
        return ( 
 <nav className="navbar navbar-dark bg-purple">
  <div className="container-fluid">
    {/* Navbar Brand*/}
    <div className="d-flex">
      <a className="navbar-brand" href="index.html"> {this.state.brand}</a>
      {/* Sidebar Toggle Icon*/}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
    </div>
    <div className="d-flex">
      {/* Navbar Search*/}
      <form className="navbar-form" role="search">
        <div className="input-group ">
          <input type="text" className="form-control" placeholder="Search for..." aria-describedby="button-search" />
          <button className="btn btn-outline-secondary bg-pink" type="button" id="button-search">
            <span className="fas fa-search" />
          </button>
        </div>
      </form>
      {/* User Profile*/}
      <div className="dropdown">
        <a className="nav-link dropdown-toggle text-white-50" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span className="fas fa-user-alt"> </span>
        </a>
        <ul className="dropdown-menu dropdown-menu-lg-end" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="#">Setting</a></li>
          <li><a className="dropdown-item" href="#">New Orders</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>

         );
    }
}
 
export default Nav;