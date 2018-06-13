import React from 'react';

const Persons = (props) => {
    return (
        <div>
            <table>
                <tbody> 
                    {props.persons.map(person => <Person key={person.name} name={person.name}/>)}
                </tbody>
            </table>
        </div>
    )
}

const Person = ({name}) => {
    return (
        <tr>
            <td>{name}</td>
        </tr>
    )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' },
        { name: 'Joku Toinen'}
      ],
      newName: ''
    }
  }

  addPerson = (event) => {
        event.preventDefault()
        console.log('nappi painettu')
        const personObject = {
            name: this.state.newName
        }

        //add new object to array with concat (state should not be manipulated directly)
        const persons = this.state.persons.concat(personObject)

        //replace the old persons array with the updated version.
        this.setState({
            persons: persons,
            newName: ''
        })
  }

  handleNameChange = (event) => {
      console.log(event.target.value)
      this.setState({ newName: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi: 
            <input 
                value={this.state.newName}
                onChange={this.handleNameChange}
            />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        
        <Persons persons={this.state.persons} />

      </div>
    )
  }
}

export default App