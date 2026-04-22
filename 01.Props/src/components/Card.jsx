import React from 'react'
import '../style/card.css'
import {cardData}  from '../data/data.js'
console.log("data",cardData);
const Card = ({available,price,imageUrl,name,role,skills,description}) => {
     const onclikHandeler= (name)=>{
     alert(`Wlcome to ${name}'s profile`)
    }
  return (
    <div className='parent'>
            <div className='card1' >
            <div className='top'>
                {
                    available&& (
                        <div  className='left'>Available</div>
                    )
                }
                <div className='right'>{price}</div>
            </div>
            <img src={imageUrl} className='profileImg' alt='profile' />
            <h1>{name}</h1>
            <p>{role}</p>
            <div className='badge'>
                {skills.map((skill,idx)=>{
                    return <p key={idx}>{skill}</p>
                })}
            </div>
            <p>{description}</p>
             <hr />
            <button className='btn' onClick={()=>onclikHandeler(name)}>View Profile</button>
        </div>
    </div>
  )
}

export default Card