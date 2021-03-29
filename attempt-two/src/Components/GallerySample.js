import React from 'react'
import { Image } from 'semantic-ui-react'
import './myStyles.css'

const GallerySample = ({imageOut}) => (
  <div>
    <Image src={imageOut} size='medium' />
  </div>
)

GallerySample.defaultProps = {
  imageOut: './Parliamentarian_TylerVazquez.jpg'
}

export default GallerySample
