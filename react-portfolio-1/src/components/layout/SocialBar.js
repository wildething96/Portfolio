import { RiFacebookFill, RiInstagramLine, RiLinkedinFill } from "react-icons/ri";
import Styled from "styled-components";
import { useState } from 'react'
import { Link } from "react-router-dom";

import Background from "./Background.png";

function SocialBar() {
    const [open, setOpen] = useState(false);

  return (
    <SocialBarStyle>
      <RiFacebookFill className="fbButton boxShadow" />
      <RiInstagramLine className="inButton boxShadow" />
      <RiLinkedinFill className="liButton boxShadow" />
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <ListStyle open={open}>
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Home</li>
          </Link>
          <Link to="/about_me" style={{ textDecoration: "none" }}>
            <li>About me</li>
          </Link>
          <Link to="/portfolio" style={{ textDecoration: "none" }}>
            <li>Portfolio</li>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <li>Contact me</li>
          </Link>
        </ul>
      </ListStyle>
    </SocialBarStyle>
  );
}

const SocialBarStyle = Styled.div`
position: fixed;
top: 0;
left: 0;
width: 20%;
z-index: 20;

.fbButton, .liButton, .inButton {
    display: inline-block;
    text-decoration: none;
    color: rgba(42, 39, 39, 0.71);
    width : 16%;
    height: 16%;
    margin: 16% 0% 0% 12%;
    border-radius: 8px;
    -webkit-backface-visibility:  hidden;
    -webkit-tap-highlight-color:  transparent;
    cursor: pointer;
  }

  .fbButton {
    margin-left: 10%;
  }

  .inButton {
    width : 16%;
    height: 16%;
  }
  
.fbButton:hover {
    color: white;
    background: #1778F2; 
  }

.liButton:hover {
    color: white;
    background: #0e76a8;
  }

.inButton:hover {
    text-align: center;
    border-radius: 8px;
    color: #fff;
    font-size: 220px;
    background: #d6249f;
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
  }

  .boxShadow:hover {
    box-shadow: 5px 10px rgba(198, 198, 198, 0.5);
  }

  @media (max-width: 600px) {
    width: 100%;
    background: rgba(154, 231, 251, 0.7);
    .fbButton, .liButton, .inButton {
        width : 10%;
        margin: 3%;
      }
      .boxShadow:hover {
        box-shadow: 5px 10px rgba(150, 150, 150, 0.6);
      }
}
`;

  const StyledBurger = Styled.div`
  display: flex;
  width: 4.6rem;
  height: 4rem;
  position: fixed;
  margin: 4% 8% 0% 0%;
  top: 20px;
  right: 20px;
  z-index: 12;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;
  -webkit-backface-visibility:  hidden;
  -webkit-tap-highlight-color:  transparent;
//   border: 5px solid black;
  }
  div {
    width: 4rem;
    height: 0.4rem;
    background-color: ${({ open }) =>
      open ? "rgba(42, 39, 39, 1)" : "rgba(225, 218, 218, 1)"};
    border-radius: 10px;
    ${({ open }) => (open ? 'none' : 'box-shadow: 5px 5px 2px 1px rgba(13, 13, 11, 0.62)')};
    transform-origin: 0.125rem;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  &:hover div:nth-child(1){
      transform: ${({ open }) =>
        open ? "rotate(45deg)" : "translateY(48px) "};
  }
  &:hover div:nth-child(3){
    transform: ${({ open }) =>
      open ? "rotate(-45deg)" : "translateY(-48px) "};
}
@media (max-width: 600px) {
  margin: -1.3rem 3rem 0% 0%;
  height: 3.2rem;
  top: 3.5%;
  right: -15%;
  div{
    width: 3rem;
    height: 0.3rem;
    transform-origin: 0.005rem;
  }
  &:hover div:nth-child(1){
    transform: ${({ open }) =>
      open ? "rotate(45deg)" : "none"};
}
&:hover div:nth-child(3){
  transform: ${({ open }) =>
    open ? "rotate(-45deg)" : "none"};
}
`;

const ListStyle = Styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  width: 100%;
  height: 200vh;
  top: -40%;
  background: url(${Background}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  clip-path: ${({ open }) =>
    open ? "circle(1800px at 101% -1%);" : "circle(0px at 101% -1%);"};
  -webkit-clip-path: ${({ open }) =>
    open ? "circle(1800px at 101% -1%)" : "circle(0px at 101% -1%);"};
  transition: all 0.6s ease-out;
  -webkit-backface-visibility:  hidden;
  -webkit-tap-highlight-color:  transparent;
  z-index: 11;
  ul {
    display: flex;
    height: 70vh;
    width: 80%;
    flex-wrap: wrap;
    list-style: none;
    justify-content: space-around;
    align-self: center;
    li {
      display: flex;
      height: 12rem;
      width: 30rem;
      font-size: 2.5rem;
      border: 5px solid white;
      border-radius: 60px;
      align-items: center;
      justify-content: center;
      background: rgba(154, 231, 251, 0.61);
      cursor: pointer;
    }

    li:hover {
        background: lightblue;
        color: yellow;
      }
  }
  @media (max-width: 600px) {
      position: absolute;
      margin-top: -80%;
    ul {
        height: 85vh;
      li {
        height: 8rem;
        max-width: 100%;
        border-radius: 0px;
        font-size: 2.5rem;
        margin-left: -4%;
      }
  }
`;

export default SocialBar;
