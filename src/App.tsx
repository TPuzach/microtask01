import './App.css';
import React, {MouseEvent, useState} from "react";
/*import {Button} from "./components/Button";*/


/*
import styled from 'styled-components';
import {Microtask1} from "./Microtask1";
*/


/*
function App() {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    return (

    <div className="App">
        <Microtask1 topCars={topCars} />


    </div>
    );
}
*/
/*function App() {
  /!*const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) =>{
        console.log("Hello I'm Vasya")
    }
    const mySecondSubscriber = () =>{
        console.log("Hello I'm Petya")
    }
   const onClickHandler = (name:string)=>{
        console.log(name)
    }
    return (
        <div className="App">
            <button onClick={() => onClickHandler ('Vasya')}>MyYouTubeChanel-1</button>
            <button onClick={() => onClickHandler('Petya')}>MyYouTubeChanel-2</button>
        </div>
    )
}*/
/*function App() {
   const foo1= () =>{
       console.log(100200)
}
const foo2 = (num:number)=>{
    console.log(num)
}
return (
    <div className="App">
        <button onClick={ foo1}>1</button>
        <button onClick={() => foo2 (100200)}>2</button>
    </div>
)
}*/

/*
function App()  {
    const Button1Foo =(subscriber:string, age:number)=>{
        console.log(subscriber,age)
    }
    const Button2Foo =(subscriber:string)=>{
        console.log(subscriber)
    }
    return(
        <div className={"App"}>
            {/!*<button>MyYouTubeChanel-1</button>
            <button>MyYouTubeChanel-2</button>*!/}
            <Button name={'MyYouTubeChanel-1'} callBack={()=>Button1Foo('Im Vasya', 21)}/>
            <Button name={'MyYouTubeChanel-2'} callBack={()=>Button2Foo('Im Petya')}/>
        </div>
    )
}
*/

/*function App() {
    let [a, setA]=useState(1)
    const OnClickHandler=()=>{
        setA(++a)

        console.log(a)
    }
    const ButtonNull=()=> {
        setA(0)

        console.log(a)
    }
    return(
        <div className={"App"}>
        <h1>{a}</h1>
        <button onClick={OnClickHandler}>Number</button>
            <button onClick={ButtonNull}>0</button>
        </div>
    )
}*/

type FilterType='all'|'Dollars'|'RUBLS'
function App() {
    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    const [filter, setFilter] = useState('all')

    let CurrentMoney=money
    if (filter==='Dollars'){
       (CurrentMoney=money.filter((FilteredMoney)=>FilteredMoney.banknots==='Dollars'))
    }
    if (filter==='RUBLS'){
        (CurrentMoney=money.filter((FilteredMoney)=>FilteredMoney.banknots==='RUBLS'))
    }

    const OnClickFilterHandler=(nameButton:FilterType)=>{
        setFilter(nameButton)
    }
    return(
        <>
            <ul>
                {CurrentMoney.map((objFromMoneyArr,index)=>{
                    return(
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft:'35px'}}>
                <button onClick={()=>OnClickFilterHandler('all')}>all</button>
                <button onClick={()=>OnClickFilterHandler('RUBLS')}>RUBLS</button>
                <button onClick={()=>OnClickFilterHandler('Dollars')}>Dollars</button>
            </div>
        </>

    )
}
export default App;

