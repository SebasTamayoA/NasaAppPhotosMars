//rafce
import React from "react"

const Photos = ({ photos = [] }) => {
  return (
    <div className="row">
      {photos.map((item, index) => (
        <div key={index} className="col-4">
          <div className="card">
            <img src={item.img_src} alt={item.camera.full_name} />
            <div className="card-body">
              <h5 className="card-title">{item.camera.full_name}</h5>
              <p>Earth date: {item.earth_date}</p>
              <p>Rover: {item.rover.name}</p>
              <p>Landing date: {item.rover.landing_date}</p>
              <p>Launch date: {item.rover.launch_date}</p>
              </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Photos;
