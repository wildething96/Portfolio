import { useEffect } from "react";
import SocialBar from "../components/layout/SocialBar";
import CenterPicture from "../components/layout/CenterPicture";

let onLoad = true;
function LandingPage() {
  
  useEffect (() => {
    onLoad = false;
  }, [])

  return (
    <div>
      { onLoad && alert("Hi and welcome to my page. My website is still under constuction after moving to a react powered website. This means there is no content on a couple of the pages and the website is only optimised for Phone and PC")}
      <SocialBar />
      <CenterPicture />
    </div>
  );
}

export default LandingPage;
