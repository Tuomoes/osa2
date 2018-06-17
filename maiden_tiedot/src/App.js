import React, { Component } from 'react';
import axios from 'axios';

const Countries = (props) => {
  return (
    <div>
      <table>
       <tbody>
        {props.countries.map((country) => <Country key={country.name} name={country.name}/>)}
       </tbody>
      </table>
   </div>
  )

}

const Country = ({name}) => {
  return (
    <tr>
      <td>{name}</td>
    </tr>
  )

}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [
        {name: ''}
      ]
    }
  }

  componentDidMount() {
    console.log('mounted!')
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      console.log(response)
      this.setState({countries: response.data})
    })
  }

  render() {
    return (
      <div>
        <Countries countries={this.state.countries}/>
      </div>
    );
  }
}

export default App;
