import "./global.css";

import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Leonardo"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero dicta nemo sapiente obcaecati sit consequuntur, debitis voluptates hic, ut laborum fugiat neque facere eos? Fugit illum soluta commodi quam earum."
          />

          <Post
            author="Diego"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur hic corrupti amet in atque nisi molestiae, iusto recusandae sint, modi nobis, voluptas suscipit repellat? Cum eius quam error optio maiores."
          />
        </main>
      </div>

    </div>
  )
}



