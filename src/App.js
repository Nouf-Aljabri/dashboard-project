import React ,{Component} from "react";
import TopCards from "./TopCards";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import ReportCards from "./ReportCards";
import Footer from "./Footer";
import CustomersTable from "./CustomersTable";



class App extends Component {
  constructor(props) {
      super(props);
  }
  state = {}
  render() { 
    const topCardInfo =[{title:"Sales", number:"340.00SAR"},{title:"Orders",number:"1890"},{title:"Visitors", number:"352"},{title:"Conversation Rate", number:"3.37%"}];
    const chartInfo1 = [{icon:"fas fa-border-all mx-2",  chartID:"myAreaChart", name:"Orders"},{icon:"fas fa-eye" , chartID:"myBarChart", name:"Visitors"}];
    const chartInfo2 = [{icon:"fas fa-map-marker", chartID:"myPieChart", name:"Visitors Cities"},{icon:"fas fa-star", chartID:"myLinearChart", name:" Customers Rate"}];
      return ( 
<div>
     {/* Navbar */}
      <Nav />
  <div className="container-fluid">
    <div className="row">
      {/* Sidebar */}
      <Sidebar />
      {/* The Main Content */}
      <main className="col-10 container-fluid">
        {/* Reports Cards */}
        <div className="row">
          <h1>Dashboard</h1>
          <p className="text-muted">Dashboard</p>
        </div>
        {/*------------Top Cards ------------*/}
        <div className="row row-cols-1 row-cols-lg-4">
            {topCardInfo.map( card => {
              return <TopCards title={card.title} text={card.number} />
            })}
        </div>
        {/*------------ Reports Chart ------------*/}
        <div className="row my-4" > 
        {/*--------------Chart for Orders + Visitor--------------*/}
        {chartInfo1.map( card => {
          return <ReportCards  icon={card.icon}  chartID={card.chartID} name={card.name}/>
           })}

        </div>
         {/*--------------Chart for Cities + Rat--------------*/}
        <div className="row my-4" > 
        {chartInfo2.map( card => {
          return <ReportCards  icon={card.icon}  chartID={card.chartID} name={card.name}/>
           })}
        </div>
        
        {/* Customers Table */}
       <CustomersTable />
      </main></div>
    {/* Footer */}
   <Footer />
  </div>
</div>

         
     );
  }

}

export default App;

