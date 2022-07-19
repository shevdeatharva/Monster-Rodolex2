import './searchbox.css'
const SearchBox=({search_box, placeholder, onChangeHandler})=>{
    return(
      <div>
        <input
           className={`search-box ${search_box}`}
           type='search'
            placeholder={placeholder}
            onChange={onChangeHandler}/>
        </div>
    )
  }
export default SearchBox;