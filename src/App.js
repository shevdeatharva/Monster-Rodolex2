import { useState, useEffect } from 'react';
import Cardlist from './components/card/card-list';
import './App.css';
import SearchBox from './components/searchbar/searchbox';

const App = () => {
 
  const [searchField, setsearchField] = useState('')
  const [monsters, setMonsters] = useState([]);
  const [filteredOut, setfilteredOut] = useState(monsters);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((Response) =>
  
      Response.json()
  ).then((user) => setMonsters(user)) 
},[])
// re-render happen- the moment 
  
  useEffect(() => {
    const newFilteredMonster=monsters.filter((monster)=>{

      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    setfilteredOut(newFilteredMonster);
  },[monsters, searchField])


    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setsearchField(searchFieldString)
    }

    return ( < div >
      <h1 className='app-title' >
        < i > MonTterS LIsT </i></h1>
        <SearchBox onChangeHandler = { onSearchChange }
        placeholder = 'search-monsters'
        search_box='monster-search-box' />
      <Cardlist monsters={filteredOut}/>
      </div >
    )
}

export default App;