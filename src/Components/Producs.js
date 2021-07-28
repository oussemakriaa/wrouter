import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Producs = ({products}) => {
    return (
        <div className="d-flex justify-content-around ">
         {
             products.map(product => <Card key={product.id} style={{ width: '20rem' }} className="">
             <Card.Img variant="top" src={product.imgSrc} />
             <Card.Body>
               <Card.Title>{product.name}</Card.Title>
               <Card.Text>
                {product.price}
               </Card.Text>
               <Link to={`/products/${product.id}`}><Button variant="primary">See Details</Button></Link>
             </Card.Body>
           </Card>)
         }  
        </div>
    )
}

export default Producs
