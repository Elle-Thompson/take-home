import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";
import React, { useEffect, useState } from "react";

function InputForm() {

const [email, setEmail] = useState();
const [password, setPassword] = useState();

    return (
        <>
        <Form>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Password</Form.Label>
          <Form.Control
            autoFocus
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        
          <button>Submit</button>
        
        </Form>

        <div><Link exact to="/feed">Back </Link> </div>
        </>

    );
}
export default InputForm;