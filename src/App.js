import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products =[
    {name:'photoshop', price:'$20'},
    {name:'webdesign', price:'$35'}
  ];
  const productNames = products.map(product=> product.name);
  console.log(productNames);

  const hasi = ['hurray', 'yay', 'fatafati', 'chomotkar', 'mairala'];
  const hasiNew = hasi.map(hasis => hasis)
  console.log(hasiNew)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Will Become a React Developer.
        </p>
        <Counter></Counter>
        <Users></Users>
        <Product shortcut ={products[0]}></Product>
        <Product shortcut ={products[1]}></Product>
        {
          products.map(pd => <Product shortcut ={pd}></Product>)
        }
        <FirstCode name='This is first code' framework="react" feeling={hasi[0]}> </FirstCode>
        <FirstCode name="This is second code" framework="python" feeling={hasi[1]}> </FirstCode>
        <ul>
          {
            hasi.map(hasi => <li>{hasi}</li>)
          }
        </ul>
      </header>
    </div>
  );
}

function FirstCode(props) {
  const FirstCodeStyle={
    border:'2px solid blue',
    margin:'20px',
    padding:'0px 10px'
  }
  return (
  <div style={FirstCodeStyle}>
    <h1>{props.name}</h1>
  <h2 style={{border: '2px solid lime'}}>We will started {props.framework} coding. {props.feeling}</h2>
  </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    const newCount = count+1;
    setCount(newCount);
  }
  return(
    <div>
      <h1>Count: {count} </h1>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    width:'250px',
    height:'250px',
    float:'left',
    padding:'10px',
    margin:'5px',
    color:'black'
  }
  const {name} = props.shortcut;
  return(    
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>Price: {props.shortcut.price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

function Users(){

  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then (data => setUsers(data));
  }, [])

  return(
    <div>
      <h3>Dynamic users: {users.length}</h3>
      <ul>
        {users.map(user => <li>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default App;
