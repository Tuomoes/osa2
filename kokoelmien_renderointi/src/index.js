import React from 'react'
import ReactDOM from 'react-dom'
const Otsikko = (props) => {
    return (
      <div>
        <h1>{props.kurssi.nimi}</h1>
      </div>
    )
  }

const Kurssi = (props) => {
    return (
        <div>
            <Otsikko kurssi={props.kurssi}/>
            <Sisalto osat={props.kurssi.osat}/>
            <Yhteensa osat={props.kurssi.osat}/>
        </div>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            {props.osat.map(osa=><Osa key={osa.id} nimi={osa.nimi} tehtavia={osa.tehtavia}/>)}
        </div>
    )
}

const Osa = ({nimi, tehtavia}) => {
    return (      
        <p>{nimi} {tehtavia}</p>
    )
  }

const Yhteensa = (props) => {
    return (
      <div>
        <p>
            yhteensä {props.osat.reduce(function(sum, osa) {
                    return sum + osa.tehtavia
                }, 0)
            }
        </p>
      </div>
    )
  }


  const App = () => {
    const kurssi = {
      nimi: 'Half Stack -sovelluskehitys',
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10,
          id: 1
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7,
          id: 2
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14,
          id: 3
        },
        {
            nimi: 'Redux',
            tehtavia: 7,
            id: 4
        }
      ]
    }
  
    return (
      <div>
        <Kurssi kurssi={kurssi} />
      </div>
    )
  }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)