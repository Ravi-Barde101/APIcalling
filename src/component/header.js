import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from "axios";


function Header() {
    const[index, setIndex] = useState({});
    const[user, setUser] = useState({});

    async function HandleChange(){
        let user1 = await axios.get(`https://api.github.com/users/${index}`);
        //console.log(user);
        setUser(user1.data)
    }
    function Handle1(evt){
        //console.log(evt.target.value);
        setIndex(evt.target.value);
    }
  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" onChange={Handle1} placeholder="" />
      </Form.Group>
      <Button variant="primary" onClick={HandleChange}>Primary</Button>
    </Form>
    <p>{user.login}</p>
    <img src={user.avatar_url}>
    </img>
    {/* <p>{index}</p> */}
    </>
  );
}

export default Header;