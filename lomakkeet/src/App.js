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

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form>
          <div>
            nimi: <input />
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