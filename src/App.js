import './App.css';
import { Component } from 'react';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFiled: '',
      title: 'Monster Rolodex'
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }


  handleChange = (e) => {
    if (e.target.value == '')
      this.setState({
        title: 'Monster Rolodex',
        searchFiled: ''
      })
    else {
      this.setState({
        searchFiled: e.target.value,
        title: e.target.value
      })
    }
  }

  render() {
    const { monsters, searchFiled, title } = this.state;
    const filteredMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFiled.toLocaleLowerCase())
    )
    return (
      <div className="App">
        <h1>{title}</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonster}></CardList>
      </div>
    );
  }
}

//function App() {
//  
//}

export default App;
