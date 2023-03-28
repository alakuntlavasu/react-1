import React, { useState,useCallback } from 'react'
import Count from './Count'
import Title from './Title'
import Button from './Button'

const ParentComp = () => {
    const[age, setAge]=useState(0)
    const[salary, setsalary]=useState(7000)
     
    const incrimentAge= useCallback(()=>{
        setAge(age+1)
    },[age]);
    const incrimentsalary= useCallback(()=>{
        setsalary(salary+1000)
    },[salary]);
  return (
    <div>
        <Title />
        <Count text={'age'} number={age} />
        <Button clickHandler={incrimentAge}>incrimentAge</Button>
        <Count text={'salary'} number={salary} />
        <Button clickHandler={incrimentsalary}>incrimentsalary</Button>
    </div>
  )
}

export default ParentComp

// use Callback and Rect.memo example