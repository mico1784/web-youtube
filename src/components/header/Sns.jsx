import React from 'react'
import {snsLink} from '../../data/header'

const Sns = () => {
  return (
    <div className='header__sns'>
    <ul>        
    {snsLink.map((sns,ins)=>(
      <li key={ins}>
        <a href={sns.url} target='_blank' 
        rel='noopenr noreferrer' 
        aria-label={sns.title}>
        <span>{sns.icon}</span>
        </a>
      </li>
    ))}
    </ul>
  </div>
  )
}

export default Sns