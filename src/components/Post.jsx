import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/leonardondev.png" />
          <div className={styles.authorInfo}>
            <strong>Leonardo do Nascimento</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time 
          dateTime={'2024-08-18T13:44:32.394Z'}
          title="18 de outubro às 10:44h" 
        >Publicado há 1h</time>
      </header>


      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉{' '}<a href="#">jane.design/doctorcare</a></p>
        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>{' '}
        </p>
      </div>
    </article>
  )
}
