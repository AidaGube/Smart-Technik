import React from 'react'
import UrOrder from './UrOrder'

import "./card.css"
import Receiving from '../Receiving/Receiving'

const card = () => {
    return (
        <div className='card'>
            <UrOrder />
            <Receiving />
        </div>
    )
}

export default card