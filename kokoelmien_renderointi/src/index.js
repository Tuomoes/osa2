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
        </div>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <ul>
                {props.osat.map(osa=><Osa key={osa.id} nimi={osa.nimi} tehtavia={osa.tehtavia}/>)}
            </ul>
        </div>
    )
}

const Osa = ({nimi, tehtavia}) => {
    return (
      <div>
        <p>{nimi} {tehtavia}</p>
      </div>
    )
  }

const Yhteensa = (props) => {
    return (
      <div>
        <p>yhteensä {props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia}</p>
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