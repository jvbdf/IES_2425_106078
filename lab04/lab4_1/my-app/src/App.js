import logo from './logo.svg';
import './App.css';
import Profile from './profile';
import './myCss.css'
import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

function MyButtonTogether({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

export default function Myapp(){
  const [count, setCount] = useState(0);

    function handleClick() {
      setCount(count + 1);
    }

  return(
    
    <div>
      <h1>Lab 4_1 Tutorial</h1>
      <Profile />
      <ShoppingList />
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
      <div>
      <h1>Counters that update together</h1>
      <MyButtonTogether count={count} onClick={handleClick} />
      <MyButtonTogether count={count} onClick={handleClick} />
    </div>
    </div>
    

    
    
    
  )
}


const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}




