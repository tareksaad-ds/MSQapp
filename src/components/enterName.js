import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

function EnterName (props) {
    const [name , setName] = useState(''); 
    const beginTest = () =>{
        props.history.push("/quizz");    
    }

    return (
        <div className="container">
            <Form.Group style={{marginTop: "100px"}}>
                <Form.Control size="lg" type="text" placeholder="enter the name.."  onChange={(e) => setName(e.target.value)} value={name} />
            </Form.Group>
            <Button className="btn btn-primary" onClick={beginTest}>Submit</Button>
        </div>
    )
}

export default EnterName;
