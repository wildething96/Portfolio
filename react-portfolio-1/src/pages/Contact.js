import { useState } from "react";
import Styled from "styled-components";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { ImEarth } from "react-icons/im";

import SocialBar from "../components/layout/SocialBar";
import Card from "../components/ui/Card";
import Email from "../components/forms/Email";
import Phone from "../components/forms/Phone";
import Web from "../components/forms/Web";

let globalCardPage;
function ContactPage() {
  const [cardPage, setCardPage] = useState("Get In touch");
  
  globalCardPage = cardPage;
  const Forms = {
    'Email' : <Email />,
    'Phone' : <Phone />,
    'Web' : <Web />
  };

  return (
    <div>
      <SocialBar />
      <div className={containerStyle}>
        <Card className="card">
          <H2Styled>{cardPage}</H2Styled>
            { cardPage === 'Get In touch - By Email' && Forms.Email }
            { cardPage === 'Get In touch - By Phone' && Forms.Phone }
            { cardPage === 'Get In touch - Through another site' && Forms.Web }
          <UlStyled>
            <button onClick={() => setCardPage("Get In touch - By Email")}>
              <HiOutlineMail className="logo1" />
            </button>
            <button onClick={() => setCardPage("Get In touch - By Phone") }>
              <BiPhoneCall className="logo1" />
            </button>
            <button onClick={() => setCardPage("Get In touch - Through another site")}>
              <ImEarth className="logo2" />
            </button>
          </UlStyled>
        </Card>
      </div>
    </div>
  );
}

const containerStyle = Styled.div`
  width: 100%;
  height: 80vh;
  card h2 {
    font-size: 30px;
  }
`;

const H2Styled = Styled.h2`
  margin-bottom: 40%;
  color: white;
  text-align:center;
  font-size: 2rem;
`;

const UlStyled = Styled.div`
    display: flex;
    position: absolute;
    width: min(100%);
    bottom: 0;
    button {
      cursor: pointer;
      border: 3px solid white;
      -webkit-backface-visibility:  hidden;
      -webkit-tap-highlight-color:  transparent;
      &:nth-child(1){
        background-color: ${ () => globalCardPage === 'Get In touch - By Email' ? 'lightgrey' : 'transparent'};
        border-radius: 30px;
        border-bottom-right-radius: 1px;
        width: min(33.33%);
      }
      &:nth-child(2){
        background-color: ${ () => globalCardPage === 'Get In touch - By Phone' ? 'lightgrey' : 'transparent'};
        border-radius: 30px;
        border-bottom-left-radius: 1px;
        border-bottom-right-radius: 1px;
        width: min(33.33%);
      }
      &:nth-child(3){
        background-color: ${ () => globalCardPage === 'Get In touch - Through another site' ? 'lightgrey' : 'transparent'};
        border-radius: 30px;
        border-bottom-left-radius: 1px;
        width: min(33.33%);
      }
      .logo1{
        width: 28%;
        height: 10vh;
        color: white;
      }
      .logo2{
        width: 25%;
        height: 9vh;
        color: white;
      }
    }

    button:hover {
      background: lightblue;
      border: 5px solid white;
    }

    button:hover .logo1{
        width: 35%;
        height: 10.8vh;
    }

    button:hover .logo2{
      box-sizing: border-box;
      margin-top 1.3%;
      width: 35%;
      height: 10.1vh;
  }
}
`;

export default ContactPage;
