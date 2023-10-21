import "./home.css";
import { useState, useEffect } from "react";
import my_pic from "./images/My_Profile_Pic1.png";
import discord_icon from "./images/bxl-discord-alt.svg";
import insta_icon from "./images/bxl-instagram-alt.svg";
import gmail_icon from "./images/bxl-gmail.svg";
import linked_icon from "./images/bxl-linkedin-square.svg";
import github_icon from "./images/bxl-github.svg";
import AnimatedLetter from "./animate/animateletter";

function Home_Banner() {
  const [letterclass, setletterclass] = useState("text-animate");
  const firstname = ["J", "a", "s", "o", "n"];
  const middlename = ["A", "d", "i", "k", "a"];
  const lastname = ["T", "a", "n", "u", "w", "i", "j", "a", "y", "a"];

  useEffect(() => {
    // Initialize a variable to store the timeout ID
    let timeoutId;
    // Set the timeout and store the ID
    timeoutId = setTimeout(() => {
      setletterclass("text-animate-hover");
    }, 6000);
    // Clear the timeout when the component unmounts
  }, []);

  return (
    <div>
      <div id="Home" className="bg-[#053b50] w-full h-auto p-4">
        <div className="snowflake z-1">❅</div>
        <div className="snowflake z-1">❅</div>
        <div className="snowflake z-1">❅</div>
        <div className="snowflake z-1">❅</div>
        <div className="snowflake z-1">❅</div>
        <div className="snowflake z-1">❅</div>
        <div className="snowflake z-1">❅</div>
        <div className="snowflake z-1">❅</div>
        <div className="snowflake z-1">❅</div>
        <div className="snowflake z-1">❅</div>
        <div className="flex md:flex-row flex-col-reverse justify-center md:items-start items-center ">
          <div className="md:text-left sm:text-center md:w-7/12 xl:pl-40 xl:pt-32 xl:pr-12 lg:pl-32 lg:pt-24 lg:pr-8 md:pr-2 md:pl-12 md:pt-16 ">
            <h4 className="Helloclass xl:text-4xl text-3xl mb-2 font-pacifico text-[#EEEEEE]">Hello! I'm</h4>
            <div className="text-5xl 2xl:text-8xl xl:text-7xl  md:text-6xl  font-kanit z-5 flex flex-col lg:block">
              <AnimatedLetter className="first_name" letterclass={letterclass} strArray={firstname} idx={10} />
              <AnimatedLetter className="middle_name" letterclass={letterclass} strArray={middlename} idx={15} />
              <AnimatedLetter className="last_name" letterclass={letterclass} strArray={lastname} idx={20} />
            </div>
            <p className="MyBio xl:text-xl md:text-lg lg:text-md md:text-sm pt-8 font-kanit text-[#EEEEEE]  ">
              A <span className="data-science xl:text-2xl md:text-lg text-md">Data Science Student</span> who's currently studying at the SP Jain School of Global Management Sydney Campus
            </p>
            <div className="icon-contact flex flex-row justify-center md:justify-start">
              <a href="https://www.linkedin.com/in/jason-adika-tanuwijaya-a44782273?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BeGndeY2ISuSNffRA8yYnWA%3D%3D">
                <img src={linked_icon} className="md:w-8 md:h-8 w-6 h-6 mr-2" />
              </a>
              <a href="https://github.com/SusuLegend">
                <img src={github_icon} className="md:w-8 md:h-8 w-6 h-6  mr-2" />
              </a>
              <a href="mailto:jasonadikatan@gmail.com">
                <img src={gmail_icon} className="md:w-8 md:h-8 w-6 h-6  mr-2" />
              </a>
              <a href="https://www.instagram.com/jasonadika/">
                <img src={insta_icon} className="md:w-8 md:h-8 w-6 h-6  mr-2" />
              </a>
              <a href="https://discordapp.com/users/577438643493535745">
                <img src={discord_icon} className="md:w-8 md:h-8 w-6 h-6  mr-2" />
              </a>
            </div>
          </div>
          <div className="display_pic pt-4 md:w-5/12 xl:p-20 lg:p-16 md:p-6 md:mt-4 sm:p-2 relative z-0">
            <img src={my_pic} alt="mypic" className="animate-pic w-80 h-90 md:w-auto md:h-auto " />
          </div>
        </div>
      </div>
      <div className="bg-[#64CCC5] p-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill=" #053B50"
            fill-opacity="1"
            d="M0,256L10.9,245.3C21.8,235,44,213,65,218.7C87.3,224,109,256,131,277.3C152.7,299,175,309,196,277.3C218.2,245,240,171,262,138.7C283.6,107,305,117,327,112C349.1,107,371,85,393,96C414.5,107,436,149,458,186.7C480,224,502,256,524,256C545.5,256,567,224,589,218.7C610.9,213,633,235,655,224C676.4,213,698,171,720,160C741.8,149,764,171,785,192C807.3,213,829,235,851,213.3C872.7,192,895,128,916,90.7C938.2,53,960,43,982,80C1003.6,117,1025,203,1047,240C1069.1,277,1091,267,1113,245.3C1134.5,224,1156,192,1178,197.3C1200,203,1222,245,1244,245.3C1265.5,245,1287,203,1309,160C1330.9,117,1353,75,1375,96C1396.4,117,1418,203,1429,245.3L1440,288L1440,0L1429.1,0C1418.2,0,1396,0,1375,0C1352.7,0,1331,0,1309,0C1287.3,0,1265,0,1244,0C1221.8,0,1200,0,1178,0C1156.4,0,1135,0,1113,0C1090.9,0,1069,0,1047,0C1025.5,0,1004,0,982,0C960,0,938,0,916,0C894.5,0,873,0,851,0C829.1,0,807,0,785,0C763.6,0,742,0,720,0C698.2,0,676,0,655,0C632.7,0,611,0,589,0C567.3,0,545,0,524,0C501.8,0,480,0,458,0C436.4,0,415,0,393,0C370.9,0,349,0,327,0C305.5,0,284,0,262,0C240,0,218,0,196,0C174.5,0,153,0,131,0C109.1,0,87,0,65,0C43.6,0,22,0,11,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Home_Banner;
