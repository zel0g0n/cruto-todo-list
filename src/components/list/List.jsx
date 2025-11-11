import React, { useEffect, useRef } from 'react'
import ListItem from '../list-item/List-Item'

const List = ({data, setData, onDelete, onToggleActive}) => {
  const audioRef =  useRef(null)
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
      {data.map((item) => (<ListItem activeToggle={() => onToggleActive(item.id)} deleteHandler={() => onDelete(item.id)} key={item.id} product={item}/>))}
    </div>
  )
}

export default List