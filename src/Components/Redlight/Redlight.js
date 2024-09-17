import React, { useContext } from 'react'

import './Redlight.css'
import { store } from '../Trafficlight/Trafficlight'


const Redlight = () => {
    const [data, setdata] = useContext(store)
    return (
        <div>
            <div className='Redlight-container'>

            </div>
            {data}
        </div>
    )
}

export default Redlight