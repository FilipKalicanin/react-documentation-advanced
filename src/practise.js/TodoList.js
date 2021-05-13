import React from 'react';

class TodoList extends React.Component {

    handleItemClick(event) {
        event.preventDefault();
        if (this.props.item.done === false) {
            this.props.onItemClick;
        }
    }

    render() {
        return (
            <ul onClick={this.props.onListClick}>
                {this.props.items.map((item, index) =>
                    <TodoItem item={item} key={index} onClick={this.handleItemClick.bind(this, item)} />)}
            </ul>
        );
    }
}

export default TodoList;