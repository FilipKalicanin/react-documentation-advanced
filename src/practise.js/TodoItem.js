const TodoItem = (props) => {
    return (
        <li onClick={props.onClick}>{props.item.text}</li>
    )
}

export default TodoItem;