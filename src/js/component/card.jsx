import React from "react";
const Card=(props) => {
return(
    <div>
        <div className="card" style={{width:"18rem"}}>
  <img src={props.imagen} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.titulo}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
)
}
export default Card