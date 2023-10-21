import "./project.css";
import { useState } from "react";
import olaf_pic from "./images/frozen-olaf.png";
export default function Project_View() {
  const [tabtoggle, settabtoggle] = useState(1);

  const togglingtab = (index) => {
    settabtoggle(index);
  };

  return (
    <div className="w-full h-auto bg-[#64CCC5]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#053B50"
          fill-opacity="1"
          d="M0,160L10.4,154.7C20.9,149,42,139,63,149.3C83.5,160,104,192,125,202.7C146.1,213,167,203,188,218.7C208.7,235,230,277,250,256C271.3,235,292,149,313,122.7C333.9,96,355,128,376,128C396.5,128,417,96,438,117.3C459.1,139,480,213,501,202.7C521.7,192,543,96,563,74.7C584.3,53,605,107,626,122.7C647,139,668,117,689,122.7C709.6,128,730,160,751,192C772.2,224,793,256,814,261.3C834.8,267,856,245,877,224C897.4,203,918,181,939,149.3C960,117,981,75,1002,64C1022.6,53,1043,75,1064,112C1085.2,149,1106,203,1127,218.7C1147.8,235,1169,213,1190,176C1210.4,139,1231,85,1252,64C1273,43,1294,53,1315,101.3C1335.7,149,1357,235,1377,272C1398.3,309,1419,299,1430,293.3L1440,288L1440,0L1429.6,0C1419.1,0,1398,0,1377,0C1356.5,0,1336,0,1315,0C1293.9,0,1273,0,1252,0C1231.3,0,1210,0,1190,0C1168.7,0,1148,0,1127,0C1106.1,0,1085,0,1064,0C1043.5,0,1023,0,1002,0C980.9,0,960,0,939,0C918.3,0,897,0,877,0C855.7,0,835,0,814,0C793,0,772,0,751,0C730.4,0,710,0,689,0C667.8,0,647,0,626,0C605.2,0,584,0,563,0C542.6,0,522,0,501,0C480,0,459,0,438,0C417.4,0,397,0,376,0C354.8,0,334,0,313,0C292.2,0,271,0,250,0C229.6,0,209,0,188,0C167,0,146,0,125,0C104.3,0,83,0,63,0C41.7,0,21,0,10,0L0,0Z"
        ></path>
      </svg>
      <h1 id="Project" className="abouttext lg:text-8xl md:text-6xl text-5xl text-center font-kanit z-30 pt-16 tracking-wider">
        MY PROJECT
      </h1>
      <div className="flex flex-col items-center pt-8 pb-32">
        <div className="flex justify-start w-auto h-auto bg-[#053B50]">
          <div className={tabtoggle === 1 ? "tab_content_active items-center" : "tab_content"} onClick={() => togglingtab(1)}>
            All
          </div>
          <div className={tabtoggle === 2 ? "tab_content_active items-center" : "tab_content"} onClick={() => togglingtab(2)}>
            Programming
          </div>
        </div>
        <div className="content_container w-4/5 h-96 justify-self-center bg-[#ffffff] ">
          <div className={tabtoggle === 1 ? "content_active_1 flex flex-col justify-center" : "content_hidden"} onClick={() => togglingtab(1)}>
            <p className="inprogress md:text-4xl text-3xl font-pacifico text-[#64CCC5]">Project in Progress</p>
            <img src={olaf_pic} className="place-self-center" />
          </div>
          <div className={tabtoggle === 2 ? "content_active_2 flex flex-col justify-center" : "content_hidden"} onClick={() => togglingtab(2)}>
            <p className="inprogress md:text-4xl text-3xl font-pacifico text-[#64CCC5]">Project in Progress</p>
            <img src={olaf_pic} className="place-self-center" />
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#053B50"
          fill-opacity="1"
          d="M0,32L11.4,48C22.9,64,46,96,69,106.7C91.4,117,114,107,137,101.3C160,96,183,96,206,128C228.6,160,251,224,274,234.7C297.1,245,320,203,343,170.7C365.7,139,389,117,411,96C434.3,75,457,53,480,53.3C502.9,53,526,75,549,122.7C571.4,171,594,245,617,261.3C640,277,663,235,686,213.3C708.6,192,731,192,754,186.7C777.1,181,800,171,823,154.7C845.7,139,869,117,891,133.3C914.3,149,937,203,960,224C982.9,245,1006,235,1029,202.7C1051.4,171,1074,117,1097,101.3C1120,85,1143,107,1166,96C1188.6,85,1211,43,1234,53.3C1257.1,64,1280,128,1303,154.7C1325.7,181,1349,171,1371,154.7C1394.3,139,1417,117,1429,106.7L1440,96L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
