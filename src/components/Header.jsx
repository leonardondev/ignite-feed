import styles from './Header.module.css'

import igniteImg from '../assets/ignite-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteImg} alt="Logotipo do Ignite" />
      <strong>Ignite Feed</strong>
    </header>
  )
}
