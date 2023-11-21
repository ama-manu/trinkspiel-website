import React from 'react'
import styles from './Base.module.scss'

function Base({children}) {
  return (
    <div className={styles.base}>Base</div>
  )
}

export default Base