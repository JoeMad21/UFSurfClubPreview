import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import './myStyles.css'

const ArrowButton = ({direction, toggleFunction}) => (
<div>
  <Button>
    <Button.Content onClick={toggleFunction}>
      <Icon name={direction} />
    </Button.Content>
  </Button>
</div> )

ArrowButton.defaultProps = {
  direction: 'arrow right'
}

export default ArrowButton
