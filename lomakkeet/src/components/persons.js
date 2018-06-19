import React from 'react';

const Persons = (props) => {
    return (
        <div>
            <table>
                <tbody> 
                    {props.persons.map((person, index) => 
                    <Person key={person.name} 
                    name={person.name} 
                    number={person.number}
                    id={person.id}
                    deleteAction={props.deleteAction}
                    />)}
                </tbody>
            </table>
        </div>
    )
}

const Person = ({name, number, id, deleteAction}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{number}</td>
            <td><button onClick={deleteAction(id)}>poista</button></td>
        </tr>
    )
}

export default Persons