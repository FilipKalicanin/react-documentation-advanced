const items = [{ text: 'Buy grocery', done: true },
{ text: 'Play guitar', done: false },
{ text: 'Romantic dinner', done: false }
];

const App = (props) => {
    return (
        <TodoList
            items={items}
            onListClick={() => console.log("List clicked!")}
            onItemClick={(item, event) => { console.log(item, event) }}
        />
    )
}

/*
const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>

class TodoList extends React.Component {
  render() {
    const { items, onListClick } = this.props;
    return (
      <ul onClick={onListClick}>
      {items.map((item, index) => 
                 <TodoItem item={item} key={index} onClick={this.handleItemClick.bind(this, item)}/>)}
      </ul>);
  }
  
  handleItemClick(item, event) {

}

const items = [ { text: 'Buy grocery', done: true },
  { text: 'Play guitar', done: false },
  { text: 'Romantic dinner', done: false }
];

const App = (props) => <TodoList
  items={props.items}
  onListClick={(event) => console.log("List clicked!")}
  onItemClick={(item, event) => { console.log(item, event) }}
/>;*/