import {Component} from "react";

function Cards (props){
    return ( 
  <div className="col  mx-3 px-0">
  <div className="card">
    <h5 className="card-header"><i className={props.icon} /> {props.name}</h5>
    <div className="card-body">
      <div>
        <canvas id={props.chartID} />
      </div>
    </div>
  </div>
</div>
         );
    
}
 

class Charts extends Component {
    render() { 
        return (
            <div>
           <div className="row my-4" > 
            <Cards icon="fas fa-border-all mx-2"  chartID="myAreaChart" name="Orders"/>
            <Cards icon="fas fa-eye"  chartID="myBarChart" name="Visitors"/>
            </div> 

            <div className="row my-4" > 
            <Cards icon="fas fa-map-marker"  chartID="myPieChart" name="Visitors Cities"/>
            <Cards icon="fas fa-star"  chartID="myLinearChart" name=" Customers Rate"/>
            </div> 
            </div>
           
            
        );
    }
}
 
export default Charts;
