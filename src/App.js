import {Component} from "react";

function TopCards(props) {
  return(
 <div className="col">
      <div className="card m-3 px-0 bg-pink">
        <div className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
        </div>
        <div className="card-footer"> <a href="#" className="card-link text-white">View Details <i className="fas fa-angle-right mx-3" /></a></div>
      </div>
 </div>
  );

  
}

class App extends Component {
  constructor(props) {
      super(props);
  }
  state = {}
  render() { 
      return ( 
          <div className="row row-cols-1 row-cols-lg-4">
          <TopCards title="Sales"  text="340.00SAR"/>
          <TopCards title="Orders"  text="1890"/>
          <TopCards title="Visitors" text="352"/>
          <TopCards title="Conversation Rate"  text="3.37%"/>
          </div>
         
     );
  }
}

export default App;

