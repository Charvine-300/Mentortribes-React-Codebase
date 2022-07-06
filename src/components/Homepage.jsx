import List from "./List";
import Search from "./Search";


const Homepage = ({ search, onSearch, deleteData, list }) => {
  return ( 
    <>
      <Search
        search={search}
        onSearch={onSearch}
      />
      <List 
        title={`Search keyword: ${search}`}
        list={list}
        deleteData={deleteData}
      />
    </>
  );
}
 
export default Homepage;