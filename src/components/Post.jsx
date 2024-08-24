import { useState } from 'react'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    'post muito bacana, hein!',
  ])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = dayjs(publishedAt).format('DD[ de ]MMMM[ às ]HH:mm[h]')
  const publishedDateRelativeToNow = dayjs(publishedAt).fromNow()

  function handleCreateNewComment(event) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity('Este campo é obrigatório')
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter(comment => comment !== commentToDelete)

    setComments(commentsWithoutDeleteOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          dateTime={publishedAt.toISOString()}
          title={publishedDateFormatted}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(item => {
          switch (item.type) {
            case 'link':
              return <p key={item.content}>👉{' '}<a href="#">{item.content}</a></p>
            case 'hashtag':
              return <a key={item.content} href="#">{item.content}{' '}</a>
            case 'paragraph':
              return <p key={item.content}>{item.content}</p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          required
          onInvalid={handleNewCommentInvalid}
          name="comment"
          value={newCommentText}
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
        />

        <footer>
          <button
            disabled={isNewCommentEmpty}
            type="submit"
          >Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}
