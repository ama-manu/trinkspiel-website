import React, { useEffect, useState } from 'react'
import styles from './Base.module.scss'

import Button from '../Button/Button.jsx'
import Text from '../Text/Text.jsx'



function Base() {
  // const [btnLeft, setbtnLeft] = useState(null)
  // const [btnRight, setbtnRight] = useState(null)

  // useEffect(() => {
  //   // first

  //   return () => {
  //     // second
  //   }
  // }, [btnLeft, btnRight])

  const [taskIndex, setTaskIndex] = useState(0)

  function increment() {
    if (taskIndex < 1) setTaskIndex(taskIndex + 1)
  }

  function decrement() {
    if (taskIndex > 0) setTaskIndex(taskIndex - 1)
  }

return (
  <div className={styles.base}>
    <Text taskIndex={taskIndex}></Text>
    {/* <Button btnLeft={btnLeft}></Button>
      <Button btnRight={btnRight}></Button> */}
    <Button setTaskIndex={decrement}></Button>
    <Button setTaskIndex={increment}></Button>
  </div>
)
}

export default Base