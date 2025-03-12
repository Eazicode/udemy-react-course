const MonsterList = ({monsters}) => {
  return ( 
    <div className='text-center'>
      {monsters.map(monster => {
        return <div className="mb-5" key={monster.id}>
        <h1 className='text-black text-4xl'>{monster.name}</h1>
      </div>
      
      })}
    </div>
   );
}
 
export default MonsterList;