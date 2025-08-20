import React from 'react'
import { Card,Button } from 'react-bootstrap'
export const ServiceCard = ({title,text,onClick}) => {
  return (
    <div>
        <Card className='mb-3 shadow-sm'>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Button variant='primary' onClick={onClick}>Learn More</Button>
            </Card.Body>
        </Card>
    </div>
  )
}
