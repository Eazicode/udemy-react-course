const ListItem = ({monsters}) => {
  return ( 
  <>
    {monsters.map(monster => {
      return (
        <div className='card-container' key={monster.id}>
          <img src={`https://robohash.org/${monster.id}?set=set2`} alt={monster.name} />

          <h1 className='text-black font-bold'>{monster.name}</h1>
          <p>{monster.email}</p>
        </div>
      )
      
    })}
  </> );
}
 
export default ListItem;