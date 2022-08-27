import React, { useState, useEffect } from 'react';

const Index = () => {
    const [equation, setEquation] = useState('');
    const [result, setResult] = useState('')
    // const [myArr, setMyArr] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    const [myLoopArr, setMyLoopArr] = useState([])

    function createNumber(e) {
        let myArr = []

        for (let i = 0; i < 11; i++) { //loop condition
            if (i < 10) { //if else condition
                myArr.push(i)
            }
            else if (i < 11) {
                myArr.push('+')
                myArr.push('-')
                myArr.push('*')
                myArr.push('/')
            }
           
        }
        setMyLoopArr(myArr);
        // console.log(equation.concat(e.target.value));
        // setMyLoopArr(equation.concat(e.target.value))

    }
    // createNumber()
    useEffect(() => {
        createNumber()
        //get data/render data
        console.log("1");
    }, [])

    function getValue(e) {
        setEquation(equation.concat(e.target.value))
    }

    // a = ''
    // b = '1'
    // c = ''
    // c = a.concat(b)
    function getResult() {
        try{
            setResult(eval(equation))

        } catch(error){
            console.log("error", "Bi lỗi rồi, trời dat oi")
        setEquation("error, please type another equation")
        console.log(error)

        }

    }
    // eval('console.log('Hello')')

    // console.log('Hello')

    // eval('1+1')
    // 1 + 1

    function getValueTo0() {
        console.log(0);
        setEquation('')
        setResult('0')
    }

    return (
        
        <div>
            <h3>EQUATION: {equation}</h3>
            <h3>RESULT: {result}</h3>

            {/* <button value='0'onClick={getValue}>0</button>
            <button value='1'onClick={getValue}>1</button>
            <button value='2'onClick={getValue}>2</button>
            <button value='3'onClick={getValue}>3</button>
            <button value='4'onClick={getValue}>4</button>
            <button value='5'onClick={getValue}>5</button>
            <button value='6'onClick={getValue}>6</button>
            <button value='7'onClick={getValue}>7</button>
            <button value='8'onClick={getValue}>8</button>
            <button value='9'onClick={getValue}>9</button> */}
            {/* <button value='+' onClick={getValue}>+</button>
            <button value='-' onClick={getValue}>-</button>
            <button value='*' onClick={getValue}>x</button>
            <button value='/' onClick={getValue}>:</button> */}

            {
                myLoopArr.map((element, index) => {
                    return (
                        <button
                            value={element} onClick={getValue}
                            key={index} >
                            {element}
                        </button>)
                })
            }



            <button onClick={getResult}>=</button>
            <button onClick={getValueTo0}>VALUE 0</button>

            {/* <button onClick={createNumber}>LoopNumber</button> */}

            {/* agile method */}


        </div>
    );
};

export default Index;
