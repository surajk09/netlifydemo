import React, { Component } from "react"
import { Link } from "react-router-dom"
import {Image,Card,Button,Grid, Divider} from "semantic-ui-react"

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
<Grid columns={3} stackable>
<Grid.Row>
<Grid.Column width={1}></Grid.Column>
  <Grid.Column width={14} textAlign={"center"}>
        <Card.Group>
    <Card>
      <Card.Content>
        <Image floated='right' src={require('../images/conferenceRoom.png')} size="tiny" />
        <Card.Header>Total Conference Rooms</Card.Header>
       <Divider/>
        <Card.Header extra> 
          15
        </Card.Header>
      </Card.Content>
      
    </Card>
    <Card>
      <Card.Content>
        <Image floated='right' src={require('../images/conferenceRoom.png')} size="tiny" />
        <Card.Header>Available Conference Rooms</Card.Header>
        
        <Divider/>
        <Card.Header extra> 
          15
        </Card.Header>
      </Card.Content>
      
    </Card>
    <Card>
      <Card.Content>
        <Image floated='right' src={require('../images/conferenceRoomBooked.png')} size="tiny" />
        <Card.Header>Booked Conference Rooms</Card.Header>
       
        <Divider/>
        <Card.Header extra> 
          15
        </Card.Header>
      </Card.Content>
      
    </Card>
    <Card>
      <Card.Content>
        <Image floated='right' src={require('../images/projectIcon.png')} size="tiny" />
        <Card.Header>Total Projects Available</Card.Header>
        <Divider/>
        <Card.Header extra> 
          15
        </Card.Header>
      </Card.Content>
     
    </Card>
  </Card.Group>
  </Grid.Column>

<Grid.Column width={1}></Grid.Column>
</Grid.Row>
</Grid>
      </div>
    )
  }
}

export default Home
