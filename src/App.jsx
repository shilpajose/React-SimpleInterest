import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {

  // create state to store data
  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
 
  const [principleAmountValid,setPrincipleAmountValid] = useState(true)
  const [rateAmountValid,setRateAmountValid] = useState(true)
  const [yearAmountValid,setYearAmountValid] = useState(true)

  const handleReset = () => {
    setInterest('0')
    setPrinciple('0')
    setRate('0')
    setYear('0')
  }

  // validation
  const handleValidation = (tag) => {
    // console.log('jji');
    const { value, name } = tag
    console.log(value, name);

    // validation
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if (!!value.match(/^\d*.?\d+$/)) { //0-9 regular expression = \d
      if (name == 'principle') {
        setPrinciple(value)
        setPrincipleAmountValid(true)
      } else if (name == "rate") {
        setRate(value)
        setRateAmountValid(true)
      } else {
        setYear(value)
        setYearAmountValid(true)
      }
    } else {
      if (name == 'principle') {
        setPrinciple(value)
        setPrincipleAmountValid(false)
      } else if (name == "rate") {
        setRate(value)
        setRateAmountValid(false)
      } else {
        setYear(value)
        setYearAmountValid(false)
      }
    }
  }

  // calculate function
  const handleCalculate=()=>{
    if(principle && rate && year){
      setInterest(principle*year*rate/100)
    }else{
      alert("Please Fill The Form Completely!!!")
    }
  }


  return (
    <>


      <div className='d-flex justify-content-center align-items-center bg-dark' style={{ width: '100%', height: '100vh' }}>
        <div style={{ width: '600px' }} className='bg-light p-5 rounder'>
          <h3 className='text-info'>Simple Interest Calculator</h3>
          <p>Calculate your simple interest easily</p>
          <div className="d-flex justify-content-center align-items-center bg-warning p-1 rounded shadow flex-column text-light">
            <h1>₹ {interest}</h1>
            <p className='fw-bolder'>Total Simple Interest</p>
          </div>
          <form className='mt-5'>
            {/* principle */}
            <div className='mb-3'>
              <TextField className='w-100' id="outlined-basic-principle" value={principle || ""} name='principle' onChange={e => handleValidation(e.target)} label="₹ Principle Amount" variant="outlined" />
              {!principleAmountValid && <div className='text-danger mb-3'>Invalid Principle Amount</div>}
            </div>
            {/* rate */}
            <div className='mb-3'>
              <TextField className='w-100' id="outlined-basic-rate" value={rate || ""} name='rate' onChange={e => handleValidation(e.target)} label="Rate of Interest (p.a) %" variant="outlined" />
              { !rateAmountValid && <div className='text-danger mb-3'>Invalid Rate Amount</div>}
            </div>
            {/* time */}
            <div className='mb-3'>
              <TextField className='w-100' id="outlined-basic-time" value={year || ""} name='year' onChange={e => handleValidation(e.target)} label="Time Period (yr)" variant="outlined" />
              { !yearAmountValid && <div className='text-danger mb-3'>Invalid Year</div>}
            </div>
            {/* btn collection */}
            <Stack direction="row" spacing={2}>
              <Button onClick={handleCalculate} disabled={!principleAmountValid || !rateAmountValid || !yearAmountValid} style={{ width: '50%', height: '70px' }} className='bg-dark' variant="contained">Submit</Button>
              <Button onClick={handleReset} style={{ width: '50%', height: '70px' }} variant="outlined">Reset</Button>
            </Stack>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
// ₹ = shift+ctrl+4