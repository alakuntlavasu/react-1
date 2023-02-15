import React, { useState } from "react";
const ETForm=({track,setTrack})=>{
    const[TotalAmT,setTotalAmT]=useState(0);
    const[InputValue,setInputValue]=useState(1000)
    const total = parseInt(TotalAmT);
    const value = parseInt(InputValue);
    const date = new Date().toLocaleString();
    const ubdateHandler=(e)=>{
        setInputValue(e.targent.value)
    }
    const Addhandler=()=>{
        setTotalAmT(total + value);
        setInputValue('');
        setTrack([...track,
        {
            tDte:date,
            toTal:total,
            tAddedAmount: value,
            tRemovedAmount: '-',
            tBalanceAmount: total + value
        }
    ]);
    }
    const Removehandler=()=>{
        setTotalAmT(total-value);
        setInputValue('');

        setTrack([...track,
        {
            tDate: date,
            tTotal: total,
            tAddedAmount: '-',
            tRemovedAmount: value,
            tBalanceAmount: total - value
        }
    ]) 
    }
    return <div className="container">
        <div className="row">
            <div className="col-md-6 m-md-auto">
            <div className="gutter-gap">
                <h1 className="tex-center border p-2">Expence Tracker-Basic</h1>
                <form className="border p-2 mt-5">
                <h3 className='text-center'>Balance: {TotalAmT}</h3>
                <div className="mb-3">
                <input type='number' placeholder='Enter Amount' className='form-control rounded-0 w-50 m-auto'
                                value={InputValue}
                                onChange={ubdateHandler} />
                </div>
                <div className="mb-3 text-center">
                <button type='button' className='btn bg-light border rounded-0 me-2'
                                onClick={Addhandler}>ADD</button>
                            <button type='button' className='btn bg-light border rounded-0'
                                onClick={Removehandler}>REMOVE</button>
                </div>
                </form>
            </div>
        </div>
    </div>
    </div>
   
}
export default ETForm