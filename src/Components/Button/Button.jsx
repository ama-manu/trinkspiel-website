import React from 'react'

import styles from './Button.module.scss'

function Button({setTaskIndex}) {
  return (
    <button onClick={setTaskIndex}></button>
  )
}

export default Button