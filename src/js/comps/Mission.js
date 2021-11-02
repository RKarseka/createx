import React from "react";

const Mission = () => {
  return (
    <section className="mission section-offset">
      <div className="container">
        <h2 className="title title-center">Our core values</h2>
        <p className="descr descr--center">
          Our mission is&nbsp;to&nbsp;set the highest standards for construction
          sphere.
        </p>
        <ul className="list-reset mission__list">
          <li className="mission__item mission__item--quality">
            <h3 className="mission__subtitle">Quality</h3>
            <p className="mission__descr">
              Culpa nostrud commodo ea&nbsp;consequat aliquip reprehenderit.
              Veniam velit nostrud aliquip sunt.
            </p>
          </li>
          <li className="mission__item mission__item--safety">
            <h3 className="mission__subtitle">Safety</h3>
            <p className="mission__descr">
              Anim reprehenderit sint voluptate exercitation adipisicing laborum
              adipisicing. Minim empor est&nbsp;ea.
            </p>
          </li>
          <li className="mission__item mission__item--comfort">
            <h3 className="mission__subtitle">Comfort</h3>
            <p className="mission__descr">
              Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit
              voluptate ullamco proident ea&nbsp;ad.
            </p>
          </li>
        </ul>

        <form action="#" className="know-form">
          <h2 className="konw-form__title">
            Want to&nbsp;know more? Ask&nbsp;us a&nbsp;question:
          </h2>
          <div className="know-form__content">
            <label htmlFor="" className="know-form__field form-field">
              <span className="form-field__caption">Name</span>
              <input
                className="form-field__input"
                type="text"
                placeholder="Your name"
              />
            </label>
            <label htmlFor="" className="know-form__field form-field">
              <span className="form-field__caption">Phone</span>
              <input
                className="form-field__input"
                type="tel"
                placeholder="Your phone"
              />
            </label>
            <label
              htmlFor=""
              className="know-form__field form-field form-field--big"
            >
              <span className="form-field__caption">Message</span>
              <input
                className="form-field__input"
                type="text"
                placeholder="Your message"
              />
            </label>
            <button
              className="btn-reset know-form__btn btn btn--fill"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Mission;
