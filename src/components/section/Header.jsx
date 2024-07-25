import React from 'react'
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



const Header = () => {
  return (
    <header id='header' role='banner'>
      <h1 className='header__logo'>
        <a href='/'>
            <em aria-hidden='true'></em>
            <span>my<br/>youtube</span>
        </a>
      </h1>
      <nav className='header__menu'>
        <ul className='menu'>
          <li className='active'>
            <a href='/'><CiYoutube />My Youtube</a>
          </li>
          <li>
            <a href='/today'><FaRegThumbsUp />추천 영상</a>
          </li>
          <li>
            <a href='/developer'><FaLaptop />추천 개발자</a>
          </li>
          <li>
            <a href='/webd'><MdOutlineWebAsset />웹디자인</a>
          </li>
          <li>
            <a href='/gsap'><MdOutlineSettingsApplications />
            GSAP</a>
          </li>
          <li>
            <a href='/port'><MdOutlinePortrait />포트폴리오 사이트</a>
          </li>
          <li>
            <a href='/youtube'><ImYoutube2 />유튜브 사이트</a>
          </li>
        </ul>
        <ul className='keyword'>
          <li>
            <a href='/search/myyoutube'>MyYoutube</a>
          </li>
          <li>
            <a href='search/HTML'>HTML</a>
          </li>
          <li>
            <a href='search/CSS'>CSS</a>
          </li>
          <li>
            <a href='search/Javascript'>Javascript</a>
          </li>
          <li>
            <a href='search/React.js'>React.js</a>
          </li>
          <li>
            <a href='search/JAVA'>JAVA</a>
          </li>
          <li>
            <a href='search/ORACLE'>ORACLE</a>
          </li>
          <li>
            <a href='search/SPRING'>SPRING</a>
          </li>
          <li>
            <a href='search/music'>music</a>
          </li>
          <li>
            <a href='search/vue.js'>vue.js</a>
          </li>
        </ul>
      </nav>
      <div className='header__sns'>
        <ul>
          <li>
            <a hrer='https://github.com/mico1784/web-youtube' rel='noopenr noreferrer'>
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a hrer='https://www.youtube.com/' rel='noopenr noreferrer'>
              <AiFillYoutube />
            </a>
          </li>
          <li>
            <a hrer='https://www.google.com/' rel='noopenr noreferrer'>
              <AiFillGoogleCircle />
            </a>
          </li>
          <li>
            <a hrer='https://instagram.com/' rel='noopenr noreferrer'>
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header