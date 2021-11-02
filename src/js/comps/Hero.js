import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <h1 className="main-title main-title--home">
            Create<span>x</span> Consrtaction
          </h1>
          <p className="main-descr main-descr--home">
            Cras ultrices leo vitae non viverra. Fringilla nisi quisque
            consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis
            purus eget pellentesque integer ipsum elementum felis.
          </p>
          <div className="hero__btns">
            <button className="btn-reset btn btn--stroke btn--stroke-light">
              Learn more about us
            </button>
            <button className="btn-reset btn--fill btn btn--fill-primary">
              SUBMIT REQUEST
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
