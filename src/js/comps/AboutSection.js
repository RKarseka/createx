// import svg from "../img/sprite.svg#play";
import React from "react";

const AboutSection = () => {
  return (
    <section className="about-section section-offset">
      <div className="container">
        <h2 className="title title-center">
          We are Createx Construction Bureau
        </h2>
        <p className="descr descr--center">
          We&nbsp;are rightfully considered to&nbsp;be&nbsp;the best
          construction company in&nbsp;the USA.
        </p>
        <div className="video-block">
          <button
            className="btn-reset video-block__play"
            aria-label="Play video"
          >
            <svg
              width="19"
              height="22"
              viewBox="0 0 19 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5 10.134C19.1667 10.5189 19.1667 11.4811 18.5 11.866L2 21.3923C1.33333 21.7772 0.499999 21.2961 0.499999 20.5263L0.5 1.47372C0.5 0.703921 1.33333 0.222794 2 0.607695L18.5 10.134Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            className="btn-reset video-block__muted"
            aria-label="Mute video"
          >
            <svg>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0003 15.5827C12.5837 15.9994 13.3337 15.666 13.3337 14.916V11.166L10.2503 14.2493L12.0003 15.5827Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.2503 4.41602C16.917 4.08268 16.417 4.08268 16.0837 4.41602L13.3337 7.16602V5.08268C13.3337 4.41602 12.5003 3.99935 12.0003 4.41602L9.66699 6.33268C9.33366 6.49935 9.00033 6.66602 8.58366 6.66602H6.66699C5.75033 6.66602 5.00033 7.41602 5.00033 8.33268V11.666C5.00033 12.5827 5.75033 13.3327 6.66699 13.3327H7.16699L4.41699 16.0827C4.08366 16.416 4.08366 16.916 4.41699 17.2494C4.75033 17.5827 5.25033 17.5827 5.58366 17.2494L17.2503 5.58268C17.5837 5.24935 17.5837 4.74935 17.2503 4.41602Z"
                  fill="white"
                />
              </svg>
            </svg>
          </button>
          <video
            className="video-block__content"
            src="./about-video.mp4"
            muted
            loop
            preload="metadata"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
