import { Fragment, useState } from 'react';
import './App.css';
import List from './components/List';
import Practice from './components/Practice';
import Search from './components/Search';
import DynamicList from './components/DynamicList';
import useLocalStorage from './customHooks/useLocalStorage';
import Title from './components/Title';


const list = [
  {
    title: 'React',
    type: 'framework',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    status: 'active',
    objectID: 0,
  },
  {
    title: 'Redux',
    type: 'library',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    status: 'active',
    objectID: 1,
  },
  {
    title: 'Python',
    type: 'language',
    url: 'https://python.org/',
    author: 'Guido Van Rossum',
    num_comments: 2,
    points: 5,
    status: 'inactive',
    objectID: 2,
  },
  {
    title: 'Svelte',
    type: 'framework',
    url: 'https://svelte.dev/',
    author: 'Rich Harris',
    num_comments: 4,
    points: 7,
    status: 'active',
    objectID: 3,
  },
  {
    title: 'Tailwind',
    type: 'Framework',
    url: 'https://tailwindcss.com/',
    author: 'Daniel Maloney',
    num_comments: 7,
    points: 9,
    status: 'inactive',
    objectID: 4,
  },
  {
    title: 'Vue',
    type: 'framework',
    url: 'https://vuejs.org/',
    author: 'Evan You',
    num_comments: 6,
    points: 10,
    status: 'inactive',
    objectID: 5,
  },
];



function App() {
  const numbers = [1, 2, 3, 4, 5];
  
  //Creating useState Hooks
  const [counter, setCounter] = useState(0);
  //Getting search keyword from localStorage
  const [callBack, setCallBack] = useLocalStorage('keyword', 'React');

  //Rendering new numbers to new array
  const newNumbers = numbers.map((number) => {
    return number * 2;
  })

  //Creating CallBack handlers
  const onSearch = (event) => {
    setCallBack(event.target.value);
  }
  
  console.log(newNumbers);

  return (
    <Fragment>
      {/* This is another way in which the fragment can be used */}
      <p> {counter} </p>
      <button onClick={() => setCounter(counter - 1)}> Subtract </button>
      <button onClick={() => setCounter(counter + 1)}> Add </button>
      
      {/* Callback Handler value displayed in browser */}
      <h1> {callBack} </h1>
      <h1> Lists in React </h1>
      {/* Components - Opening and Closing Tag */}
      <Search search={callBack} onSearch={onSearch}></Search>

      {/*Components - Self-closing tag*/}
      <List title={`Search keyword: ${callBack}`} list={list.filter(search => search.title.toLowerCase().includes(callBack.toLowerCase()))} />

      {/* Reusing the List component */}
      <List title={'Frameworks Only'} list={list.filter(framework => framework.type === 'framework')} name={list.title} />
      <List title={'Third List - Active'} list={list.filter(framework => framework.status === 'inactive')} />

      {/* Creating a more dynamic component */}
      {/* Making React components behave like vanilla HTML */}
      <DynamicList name={'num_comments'} list={list}> Number of Comments </DynamicList>
      <DynamicList name={'title'} list={list}> Name of Items </DynamicList>

      {/* Passing components as children into other components */}
      <Practice>
        <Title />
        <Title />
        <Title />
        <Title />
        <Title />
      </Practice>
    </Fragment>
  );
}

export default App;
