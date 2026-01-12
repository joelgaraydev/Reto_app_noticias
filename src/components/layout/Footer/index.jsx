import React from 'react'
import { Link } from 'react-router-dom'
import { newsCategories } from '../../../services/newsApi/getNewsCategories'
import styles from './footer.module.css'

export default function Footer() {
  const [] = React.useState(false)
  const categories = Object.values(newsCategories)

  return (
    <footer className={`wrapper ${styles.footer}`}>
      <p className={styles.footer__title}>_ La Portada _</p>
      <ul className={`${styles.footer__list}`}>
        <li>Categorías de Noticias</li>
        {categories.map((item) => (
          <li key={item.categoria}>
            <Link
              to={`/noticias/reload/${item.category}`}
              className={`wrapper ${styles.footer__link}`}
            >
              {item.categoria}
            </Link>
          </li>
        ))}
      </ul>
      <ul className={`${styles.footer__list}`}>
        <li>Redes sociales</li>
        <li>Twitter</li>
        <li>Facebook</li>
        <li>YouTuber</li>
      </ul>
    </footer>
  )
}
