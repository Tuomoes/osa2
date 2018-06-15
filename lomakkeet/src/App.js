import React from 'react';


const Persons = (props) => {
    return (
        <div>
            <table>
                <tbody> 
                    {props.persons.map(person => 
                    <Person key={person.name} 
                    name={person.name} 
                    number={person.number}
                    />)}
                </tbody>
            </table>
        </div>
    )
}

const Person = ({name, number}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{number}</td>
        </tr>
    )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '123-456 321' },
        { name: 'Joku Toinen', number: '4531244 02'}
      ],
      newName: '',
      newNumber: ''
    }
  }

  addPerson = (event) => {
        event.preventDefault()
        console.log('nappi painettu')
        
        const personObject = {
            name: this.state.newName,
            number: this.state.newNumber
        }

        //check if a record with the same name already exist
        if (this.state.persons.findIndex( (element) => {
            return element.name === personObject.name
        }) !== -1) { alert('Nimi on jo lisätty') } 
        else {
            //add new object to array with concat (state should not be manipulated directly)
            const persons = this.state.persons.concat(personObject)

            //replace the old persons array with the updated version.
            this.setState({
                persons: persons,
                newName: '',
                newNumber: '',
                filter: ''
             })
        }
  }

  handleNameChange = (event) => {
      console.log(event.target.value)
      this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNumber: event.target.value })
  }

  handleFilterChange = (event) => {
    console.log(event.target.value)
    this.setState({ filter: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        rajaa näytettäviä:
        <input
            value={this.state.filter}
            onChange={this.handleFilterChange}
        />
        <h3>Lisää uusi</h3>
        <form onSubmit={this.addPerson}>
          <div>
            nimi: 
            <input 
                value={this.state.newName}
                onChange={this.handleNameChange}
            />
            
          </div>
          <div>
            numero:
            <input
                value={this.state.newNumber}
                onChange={this.handleNumberChange}
            />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h3>Numerot</h3>
        
        <Persons persons={this.state.persons} />

      </div>
    )
  }
}

export default App