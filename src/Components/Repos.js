import React ,{useState,useEffect} from "react";
import Axios from "axios";

import {ListGroup,ListGroupItem} from "reactstrap";

const Repos =({repos_url})=>{

const [repos,setRepos]=useState([]);

const fetchRepos=async()=>{
    const {data}=await Axios.get(repos_url);
    //calling our state  and storing data

    setRepos(data)

}
//load components 

useEffect(()=>{
    fetchRepos()
},[repos_url])// as soon as i grab the url fetchrepos will be kicked in  which will run every thing into my state and fill the repos

return (


    <ListGroup>
        {repos.map(repo=>(
            <ListGroupItem key={repo.id}>
                <div className="text-primary">{repo.name}</div>    
                <div className="text-secondary">{repo.language}</div>    
                <div className="text-info">{repo.description}</div>    

            </ListGroupItem>
        ))}
    </ListGroup>
)
}

export default Repos;