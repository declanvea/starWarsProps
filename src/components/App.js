import React, {Component} from 'react';
import '../styles/App.css';
import {Jumbotron, Form, FormGroup, FormControl, Input, FormText, Card, CardBlock, CardTitle, CardText, CardSubtitle} from 'reactstrap';

class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:
      state = {
        vehicles: [],
        value: '',
        pilot: ''
      }


  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:
  handleNameChange = (event) => {
      value: event.target.value
  }


  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      pilot: this.state.value,
      value: ''
    });
  }

  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:
  componentDidMount(){
    fetch('https://swapi.co/api/vehicles/')
    .then(r => r.json())
    .then(({results}) =>
      this.setState({vehicles: results}));
    }

  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render() {
    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */

    return (
        <div className="App">
          <div>
           <Jumbotron>
             <h1 className="display-3">Star Wars</h1>
             <hr className="my-2" />
             <p>These are the vehicles in Star Wars.</p>
           </Jumbotron>
         </div>

         <div className="card form">
          <div className="card-block">
            <h2 className="card-title">What is your name, pilot?</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input className="form-control col-md-4 offset-md-4" id="pilotName" onChange={this.handleNameChange} name="name" type="text" value={this.state.value} placeholder="Enter your name"/>
              </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <h3>{this.state.pilot}</h3>
          </div>
          </div>

         {this.state.vehicles.map((vehicle) =>
           <div key={vehicle.url} {...vehicle} className = "col-md-4">
             <div className="card">
              <div className="card-block">
                 <h3 className="card-title">Vehicle: {vehicle.name}</h3>
                 <p className="card-subtitle mb-2 text-muted">Model: {vehicle.model}</p>
              <div className="card">
                <div className="card-block">
                  <p className="card-subtitle mb-2 text-muted">Specs</p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Manufacturer: {vehicle.manufacturer}</li>
                    <li className="list-group-item">Class: {vehicle.vehicle_class}</li>
                    <li className="list-group-item">Passengers: {vehicle.passengers}</li>
                    <li className="list-group-item">Crew: {vehicle.crew}</li>
                    <li className="list-group-item">Length: {vehicle.length}</li>
                    <li className="list-group-item">Max Speed: {vehicle.max_atmosphering_speed}</li>
                    <li className="list-group-item">Cargo Capacity: {vehicle.cargo_capacity}</li>
                 </ul>
                </div>
               </div>
              </div>
             </div>
           < /div>
         )}
      </div>

    );
  }
}

export default App;
