import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Maincrul from './Maincrul'
import Shopping from './shopping'
import Subscribe from './Subscribe'

const Home = () => {
  const dispatch = useDispatch()


  return (
    <div className=''>
      <Maincrul/>
      <Shopping/>
      <Subscribe/>
    </div>
  )
}

export default Home