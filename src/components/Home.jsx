import React from 'react'
import Homeheader from './homeheader/Homeheader'
import Homesection1 from './homesection1/Homesection1'
import Homesection3 from './homesection3/Homesection3'
import Homesection4 from './homesection4/Homesection4'
import Homefooter from './homefooter/Homefooter'
import Homesection2 from './homesection2/Homesection2'

const Home = () => {
  return (
    <div>
      <Homeheader/>
      <Homesection1/>
      <Homesection2/>
      <Homesection3/>
      <Homesection4/>
      <Homefooter/>

    </div>
  )
}

export default Home
