import React from "react";
import home1 from "../img/home1.png"

import {About,Description,Hide,Image} from "../style";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazings skills
        </p>
        <button>Contact Us</button>
        </Description>
        <Image>
            <img src={home1} alt="guy with camera" />
        </Image>
    </About>
  );
};

export default AboutSection;
