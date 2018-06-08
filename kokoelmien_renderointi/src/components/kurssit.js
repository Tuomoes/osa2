import React from 'react'

const Kurssit = (props) => {
    return (
        <div>
            {props.kurssit.map(kurssi=><Kurssi key={kurssi.id} kurssi={kurssi}/>)}
        </div>
    )
}

const Kurssi = ({kurssi}) => {
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

export default Kurssit