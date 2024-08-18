import { PencilSimpleLine } from "@phosphor-icons/react";


import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://media.licdn.com/dms/image/v2/C4D16AQEQMFGTUwT-Kg/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1646006420365?e=1729728000&v=beta&t=kleMCdhyo8jlZpX23zokjnR7aix0N3HUa0VJ-NKLOeY" />
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/leonardondev.png" />
        <strong>Leonardo do Nascimento</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20} weight="bold" />
          Editar seu perfil</a>
      </footer>
    </aside>
  )
}
