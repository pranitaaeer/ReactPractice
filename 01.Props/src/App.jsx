import React from 'react'
import Profile from './components/Profile'

const App = () => {
  return (
    <div className='parent'>
      <Profile name={"pranita Aeer"} imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy7w-1Op8sU3V0xNbwHsDxzM4diJOyokH8SDrqd2RT&s"}/>
      <Profile  name={"doremon"} imageUrl={"https://preview.redd.it/can-doraemon-be-called-anime-v0-pjd2fi82k6xe1.jpeg?width=640&crop=smart&auto=webp&s=cfba787a3ea1e2f28fcab857e18dc1979505ced5"}/>
    </div>
  )
}

export default App