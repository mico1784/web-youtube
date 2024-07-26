import { CiYoutube } from "react-icons/ci";
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { MdOutlineWebAsset } from "react-icons/md";
import { MdOutlinePortrait } from "react-icons/md";
import { ImYoutube2 } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

export const headerMenus = [
    {
       title: "My Youtube",
       icon:<CiYoutube />,
       src:"/"
    },
    {
       title: "추천 영상",
       icon:<FaRegThumbsUp />,
       src:"/today"
    },
    {
       title: "추천 음악",
       icon:<FaLaptop />,
       src:"/music"
    },
    {
       title: "웹디자인",
       icon:<MdOutlineWebAsset />,
       src:"/webd"
    },
    {
       title: "GSAP",
       icon:<MdOutlineSettingsApplications />,
       src:"/gsap"
    },
    {
       title: "포트폴리오 사이트",
       icon:<MdOutlinePortrait />,
       src:"/port"
    },
    {
       title: "유튜브 사이트",
       icon:<ImYoutube2 />,
       src:"/youtube"
    },
];

export const searchKeyword=[
    {
        title:"MyYoutube",
        src:"/search/myyoutube"
    },
    {
        title:"HTML",
        src:"search/HTML"
    },
    {
        title:"CSS",
        src:"search/CSS"
    },
    {
        title:"Javascript",
        src:"search/Javascript"
    },
    {
        title:"React.js",
        src:"search/React.js"
    },
    {
        title:"JAVA",
        src:"search/JAVA"
    },
    {
        title:"ORACLE",
        src:"search/ORACLE"
    },
    {
        title:"SPRING",
        src:"search/SPRING"
    },
    {
        title:"music",
        src:"search/music"
    },
    {
        title:"vue.js",
        src:"search/vue.js"
    },
]

export const snsLink=[
    {
        title:"github",
        url:"https://github.com/mico1784/web-youtube",
        icon:<AiFillGithub />
    },
    {
        title:"youtube",
        url:"https://www.youtube.com/",
        icon: <AiFillYoutube />
    },
    {
        title:"google",
        url:"https://www.google.com/",
        icon:<AiFillGoogleCircle />
    },
    {
        title:"instagram",
        url:"https://instagram.com/",
        icon:<AiFillInstagram />
    },
]