import React from 'react'
import Profile from './components/Profile'
import Card from './components/Card'
import {cardData} from "./data/data.js"
const App = () => {
  return (
    <div className='parent' >
      {/* <Profile name={"pranita Aeer"} imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy7w-1Op8sU3V0xNbwHsDxzM4diJOyokH8SDrqd2RT&s"}/> */}
      {/* <Profile  name={"doremon"} imageUrl={"https://preview.redd.it/can-doraemon-be-called-anime-v0-pjd2fi82k6xe1.jpeg?width=640&crop=smart&auto=webp&s=cfba787a3ea1e2f28fcab857e18dc1979505ced5"}/> */}

     {
      cardData.map((elm,idx)=>{
        return <div key={idx}> 
        <Card  name={elm.name} role={elm.role} price={elm.price} skills={elm.skills} 
         imageUrl={elm.imageUrl} available={elm.available} description={elm.description}/>
        </div>
      })
     }
    </div>
  )
}

export default App