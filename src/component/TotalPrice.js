import React from 'react'

const TotalPrice = ({totalPrice}) => {
    return (
        <div className='bg-danger text-white text-center display-4 mt-5'>{totalPrice.reduce((sum,a) => sum + a ,0)}</div>
    )
}

export default TotalPrice