import React, { Component } from 'react';
import axios from 'axios';

const FilterCountries = (props) => {
  return (
    <ShowCountyData clickAction={props.clickAction} countries={props.countries.filter((country) => country.name.toLocaleLowerCase().match(props.filter.toLocaleLowerCase()))}/>
  )
}

const ShowCountyData = (props) => {
  if (props.countries.length > 10) {
    return(
      <div>
        too many matches, specify another filter
      </div>
    )

  }
  else if (props.countries.length === 1) {
    return (
      <CountryDetails country={props.countries[0]}/>
    )
  }
  else if (props.countries.length === 0) {
    return(
      <div>
        no countries found, specify a different filter
      </div>
    )
  }
  else {
    return (
      <CountryList clickAction={props.clickAction} countries={props.countries}/>
    )
  }

}

const CountryList = (props) => {
  return (
    <div>
      <table>
       <tbody>
        {props.countries.map((country) => <CountryListItem key={country.name} clickAction={props.clickAction} name={country.name}/>)}
       </tbody>
      </table>
   </div>
  )
}

const CountryDetails = (props) => {
  return (
    <div>
      <h1>{props.country.name}</h1>
      <p>capital: {props.country.capital}</p>
      <p>population: {props.country.population}</p>
      <p><img src={props.country.flag} width={400}  alt={'country flag'}/></p>
    </div>
  )
}

const CountryListItem = ({name, clickAction}) => {
  return (
    <tr>
      <td onClick={clickAction(name)}>
        {name}
      </td>
    </tr>
  )

}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [
        {name: ''}
      ],
      filter: ''
    }
  }

  componentDidMount() {
    console.log('mounted!')
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      console.log(response)
      this.setState({countries: response.data})
    })
  }

  handleFilterChange = (event) => {
    console.log(event.target.value)
    this.setState( {filter: event.target.value} )
  }

  handleFilterChangeWithName = (name) => {
    return () => {
      console.log('clicked name:', name)
      this.setState( {filter: name} )
    }

  }

  render() {
    return (
      <div>
        find countries:
        <input
          value={this.state.filter}
          onChange={this.handleFilterChange}
        />
        <FilterCountries countries={this.state.countries} filter={this.state.filter} clickAction={this.handleFilterChangeWithName}/>
      </div>
    );
  }
}

export default App;
