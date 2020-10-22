import React, { useEffect, useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import {  useDispatch, useSelector } from 'react-redux';
import { getQuizz } from '../actions/quizzAction';


function Questions() {
    const dispatch = useDispatch();
    const inputRefs = [useRef(null),useRef(null),useRef(null),useRef(null)];
    const [indx , setIndx] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore]= useState(false);
    useEffect(()=>{
        dispatch(getQuizz())
    },[dispatch])
    
    const askMe = useSelector((store) =>  {
        return store.questions?.questions;
    } );

    const currQ = askMe[indx];
   
    const nextQ =()=> {
        inputRefs.map((inputRef) => {
            if (inputRef.current.checked) {
                if(inputRef.current.value === currQ?.options[currQ?.correct]){
                    setScore(score + 2 )
                }
            }
            inputRef.current.checked = false;
            return inputRef;
        })
      if(indx <  4)  {
          setIndx(indx + 1 )
        }else {
            setShowScore(true)
        }
    }

    return (
        <div>
           
           <Form.Group>
           <Form.Label as="legend" column sm={10}>
            <h3 style={{marginTop: "100px"}}>{currQ?.question}</h3>
           
           </Form.Label>
           {currQ?.options.map((option, i)=> 
           
           <Form.Check
            key={i}
            type="radio"
            label={option}
            name="formHorizontalRadios"
            value={option}
            ref={inputRefs[i]}
            />
           )}
           
            
           
           <Button onClick={nextQ} className="btn btn-secondary" style={{marginTop:"30px"}} >
               {indx === 4 && "Finish" || "Next"}
           </Button>
           <div>
               {showScore === true && 
               <h2>The Score : {score}</h2>
               }
           </div>
          
           </Form.Group>
           
        </div>
    )
}

export default Questions;
