import "./global.css";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";
// Para traduzir os nomes de dias e mês para pt-br.
dayjs.locale("pt-br");

import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Content, Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator",
    },
    publishedAt: new Date("2024-08-15T13:44:32.394Z"),
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
      { type: "hashtag", content: "#novoprojeto" },
      { type: "hashtag", content: "#nlw" },
      { type: "hashtag", content: "#rocketseat" },
    ] satisfies Content[],
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat",
    },
    publishedAt: new Date("2024-08-18T15:08:16.192Z"),
    content: [
      { type: "paragraph", content: "Fala pessoal 👋" },
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 ",
      },
      { type: "link", content: "devonlane.design" },
      { type: "hashtag", content: "#uiux" },
      { type: "hashtag", content: "#userexperience" },
    ] satisfies Content[],
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
