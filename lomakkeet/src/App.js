import React from 'react'
import FilteredPersons from './components/filteredPersons'
import personsService from './services/persons'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { id: '1', name: 'Arto Hellas', number: '123-456 321' },
        { id: '2', name: 'Joku Toinen', number: '4531244 02' }
      ],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  componentDidMount() {
    console.log('successfully mounted')
    personsService.getAll().then(response => 
    { 
      console.log('promise fulfilled')
      this.setState({ persons: response.data});
    })
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
        }) !== -1) { 
          //ask if user want's to replace the old record
          const question = personObject.name + ' on jo luettelossa, korvataanko numero uudella?'
           if (window.confirm(question)) {
              const originalPerson = this.state.persons.find(person => person.name === personObject.name)
              const editedPerson = {...originalPerson, number: personObject.number}

              personsService.modifyObj(editedPerson).then(response => {
                console.log(response)
                const personsEdited = this.state.persons.map(person => person.id !== editedPerson.id ? person : response.data)
                
                this.setState({
                  persons: personsEdited,
                  newName: '',
                  newNumber: ''
                })
              })
           } 
        } 
        else {
            //add new object to array with concat (state should not be manipulated directly)
            
             //add new object to server
             personsService.createObj(personObject)
              .then(response => {
                console.log(response)
                const persons = this.state.persons.concat(response.data)

                this.setState({
                  persons: persons,
                  newName: '',
                  newNumber: ''
                })
              })


        }
  }

  deletePerson = (id) => {
      return () => {
        const personName = this.state.persons.find(person => person.id === id).name
        if (window.confirm('poistetaanko ' + personName + '?')) {
          personsService.deleteObj(id).then(
            response => {
              console.log(response)
            }
          )
  
          const persons = this.state.persons.filter(person => {return person.id !== id})
          this.setState({ persons: persons});
        }
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
        
        <FilteredPersons persons={this.state.persons} filter={this.state.filter} deleteAction={this.deletePerson}/>

      </div>
    )
  }
}

export default App