import './card.style.css'

const Card = ({monster}) => {
  const {id, name, email}= monster
    return(
      <div key={id} className='card-container'>
      <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`}/>
    <h1 >{name}</h1> 
    <div>
      {email}
    </div>
    </div>
    )
  }

export default Card