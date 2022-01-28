
function CustomersTable() {
    return ( 
        <div className="row  my-4">
        <div className="card col mx-3 px-0">
          <h5 className="card-header"><i className="fas fa-users mx-2" /> Customers</h5>
          <div className="card-body">
            <table id="example" className="display" style={{width: '100%'}}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>Age</th>
                  <th>Last Visit</th>
                  <th>Orders</th>
                </tr>
              </thead>
            </table>
          </div>
        </div></div>
     );
}

export default CustomersTable;