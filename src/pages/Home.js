import React, { useState, useContext } from "react";
import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

import UserCard from "../Components/UserCard";
import Repos from "../Components/Repos";
import { Redirect } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { toast } from "react-toastify";

const Home=()=>{

    //put anything bheind login
  

const context=useContext(UserContext);

const [query ,setQuery]=useState('');
//we need a user when we will be firing up a request we will get some response back  and wee need to store that date i user
const [user,setUser]=useState('');

// we need to design  a method which can make a web e=request  and can store all our data in our stote

const fetchDetails =async()=>{
    try {
        //response.data={data}
     const {data}= await Axios.get(`https://api.github.com/users/${query}`)//so whatever user saying we will be first store it into a state then we r gonna fetch from here
        setUser(data) //store the data
        console.log({data});
    } catch (error) {
        toast("not able to locate user",{type:"error"})
    }
};


if(!context.user?.uid){
    return <Redirect to="/signin"/>

}
return (
    <Container>
      <Row className=" mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value={query}
              onChange={e=>setQuery(e.target.value)}
              placeholder="Please provide the username"
            />
            <InputGroupAddon addonType="append">
              <Button onClick={fetchDetails} color="primary">Fetch User</Button>
            </InputGroupAddon>
          </InputGroup>
          {user?<UserCard user={user}/>:null}

        </Col>
        <Col md="7">
            {user?<Repos repos_url={user.repos_url}/>:null}
        </Col>
      </Row>
    </Container>
  );

}

export default Home;