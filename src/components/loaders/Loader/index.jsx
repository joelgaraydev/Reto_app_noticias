import React from 'react'
import styles from './loader.module.css'

export function Loader() {
  const [] = React.useState(null)
  return (
    <div className={styles.lds_ellipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
