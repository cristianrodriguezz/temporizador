import React from 'react'
import sound from '../sound/15.mp3'

const SoundsRandmon = () => {

  return (
    <div>
        <audio src={sound} autoPlay></audio>
    </div>
  )
}

export default SoundsRandmon