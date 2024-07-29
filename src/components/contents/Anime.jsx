import React from 'react'
import { animeText } from '../../data/Anime'
import { Link } from 'react-router-dom'

const Anime = () => {
  return (
    <section id='anime'>
    <h2>🔔추천 애니를 소개합니다.</h2>
    <div className='anime__inner'>
      {animeText.map((anime,key)=> (
        <div className='anime' key={key}>
           <div className='anime__thumb play__icon'>
             <Link to={`/anime/${anime.videoId}`}>
                <img src={anime.img} alt= {anime.title}/>
             </Link>
           </div>
        </div>  
      ))}
    </div>
    </section>
  )
}

export default Anime