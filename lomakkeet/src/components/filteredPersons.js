import React from 'react'
import Persons from './persons'

const FilteredPersons = (props) => 
{
  return ( 
    <Persons persons={props.persons.filter((person) => person.name.toLocaleLowerCase().match(props.filter.toLocaleLowerCase()))}/>
  )
}

export default FilteredPersons