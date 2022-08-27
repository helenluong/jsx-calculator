import React, { useState, useEffect } from 'react';

const Index = () => {
    const [myNumber, setMyNumber] = useState([]);
    const [equation, setEquation] = useState('');
    const [result, setResult] = useState()
    useEffect(() => {
        createNumber ()
        console.log('1');
    }, [])

    // createNumber ()
        // console.log('1');
   
 
    
    function createNumber() {
        let myLoop = []

        // myTempNumb
        for (let i = 0; i < 11; i++) {

            if (i < 10) {
                myLoop.push(i)
            }
            else if (i < 11) {
                myLoop.push('+')
                myLoop.push('-')
                myLoop.push('*')
                myLoop.push('/')
            }
            setMyNumber(myLoop)
        }
    }

    function getEquation(e) {
        setEquation(equation.concat(e.target.value))
        console.log("1");
    }

    function getResult(e)  {
        setResult (eval(equation))
    }
    
    
    return (
        <div>
            <h3>EQUATION: {equation}</h3>
            <h3>RESULT: {result}</h3>
            <button onClick={getResult}>=</button>
            {myNumber.map(
                (element, index) => {
                return (
                    <button
                    value={element} onClick={getEquation}
                    key={index}> {element}
                    </button>
            )}
            )}

            {/* {myNumber.map(
                (element, index) => {
                    return (
                        <button></button>
                    )
                }
            )}

            {myNumber.map((element, index)=>{

            })} */}

        </div>
    );
};

export default Index;