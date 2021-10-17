import React from "react";
import { CarouselComponet } from "../components/carousel/CarouselComponet";
import { NavComponent } from "../components/nav/NavComponent";

export const HeaderContainer = () => {

  return (
    <div className="headercontainer__main">
      <div className="headercontainer__main-content">
        <div className="row mt-2">
          <NavComponent/>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <div className="card">
              <div className="card-body text-alig-left">
                <div className="row">
                  <div className="col-lg-7 col-md-6 mb-4 mb-md-0">
                    <h3 className="headercontainer__card-title fw-bold">
                      HI. This is Lorem
                    </h3>
                    <p className="headercontainer__card-text">
                      Lorem ipsum es simplemente el rexto de relleno de las
                      imprentas y archivos de texto
                    </p>
                  </div>
                  <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
                    <button className="btn fs-4 btn-primary w-100">
                      <span>Ok let's go</span>
                      <i className="fas fa-arrow-circle-right ms-4"></i>
                    </button>
                    <br />
                    <button className="btn fs-4 btn-primary w-100">
                      <span>More info</span>
                      <i className="fas fa-question-circle ms-4"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 mb-3">
          <div className="col-12">
            <CarouselComponet/>
          </div>
        </div>
      </div>
    </div>
  );
};
