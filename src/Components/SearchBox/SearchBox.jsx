const FilterMonsters = (filtername) => {
  // console.log(filtername.filtername.e.target.value)
  return ( 
    <>
      <div className='text-center py-20 outline-none'>
        <input className='p-4 outline-none rounded-sm bg-gray-500 text-white' type="search" placeholder='Search Monsters' onChange={filtername.filtername} />
      </div>
    </>
   );
}
 
export default FilterMonsters;