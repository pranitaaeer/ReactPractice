import React from 'react'

const Profile = ({name,imageUrl}) => {

    const onclikHandeler= (name)=>{
     alert(`Wlcome to ${name}'s profile`)
    }
  return (
    <div className='parent'>
        <div className='card'>
            <img src={imageUrl} className='profileImg' alt='profile' />
            <h1>{name}</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <button className='btn' onClick={()=>onclikHandeler(name)}>View Profile</button>
        </div>
    </div>
  )
}

export default Profile