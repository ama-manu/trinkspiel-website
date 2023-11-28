import React, { useState } from 'react'

import styles from './Text.module.scss'


import data from '../../tasks.json'

function Text({taskIndex}) {
  return (
    <div className={styles.textCard}>
      <h1 className={styles.title}>{JSON.stringify(data[taskIndex].title)}</h1>
      <p className={styles.text}>{JSON.stringify(data[taskIndex].task)}</p>
    </div>
  )
}

export default Text