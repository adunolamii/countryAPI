import React from 'react'
import data from '../rest-countries-api-with-color-theme-switcher-master/data.json'
import './Country.css'

function Country() {
  return (
    <div>
      <div className='container'>

      

        {console.log(data)}

        <div className='divContainer'>
            
        {
            data.map((data)=>{
                return <div>

                <div className='container'>

                     <h4>{data.name}</h4>
                    <img src={data.flags.svg} width={"100px"} />
                    <h1>{data.area}</h1>
                    <p>{data.capital}</p> 

                    </div>

                </div>
            })
        }
        </div>

        </div>
    </div>
  )
}

export default Country