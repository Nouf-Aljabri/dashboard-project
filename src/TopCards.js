

export default function TopCards(props) {
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