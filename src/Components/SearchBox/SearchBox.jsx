const FilterMonsters = ({trackInput, placeholder, className}) => {
  return ( 
    <>
      <div className='text-center py-20 outline-none'>
          <input className={className}
          type="search" 
          placeholder={placeholder} 
          onChange={trackInput} />
      </div>
    </>
   );
}
 
export default FilterMonsters;