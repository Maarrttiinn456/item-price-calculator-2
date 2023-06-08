import {useState} from 'react'


const Form = ({conncetToItemDatabase}) => {

    //Form
    const [formItem,setFormItem] = useState('')
    const [price,setPrice] = useState(null)
    
    
    const submitForm = (e) => {
        e.preventDefault()
        const myItem = {
            name: formItem,
            counter: 1,
            price: parseInt(price),
            totalPrice: parseInt(price),
        }
        conncetToItemDatabase.add(myItem)
    }

    return <div className='row'>
        <div className='col'>
            <input className='d-block w-75 m-auto text-center border-0 border-dark border-bottom mb-3' type="text" placeholder='položka' onChange={(e) => setFormItem(e.target.value)}/>
            <input className='d-block w-50 m-auto text-center border-0 border-dark border-bottom mb-3' type="number" placeholder='cena' onChange={(e) => setPrice(e.target.value)}/>
            <div className='text-center'>
                <input className='btn btn-sm btn-success text-center' type="submit" value='Přidat' onClick={submitForm}/>
            </div>
        </div>
    </div>
}

export default Form