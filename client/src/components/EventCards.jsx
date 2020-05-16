import React, { useContext  } from 'react'
import './EventCards.css';
import { AppContext } from '../context/AppContext';
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { CardBody } from 'react-bootstrap/Card';


const EventCards = () => {

    //Bring in ticketMasterEvents (Prepped API Data) from Context
    const {ticketMasterEvents } = useContext(AppContext)

    //Event Card Render
    const SampleEventCards = ({ name,localDate, localTime, image, Venue, subgenre}) => {
        return(
            <Card style={{ width: '30rem'}}>
                <Card.Img src={image} alt={`Image of ${name}, the music band`} style={{width:200, height:200}} />
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>{subgenre}</Card.Subtitle>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>{Venue}</ListGroupItem>
                    <ListGroupItem>{localDate}</ListGroupItem>
                    <ListGroupItem>{localTime}</ListGroupItem>
                </ListGroup>
                    
                <Card.Body>
                    {console.log("Hello " + name)}    
                </Card.Body>
            </Card>
        )    
    }

    //Card Render 
    const Cards = () => {
        return (
            <>
            {
                ticketMasterEvents.map( items => <SampleEventCards {...items} key={items.name}/> )
            }  
            </>
        )
    }
    
    return( 
        <Cards />
    )
}

export default EventCards