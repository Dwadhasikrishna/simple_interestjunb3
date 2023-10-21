import './App.css';
import { TextField } from '@mui/material';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';





function App() {

  // logic part
  //js part

const[interest , setInterest] = useState(0)
const[principle, setPrinciple] = useState(0)
const[rate, setRate] = useState(0)
const[year, setYear] = useState(0)

// usestate for conditional rendering
const[isPrinciple,setIsPrinciple] = useState(true)
const[isRate,setIsRate] = useState(true)
const[isYear,setIsYear] = useState(true)


const getValidate = (e)=>{
  const {name,value} = e.target
  // console.log(name,value);
  if(!!value.match(/^[0-9]*.?[0-9]+$/)){
   if(name==='principle'){
    setPrinciple(value)
    setIsPrinciple(true)
  }
  // rate
  else if(name==='rate'){
    setRate(value)
    setIsRate(true)
  }
  // year
  else if(name==='year'){
    setYear(value)
    setIsYear(true)
  }
  }
  else{
    if(name==='principle')
    {setPrinciple(value)
    setIsPrinciple(false)}
    // rate
  else if(name==='rate'){
    setRate(value)
    setIsRate(false)
  }
  else if(name==='year'){
    setYear(value)
    setIsYear(false)
  }
  }

}

//calculate button activate
const handleCalculate =(e)=>{
  e.preventDefault()
  if(!principle || !rate || !year){
    alert('please fill the form')
  }
  else{
    setInterest(principle*rate*year/100)
  }

}

// return values to initial state using reset
const handleReset =(e)=>{
  setInterest(0)
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setIsPrinciple(true)
  setIsRate(true)
  setIsYear(true)

}

  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'> 
     <div className='bg-light p-5 rounded text-center' style={{width:'500px'}}> 
      <h1>SIMPLE INTEREST APP</h1>
      <p>Calculate Simple Interest Easily</p>

      <div className='bg-warning d-flex justify-content-center align-items-center w-100 rounded p-4 flex-column'>
        <h1>₹ {' '} {interest}</h1>
        <p>Total Simple Interest</p>
      </div>
      {/* form */}
      <form className='mt-5' onSubmit={handleCalculate}>
        {/* principle */}
        <div className='mb-3'>
        <TextField value={principle || ""} onChange={(e)=>getValidate(e)} name='principle'  id="outlined-basic" label="₹ Principle Amount" variant="outlined" className='w-100' />
        </div>
        {/* conditional rendering */}
        {!isPrinciple &&
        <div>
          <p className='text-danger fw-bolder'>Invalid Input</p>
        </div>
        }
        
        {/* rate */}
        <div className='mb-3'>
        <TextField value={rate || ""} onChange={(e)=>getValidate(e)} name='rate' id="outlined-basic" label="Rate Of Interest (p.a)" variant="outlined" className='w-100' />
        </div>
                
        {/* conditional rendering */}

        {!isRate &&
        <div>
          <p className='text-danger fw-bolder'>Invalid Input</p>
        </div>
        }

        {/* year */}
        <div className='mb-3'>
        <TextField value={year || ""} onChange={(e)=>getValidate(e)} name='year'  id="outlined-basic" label="Year (yr)" variant="outlined" className='w-100' />
        </div>

         {/* conditional rendering */}

         {!isYear &&
        <div>
          <p className='text-danger fw-bolder'>Invalid Input</p>
        </div>
        }

        {/* button */}
        <Stack className='mt-5' direction="row" spacing={2}>

        <Button type='submit' disabled={isPrinciple && isRate && isYear?false:true}  className='bg-success' style={{width:'200px', height:'50px'}} variant="contained">Calculated</Button>

        <Button onClick={handleReset} variant="outlined" style={{width:'200px', height:'50px',color:'red'}}>Reset</Button>
        </Stack>
         </form>

      </div>
    </div>
  );
}

export default App;
