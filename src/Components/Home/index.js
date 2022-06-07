import React from 'react';
import {
  Homesection,
  HomeInformation,
  HomeTitle,
  HomeInfo,
  HomeDesc,
  Span,
  HomeBtn,
} from './style.js';
const Home = () => {
  return (
    <Homesection>
      <div className="container">
        <HomeInformation>
          <HomeTitle>Abdo Maher</HomeTitle>
          <HomeInfo>Creative FrontEnd Developer</HomeInfo>
          <HomeDesc className="home-desc">
            I am a professional <Span>UI Designer</Span> and FrontEnd
          </HomeDesc>
          <HomeBtn className="home-btn">Let's Begin</HomeBtn>
        </HomeInformation>
      </div>
    </Homesection>
  );
};

export default Home;
