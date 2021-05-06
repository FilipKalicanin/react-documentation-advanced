import React from 'react'

function Car({carBrand}) {
    if(carBrand === 'Fiat') {
        throw new Error('Not a car')
    }
    return (
        <div>
            {carBrand}
        </div>
    )
}

export default Car