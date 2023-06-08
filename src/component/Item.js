import React from 'react'


const Item = ({data,conncetToItemDatabase}) => {

    const increment = (idecko) => {
        conncetToItemDatabase.doc(idecko).get().then((doc) => {
            let dataObject = doc.data()
            let counterUpdate = dataObject.counter += 1

            //počítám celkovou cenu pro daný item
            let price = dataObject.price 
            let totalPriceUpdate = price * counterUpdate

            conncetToItemDatabase.doc(idecko).update({
            counter:counterUpdate,
            totalPrice:totalPriceUpdate
            })
        })
    }

    const decrement = (idecko) => {
        conncetToItemDatabase.doc(idecko).get().then((doc) => {
            let dataObject = doc.data()
            let counterUpdate = dataObject.counter - 1

            //počítám celkovou cenu pro daný item
            let price = dataObject.price 
            let totalPriceUpdate = price * counterUpdate

            //pokud bude počet položek menší roven 0 tak položku smaž a přenačti stránku
            if(counterUpdate != 0)
            {
            conncetToItemDatabase.doc(idecko).update({
                counter:  counterUpdate,
                totalPrice:totalPriceUpdate
            })
            }
            else{
            conncetToItemDatabase.doc(idecko).delete().then(() => {
                window.location.reload()
            })
            }
        })
    }

    return <div className='row mt-5'>
        {data.map((oneItem) => {
        return(
            <div key={oneItem.id} className='col-6'>
                <div>
                    <h3>{oneItem.name}</h3>
                    <p>{oneItem.price}</p>
                    <p>{oneItem.counter}</p>
                    <button onClick={() => increment(oneItem.id)}>Plus</button>
                    <button onClick={() => decrement(oneItem.id)}>Minus</button>
                </div>
            </div>
        )
        })}
    </div>
}

export default Item