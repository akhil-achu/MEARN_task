import React from 'react'

import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
  

function ViewUser({data}) {
    console.log(data);
    
  return (
    <div>
        <div className="row">
            {
                data.map(item=>(
                    <div className="col m-3">
                        

       

   

    <Card className='m-5 p-2 ' style={{textAlign:"justify"}}>
      <ListGroup variant="flush">
        <ListGroup.Item>Id :{item.id}</ListGroup.Item>
        <ListGroup.Item>First Name :{item.firstName}</ListGroup.Item>
        <ListGroup.Item>Last Name :{item.lastName}</ListGroup.Item>
        <ListGroup.Item>Gender :{item.gender}</ListGroup.Item>
        <ListGroup.Item>Date of Birth :{item.birthDate}</ListGroup.Item>
        <ListGroup.Item>Email :{item.email}</ListGroup.Item>
        <ListGroup.Item>Phone :{item.phone}</ListGroup.Item>
        <Link to={`/user/view/${item.id}`}> <Button className='p-2 m-4'>View Details</Button>
        </Link>

       
      </ListGroup>
    </Card>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ViewUser