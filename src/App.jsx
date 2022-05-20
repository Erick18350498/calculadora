import React from 'react'
import{useState} from "react"

function App() {

const [numero1, setnumero1] = useState("")
const [numero2, setnumero2] = useState("")
const [currentOperation, setcurrenOperation] = useState("")
const [result, setresult] = useState(0)

const initialState= JSON.parse(localStorage.getItem("Operaciones"))||[];
  const [historial,sethistorial]=useState(initialState)


  const handleBorrar=()=>{
    sethistorial([])
    localStorage.setItem("Operaciones", JSON.stringify([]));
  }


function allclean(){

  const lista={numero1:numero1,currentOperation:currentOperation,numero2:numero2,result:result}
    const nuevoArreglo = [...historial, lista]
    sethistorial([...nuevoArreglo]);
    localStorage.setItem("histo", JSON.stringify(nuevoArreglo));


  setnumero1("")
  setnumero2("")
  setcurrenOperation("")
  setresult("")
}

function clicknumber(val){

  if (currentOperation===""){
      setnumero1(numero1+val)
  }else{
    setnumero2(numero2+val)
  }
}

function clickOperation(val){
  setcurrenOperation(val)
}

function getresult(){
  switch(currentOperation){
    case "+":
      setresult(Number(numero1)+Number(numero2));
      break;
    case "-":
      setresult(Number(numero1)-Number(numero2));
      break;
    case "*":
      setresult(Number(numero1)*Number(numero2));
      break;
      case "/":
        setresult(Number(numero1)/Number(numero2));
        break;
  }
}

  return (

    <div className='App Container'>
      <div className='row'>
        <div className='col'>
          <div className='App'>
                <div className='calculator-grid'>
                  <div className='output'>
                    <div className='previous-operand'>{currentOperation ? numero1 + currentOperation: ""}
                    </div>
                    <div className='current-operand'>{result ? result :(!currentOperation ? numero1:numero2)}
                    </div>
                    </div>
                    <button className='span-two'onClick={allclean}>AC</button>
                    <button onClick={()=>{}}>DEL</button>
                    <button onClick={()=>{clickOperation("/")}}>/</button>
                    <button onClick={()=>{clicknumber(7)}}>7</button>
                    <button onClick={()=>{clicknumber(8)}}>8</button>
                    <button onClick={()=>{clicknumber(9)}}>9</button>
                    <button onClick={()=>{clickOperation("*")}}>*</button>
                    <button onClick={()=>{clicknumber(4)}}>4</button>
                    <button onClick={()=>{clicknumber(5)}}>5</button>
                    <button onClick={()=>{clicknumber(6)}}>6</button>
                    <button onClick={()=>{clickOperation("+")}}>+</button>
                    <button onClick={()=>{clicknumber(1)}}>1</button>
                    <button onClick={()=>{clicknumber(2)}}>2</button>
                    <button onClick={()=>{clicknumber(3)}}>3</button>
                    <button onClick={()=>{clickOperation("-")}}>-</button>
                    <button onClick={()=>{}}>.</button>
                    <button onClick={()=>{clicknumber(0)}}>0</button>
                    <button className='span-two'onClick={getresult}>=</button>
                </div>
              </div>
        </div>
        <div className='col'>
          <div>
            <br />
            <br />
            <br />
          {
            historial.length===0 &&
            "Al momento no tienes historial de operaciones"
          }
          {
            historial.length !== 0 && (
              <ol>
                {historial.map((item, index)=>{
                  return(
                    <li key={index}>
                      {item.numero1}{item.currentOperation}{item.numero2}={item.result}
                      <br />
                    </li>
                  )
                })}
              </ol>
            )
          }
          </div>
          <button onClick={handleBorrar}>Borrar Historial</button>
        </div>

      </div>
    
    </div>
  )
}

export default App