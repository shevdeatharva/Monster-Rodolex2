import './card-list-style.css'
import Card from '../card.jsx/card'
const Cardlist = ({ monsters }) => {
  return (
      <div className='card-list'>
       {monsters.map((monster)=>{
       return(
   <Card monster={monster}/>
       )
       })}
      </div>
    )
  }


export default Cardlist
