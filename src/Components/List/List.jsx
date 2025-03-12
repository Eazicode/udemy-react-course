import ListItem from "../ListItem/ListItem";

const MonsterList = ({monsters }) => {
  return ( 
    <div className="card-list">
      <ListItem 
      monsters={monsters}
      />
    </div>
   );
}
 
export default MonsterList;