const MonsterList = ({monsters}) => {
  return ( 
    <div className="card-list">
      {monsters.map(monster => {
        return (
          <div className='card-container' key={monster.id}>
            <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt={monster.name} />

            <h1 className='text-black font-bold'>{monster.name}</h1>
            <p>{monster.email}</p>
          </div>
        )
      
      })}
    </div>
   );
}
 
export default MonsterList;