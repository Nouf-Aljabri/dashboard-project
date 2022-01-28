export default function Sidebar() {
    return(
        
        <div className="collapse  bg-purple col-2 p-0 position-relative" id="navbarToggleExternalContent">
        <nav className="navbar-dark">
          <ul className="navbar-nav px-3">
            <li className="nav-item">
              <a className="nav-link my-2" href="index.html"><i className="fas fa-home mx-2" />Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link my-2" href="products.html"><i className="fas fa-tshirt mx-2" />Products</a>
            </li>
            <li className="nav-item">
              <a href="#submenu1" data-bs-toggle="collapse" className="nav-link my-2">
                <i className="fas fa-border-all mx-2" />Orders
                <i className="fas fa-angle-right mx-3" /></a>
              <ul className="list-unstyled collapse" id="submenu1" data-bs-parent="#menu">
                <li className="w-100">
                  <a href="#" className="nav-link px-3">
                    <span className="d-none d-sm-inline">New Orders</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-3">
                    <span className="d-none d-sm-inline">Past Orders</span></a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#submenu2" data-bs-toggle="collapse" className="nav-link my-2">
                <i className="fas fa-chart-area mx-2" />Reports
                <i className="fas fa-angle-right mx-3" /></a>
              <ul className="list-unstyled collapse" id="submenu2" data-bs-parent="#menu">
                <li className="w-100">
                  <a href="report.html" className="nav-link px-3">
                    <span className="d-none d-sm-inline">Monthly Reports</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-3">
                    <span className="d-none d-sm-inline">Yearly Reports</span></a>
                </li>
              </ul>
            </li>
            <li className="nav-item my-2">
              <a className="nav-link" href="customers.html">
                <i className="fas fa-users mx-2" /> Customers</a>
            </li>
          </ul>
        </nav>
        <footer className="bg-purple px-4 mt-0 position-absolute fixed-bottom">
          <p>Logged in as:</p>
          <p>nrt admin</p>
        </footer>
      </div>
    );
}