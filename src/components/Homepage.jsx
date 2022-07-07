import List from "./List";
import Search from "./Search";
import { Routes, Route } from "react-router-dom";
import Frameworks from "./nestedfiles/Frameworks";
import Libraries from "./nestedfiles/Libraries";
import Languages from "./nestedfiles/Languages";


const Homepage = ({ search, onSearch, deleteData, list }) => {
  const firstList = list.filter(framework => framework.type === 'framework');
  const secondList = list.filter(library => library.type === 'library');
  const thirdList = list.filter(language => language.type === 'language');

  return ( 
    <>
      <Search
        search={search}
        onSearch={onSearch}
      />
      <Routes>
        <Route path='/' element={
          <List 
            title={`Search keyword: ${search}`}
            list={list.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))}
            deleteData={deleteData}
          />} 
        />
        <Route path='frameworks' element={
          <Frameworks 
            deleteData={deleteData}
            frameworkList={firstList.filter(framework => framework.title.toLowerCase().includes(search.toLowerCase()))}
          />} 
        />
        <Route path='libraries' element={
          <Libraries 
            deleteData={deleteData}
            librariesList={secondList.filter(library => library.title.toLowerCase().includes(search.toLowerCase()))}
          />} 
        />
        <Route path='languages' element={
          <Languages 
            deleteData={deleteData}
            languagesList={thirdList.filter(language => language.title.toLowerCase().includes(search.toLowerCase()))}
          />} 
        />
      </Routes>
    </>
  );
}
 
export default Homepage;