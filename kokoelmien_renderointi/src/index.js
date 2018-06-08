import React from 'react'
import ReactDOM from 'react-dom'


const Kurssit = (props) => {
    console.log("kurssit", props.kurssit)
    return (
        <div>
            {props.kurssit.map(kurssi=><Kurssi key={kurssi.id} kurssi={kurssi}/>)}
        </div>
    )
}

const Kurssi = ({kurssi}) => {
    console.log("kurssi", kurssi)
    console.log("osat", kurssi.osat)
    return (
        <div>
            <Otsikko kurssi={kurssi}/>
            <Sisalto osat={kurssi.osat}/>
            <Yhteensa osat={kurssi.osat}/>
        </div>
    )
}

const Otsikko = (props) => {
    return (
      <div>
        <h1>{props.kurssi.nimi}</h1>
      </div>
    )
  }

const Sisalto = (props) => {
    console.log("osat", props.osat)
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
    const kurssit = [
        {
          nimi: 'Half Stack -sovelluskehitys',
          id: 1,
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
        },
        {
          nimi: 'Node.js',
          id: 2,
          osat: [
            {
              nimi: 'Routing',
              tehtavia: 3,
              id: 1
            },
            {
              nimi: 'Middlewaret',
              tehtavia: 7,
              id: 2
            }
          ]
        }
      ]
  
    return (
      <div>
        <Kurssit kurssit={kurssit} />
      </div>
    )
  }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)