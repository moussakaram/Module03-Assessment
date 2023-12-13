import React from 'react'

const Card = ({sources, title, description}) => {
  return (
    <div>
      

      <div className="card" >
  <img src={sources} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="#" className="btn btn-primary">continue ...</a>
  </div>
</div>

    </div>
  )
}

export default Card
