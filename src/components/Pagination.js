import React from 'react'



  const Pagination = ({ onPrevious, onNext }) => {
    return (
      <nav className="navbar navbar-ligth bg-ligth">
        <div className="container justify-content-center">
          <div className="row">
            <div className="col-6">
              <button className="btn btn-primary" onClick={onPrevious}>Previous</button>
            </div>
            <div className="col-6">
              <button className="btn btn-primary" onClick={onNext}>Next</button>
            </div>
          </div>
        </div>
      </nav>
    )
  }
  


export default Pagination