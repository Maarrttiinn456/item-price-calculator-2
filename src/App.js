import {useState,useEffect} from 'react';
import myDatabase from './firebase/config';

//components
import Form from './component/Form'
import Item from './component/Item'
import TotalPrice from './component/TotalPrice';

function App() {

  const [data,setData] = useState([])
  const [totalPrice,setTotalPrice] = useState([])
  const [error,setError] = useState(false)

  let conncetToItemDatabase = myDatabase.collection('item_Counter')

  
  useEffect(() => {
      const unsubscribe = conncetToItemDatabase.onSnapshot((doc) => {
          let result = []
          let totalPrice = []
          doc.docs.forEach((itemId) => {

          result.push({id:itemId.id, ...itemId.data()})
          
          totalPrice.push(itemId.data().totalPrice)
          
          setTotalPrice(totalPrice)
          setData(result)
          })
      },(error) => {
          setError(error.message)
      });
      return unsubscribe
  },[])

  return (
    <section className='App'>
      <div className='container-fluid'>
        <div className="container">
          <div className='p-3  min-vh-100'>
            <Form conncetToItemDatabase={conncetToItemDatabase}/>
            <Item data={data} conncetToItemDatabase={conncetToItemDatabase}/>
            <TotalPrice totalPrice={totalPrice}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
 