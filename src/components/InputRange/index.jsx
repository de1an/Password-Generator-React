import React from 'react';
import { useDispatch } from 'react-redux';
import { setCharLength } from "../../redux/generatorStore";
import './input_range.css';

function InputRange() {
  const dispatch = useDispatch();

  const onHandleCh = (e) => {
    dispatch(setCharLength(+e.target.value));
  }
  return (
    <input 
    type="range"
    min="6"
    max="30"
    defaultValue="15"
    onChange={onHandleCh}/>
  )
}

export default InputRange