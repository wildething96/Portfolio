import { useState, useEffect } from "react";
import Styled, { keyframes } from "styled-components";

import Headshot from "./Headshot.jpg";

let centerPictureSize = {
  standard: "25rem",
  halfWidth: "12.5rem",
  phoneStandard: "18rem",
  phoneHalf: "9rem",
};

let isOpen;
let isPageLoad = true;

let pageSize;

function CenterPicture() {
  const [open, setOpen] = useState(false);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

    isOpen = open;

    if(open === true) {
        isPageLoad = false;
    }
    
    useEffect (() => {
      const handleResize = () => {
      setPageWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
    }, [])

    pageSize = pageWidth;

  return (
    <CenterPictureStyle>
      <h1 className="h1">Hello I'm Ben</h1>
      <div className="pic_box" open={open} onClick={() => setOpen(!open)}>
          <div className="left_banner">
            <ul>
              <li>Name: Ben Wilde</li>
              <li>Age: 25</li>
              <li>Location: Manchester</li>
              <li>Work status: open to requests</li>
              <li>Experiese: Front-End Web Devlopment</li>
            </ul>
          </div>
          <div className="right_banner">
            <ul>
              <li>                      Experience:</li>
              <li>      HTML5, CSS, JavaScript & ES6,</li>
              <li>                   React, Python,</li>
              <li>                      jQuery, C++</li>
              <li>            Others: PHP, SQL, VBA</li>
            </ul>
          </div>
          <div className="Photo_holder"></div>
          <div className="left-border"></div>
          <div className="right-border"></div>
        </div>
        <div className="picture_banner" open={open} onClick={() => setOpen(!open)}><div/>
      </div>
    </CenterPictureStyle>
  );
}

/* 
>> Large Screen Animations <<
*/

const bannerAnimation = keyframes`
    0% {
        width: ${centerPictureSize.standard};
    }
    67% {
        width: ${centerPictureSize.standard};
        animation-timing-function: cubic-bezier(0.5, 1, 0.89, 1);
    }
    100%{
        width: 1400px;
    }

    @media (max-width: 600px) {
      0% {
        width: ${centerPictureSize.standard};
    }
    67% {
        width: ${centerPictureSize.standard};
        animation-timing-function: cubic-bezier(0.5, 1, 0.89, 1);
    }
    100%{
        width: 700px;
    }
    }
`
const bannerCloseAnimation = keyframes`
    0% {
        width: 1400px;
    }
    33% {
        width: ${centerPictureSize.standard};
    }
    100%{
        width: ${centerPictureSize.standard};
    }
`

const leftBorderAnimation = keyframes`
    0% {
        transform: rotate(50deg);
        animation-timing-function: cubic-bezier(0.68, -2.2, 0.32, 1.6);
    }
    67%{
        transform: translateX(0px);
        animation-timing-function: cubic-bezier(0.5, 1, 0.89, 1);
    }
    100% { 
        transform: translateX(-500px);
    }
`
const rightBorderAnimation = keyframes`
    0% {
        transform: rotate(50deg);
        animation-timing-function: cubic-bezier(0.68, -2.2, 0.32, 1.6);
    }
    67%{
        transform: translateX(0px);
        animation-timing-function: cubic-bezier(0.5, 1, 0.89, 1);
    }
    100% { 
        transform: translateX(500px);
    }
`

const leftBorderCloseAnimation = keyframes`
    0% {
        transform: translateX(-500px);
    }
    33%{
        transform: translateX(0px);
    }
    100% { 
      transform: rotate(50deg)
    }
`
const rightBorderCloseAnimation = keyframes`
    0% {
        transform: translateX(500px);
    }
    33%{
        transform: translateX(0px);
    }
    100% { 
        transform: rotate(50deg)
    }
`

/* 
>> Small Screen Animations <<
*/  

const smallBannerAnimation = keyframes`
    0% {
        height: ${centerPictureSize.phoneStandard};
    }
    67% {
        height: ${centerPictureSize.phoneStandard};
        animation-timing-function: cubic-bezier(0.5, 1, 0.89, 1);
    }
    100%{
        height: 700px;
    }

    @media (max-width: 600px) {
      0% {
        height: ${centerPictureSize.phoneStandard};
    }
    67% {
        height: ${centerPictureSize.phoneStandard};
        animation-timing-function: cubic-bezier(0.5, 1, 0.89, 1);
    }
    100%{
        height: 700px;
        margin-top: -50%;
    }
    }
`
const smallBannerCloseAnimation = keyframes`
    0% {
        height: 700px;
    }
    33% {
        height: ${centerPictureSize.phoneStandard};
    }
    100%{
        height: ${centerPictureSize.phoneStandard};
    }
`

const smallLeftBorderAnimation = keyframes`
    0% {
        transform: rotate(50deg);
        animation-timing-function: cubic-bezier(0.68, -2.2, 0.32, 1.6);
    }
    67%{
        transform: rotate(90deg);
        animation-timing-function: cubic-bezier(0.5, 1, 0.89, 1);
    }
    100% { 
        transform: rotate(90deg);
    }
`
const smallRightBorderAnimation = keyframes`
    0% {
        transform: rotate(50deg);
        animation-timing-function: cubic-bezier(0.68, -2.2, 0.32, 1.6);
    }
    67%{
        transform: translateY(0px) rotate(90deg);
        animation-timing-function: cubic-bezier(0.5, 1, 0.89, 1);
         }
    100% { 
        transform: translateY(414px) rotate(90deg);
    }
`

const smallLeftBorderCloseAnimation = keyframes`
    0% {
        transform: rotate(90deg) ;
    }
    33%{
        transform: rotate(90deg) ;
    }
    100% { 
      transform: rotate(50deg)
    }
`
const smallRightBorderCloseAnimation = keyframes`
    0% {
        transform: translateY(414px)  rotate(90deg) ;
    }
    33%{
        transform: translateY(0px)  rotate(90deg) ;
    }
    100% { 
        transform: rotate(50deg)
    }
`



const CenterPictureStyle = Styled.div`
height: 100vh;
width: 100%;
display: grid;
grid-template-rows: 30% 63% 7%;
grid-template-columns: 1fr 1fr 1fr;
// overflow: hidden;
    .h1 {
        grid-column: 2/3;
        grid-row: 1/2;
        font-family: 'Montserrat', sans-serif;
        font-size: 3.3rem;
        color: white;
        justify-self: center;
        align-self: end;
        text-shadow: 0px 5px 5px rgba(13, 13, 11, 0.62);
    }
    .pic_box{
        grid-column: 2/3;
        grid-row: 2/3;
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        justify-self: center;
        align-self: end;
        width: ${()=> pageSize > 600 ? centerPictureSize.standard : centerPictureSize.phoneStandard};
        height: ${()=> pageSize > 600 ? centerPictureSize.standard : centerPictureSize.phoneStandard};
        -webkit-backface-visibility:  hidden;
        -webkit-tap-highlight-color:  transparent;
        cursor: pointer;
        z-index: 10;

                .left_banner{
                    grid-column: 1/2;
                    grid-row: 1/2;
                    z-index: 3;
                    text-align: center;
                    pointer-events: none;
                }

                .right_banner {
                    grid-column: 1/3;
                    grid-row: 1/2;
                    width: 500px;
                    white-space: pre;
                    z-index: 3;
                    text-align: center;
                    pointer-events: none;
                  }

                  .left_banner ul, .right_banner ul {
                    list-style-type: none;
                  }
                  .left_banner ul li{
                    margin-top: 11.5%;
                    margin-left: -207%;
                  }

                  .right_banner ul li{
                    margin-top: 9.5%;
                    margin-left: 85%;
                  }
                  
                  .left_banner ul li, .right_banner ul li {
                    padding: 2px; 
                    font-size: 20px;
                    margin-right: 20%;
                    font-weight: bold;
                    font-family: 'Montserrat', sans-serif;
                    ${() => (isOpen ? 'visibility: visible; color: white; transition: all 0.7s cubic-bezier(0.33, 1, 0.68, 1);' 
                                    : 'visibility: hidden; color: transparent; transition: all 0.1s cubic-bezier(0.33, 1, 0.68, 1);')};
                    // -webkit-transition: all 1s cubic-bezier(0.33, 1, 0.68, 1);
                    // -moz-transition: all 1s cubic-bezier(0.33, 1, 0.68, 1);
                    transition-delay: ${() => (isOpen ? '1s' : '0s')};
                  }
            }
            .Photo_holder {
                width: ${()=> pageSize > 600 ? centerPictureSize.standard : centerPictureSize.phoneStandard};
                height: ${()=> pageSize > 600 ? centerPictureSize.standard : centerPictureSize.phoneStandard};
                grid-column: 1/2;
                grid-row: 1/2;
                justify-self: start;
                align-self: start;
                border-radius: ${centerPictureSize.halfWidth};
                background-image: url(${Headshot});
                background-size: 650px 650px;
                background-position: 69% 28%;
                transform: rotate(-20deg);
                overflow: hidden;
                z-index: 3;
                border: 15px solid rgba(42, 39, 39, 0.71);
              }

              .left-border {
                width: ${()=> pageSize > 600 ? centerPictureSize.halfWidth : centerPictureSize.phoneHalf};
                height: ${()=> pageSize > 600 ? centerPictureSize.standard : centerPictureSize.phoneStandard};
                grid-column: 1/2;
                grid-row: 1/2;
                justify-self: start;
                align-self: start;
                background: none;
                border: 10px solid red;
                border-top-left-radius: ${()=> pageSize > 600 ? centerPictureSize.halfWidth : centerPictureSize.phoneHalf};
                border-bottom-left-radius: ${()=> pageSize > 600 ? centerPictureSize.halfWidth : centerPictureSize.phoneHalf};
                border-right: 0;
                transform: rotate(50deg);
                z-index: 5;
                animation-duration: 1s;
                animation-fill-mode: forwards;
                animation-name: ${() => (isPageLoad ? 'none' 
                                    : isOpen ? pageSize > 600 ? leftBorderAnimation : smallLeftBorderAnimation 
                                    : pageSize > 600 ? leftBorderCloseAnimation : smallLeftBorderCloseAnimation )};
                transform-origin: 100% 50%;
              }
              
              .right-border {
                width: ${()=> pageSize > 600 ? centerPictureSize.halfWidth : centerPictureSize.phoneHalf};
                height: ${()=> pageSize > 600 ? centerPictureSize.standard : centerPictureSize.phoneStandard};
                grid-column: 1/2;
                grid-row: 1/2;
                justify-self: end;
                align-self: start;
                background: none;
                border: 10px solid orange;
                border-top-right-radius: ${()=> pageSize > 600 ? centerPictureSize.halfWidth : centerPictureSize.phoneHalf};
                border-bottom-right-radius: ${()=> pageSize > 600 ? centerPictureSize.halfWidth : centerPictureSize.phoneHalf};
                border-left: 0;
                z-index: 5;
                transform: rotate(50deg);
                animation-duration: 1s;
                animation-fill-mode: forwards;
                animation-name: ${() => (isPageLoad ? 'none' 
                                    : isOpen ? pageSize > 600 ? rightBorderAnimation : smallRightBorderAnimation 
                                    : pageSize > 600 ? rightBorderCloseAnimation : smallRightBorderCloseAnimation)};
                transform-origin: 0% 50%;
              }

              .picture_banner{
                width: ${()=> pageSize > 600 ? centerPictureSize.standard : centerPictureSize.phoneStandard};
                height: ${()=> pageSize > 600 ? centerPictureSize.standard : centerPictureSize.phoneStandard};
                grid-column: 2/3;
                grid-row: 2/3;
                display: grid;
                grid-template-rows: 1fr 1fr 1fr;
                grid-template-columns: 1fr 1fr 1fr;
                justify-self: center;
                align-self: end;
                background: rgba(154, 231, 251, 0.61);
                border-radius: 200px;
                box-shadow: 0px 10px 15px 0px rgba(13, 13, 11, 0.62);
                -webkit-box-shadow: 0px 10px 15px 0px rgba(13, 13, 11, 0.62);
                animation-duration: 1s;
                animation-fill-mode: forwards;
                animation-name: ${() => (isPageLoad ? 'none' 
                                    : isOpen ? pageSize > 600 ? bannerAnimation : smallBannerAnimation 
                                    : pageSize > 600 ? bannerCloseAnimation : smallBannerCloseAnimation)};
                border: 10px solid rgba(42, 39, 39, 0.71);
                transition-delay: 0.6s;
                -webkit-backface-visibility:  hidden;
                -webkit-tap-highlight-color:  transparent;
                cursor: pointer;
                z-index: 1;
               }

               @media (max-width: 600px) {
                 overflow-x: hidden;
                 height: 140vh;
                  .h1{
                    align-self: start;
                    margin-top: 40%;
                    margin-bottom: 5%;
                    font-size: 2.5rem;
                    text-align: center;
                  }
                  .pic_box {
                    align-self: start;
                    margin-top: -30%;
                    .left_banner ul li, .right_banner ul li {
                      font-size: 14px;
                    }
                    .left_banner ul li{
                      margin-top: 4%;
                      margin-left: 2%;
                    }
  
                    .right_banner ul li{
                      margin-top: 3%;
                      margin-left: 80%;
                    }
                  }

                  .Photo_holder {
                    background-size: 450px 450px;
                  }

                  .picture_banner{
                    align-self:  start;
                    margin-top: -30%;
                  }
                  .left_banner{
                    grid-column: 2/3;
                    grid-row: 3/4;
                    margin-top: 98%;
                    z-index: 3;
                    text-align: center;
                    pointer-events: none;
                  }
                  .right_banner {
                    grid-column: 2/3;
                    grid-row: 3/4;
                    margin-top: 165%;
                    margin-left: -136%;
                    width: 250px;
                    white-space: pre;
                    z-index: 3;
                    text-align: center;
                    pointer-events: none;
                    }
                }
    
`;

export default CenterPicture;
