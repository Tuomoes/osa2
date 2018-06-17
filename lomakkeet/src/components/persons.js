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

export default Persons