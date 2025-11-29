import React, { useContext, useEffect, useRef } from 'react'
import ListItem from '../list-item/List-Item'
import { dataContext } from '../../context/Context'

const List = () => {
  const {state} = useContext(dataContext)
  const {data} = state
  const audioRef =  useRef(null)
  console.log('list')

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const currentTime = now.toTimeString().slice(0,5)
      setData(prev => prev.map(item => {
        if(item.size == currentTime && item.notified==false) {
          audioRef.current.play()
          return {...item,notified: true}
        }else {
          return item
        }
      }))


    },1000)
    return () => clearInterval(timer)

  },[data])
  return (
    <div className='list'>
      <audio ref={audioRef} src="/alarm-audio.wav" />
      {data.map((item) => (<ListItem  key={item.id} product={item}/>))}
    </div>
  )
}

export default List