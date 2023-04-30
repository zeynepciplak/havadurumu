import Air from "./Air";
import Celcius from "./Celcius";
import Fahrenheit from "./Fahrenheit";
import Kelvin from "./Kelvin";
import { Container, Row, Col,Button} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'



export default class App extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }



  artis(){
    this.setState({
      count:this.state.count+1
    })
  }

  azalis(){
    this.setState({
      count:this.state.count-1
    })
  }

  
  
  render(){
    return (
      <div >
        <div className="container" >
          <center>
        <h2 color="blue" >HAVA DERECESİ?</h2>
        <h5> Anlık sıcaklık : {this.state.count} derece</h5>

       
       <Button  onClick={()=>{this.artis(); }}  color="secondary">
         Sıcaklığı artır
       </Button>

       <br/>
       <br/>

       <Button onClick={()=>{this.azalis(); }}   color="success">
        Sıcaklığı azalt
       </Button>
       </center>
        </div>
       
          <Container>
          <Row>
            <Air title="3 birimde sıcaklık ölçümü" />
          </Row>
  
          <Row>
            <Col xs="4">
              <Celcius count={this.state.count}  title="Celcius : "  />
            </Col>
  
            <Col xs="4">
              <Fahrenheit count={this.state.count * (9/5)+32} title="Fahrenheit:" />
            </Col>
  
            <Col xs="4">
              <Kelvin count={this.state.count+273.15}  title="Kelvin :" />
            </Col>
          </Row>
        </Container>
      </div>
    );

  }
}