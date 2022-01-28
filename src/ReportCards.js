import {Component} from "react";

export default function ReportCards (props){
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
 

