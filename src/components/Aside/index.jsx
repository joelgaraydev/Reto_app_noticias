import React from 'react'
import LastSearch from '../LastSearch'
import styles from './aside.module.css'

const Aside = () => {
  const [] = React.useState(false)

  return (
    <aside className={styles.aside}>
      <LastSearch />
    </aside>
  )
}

export default Aside
