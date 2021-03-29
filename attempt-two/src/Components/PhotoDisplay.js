import React from 'react'
import ArrowButton from './ArrowButton'
import GallerySample from './GallerySample'
import { useState } from 'react'


const PhotoDisplay = () => {
     const [currentImage, setCurrentImage] = useState('opensource.jpeg')

     const changeCurrentImage = () => {
        setCurrentImage('opensource2.png')
      }

    return (
      <div className='center-boy'>
        <ArrowButton direction = {'arrow left'} onClick={changeCurrentImage}/>
        <div className='display-outline'>
         <GallerySample imageOut= {currentImage} />
        </div>
        <ArrowButton direction = {'arrow right'} onClick={changeCurrentImage} />
      </div>
    )
}

export default PhotoDisplay
