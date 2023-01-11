// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoList, deleteTodo} = props

  const {id, title} = todoList

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item-container">
      <p className="paragraph">{title}</p>
      <button className="btn" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
