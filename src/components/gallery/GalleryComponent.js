import React from "react";

export const GalleryComponent = () => {
  return (
    <>
      <h4 className="fw-bold ms-2">Interesting stuff</h4>
      <div className="container-flex">
        <div className="d-flex flex-row bd-highlight mb-3">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6">
              <img
                className="bodycontainer__card-img mt-2"
                src={`./assets/images/pic01.jpg`}
                alt="..."
              />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <img
                className="bodycontainer__card-img mt-2"
                src={`./assets/images/pic02.jpg`}
                alt="..."
              />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <img
                className="bodycontainer__card-img mt-2"
                src={`./assets/images/pic03.jpg`}
                alt="..."
              />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <img
                className="bodycontainer__card-img mt-2"
                src={`./assets/images/pic05.jpg`}
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-flex ms-2">
        <button className="btn fs-6 btn-primary w-15 pt-2 pb-2 ps-4 pe-4">
          <i className="fas fa-file-alt me-1"></i>
          <span>More</span>
        </button>
      </div>
    </>
  );
};
