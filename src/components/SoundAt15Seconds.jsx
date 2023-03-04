import React from 'react'
import sound from '../sound/16.mp3'

const SoundAt15Seconds = () => {
  return (
    <div>
        <audio src={sound} autoPlay></audio>
    </div>
  )
}

export default SoundAt15Seconds