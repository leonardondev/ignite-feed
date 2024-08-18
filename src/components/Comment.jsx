import { ThumbsUp, Trash } from '@phosphor-icons/react'

import { Avatar } from './Avatar'

import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/leonardondev.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Devon Lane (você)</strong>
              <time
                dateTime="2024-08-18T18:02:35.195Z"
                title="18 de outubro às 18:02h"
              >Cerca de 2h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />Aplaudir<span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
