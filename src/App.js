import Header from "./components/Header"
import {useState} from 'react';
import Customers from "./components/Customers";
import AddEditCustomer from "./components/AddEditCustomer";


function App() {

  const saveCustomer =(customer) => {
    console.log('add customer')
    let customerId = customer.customerId
    let saveCustomer = customer
    if(!customerId) {
      customerId = Math.random()
      saveCustomer = {customerId, ...customer} 
    }
    setCustomers([...customers, saveCustomer])

  }


  const deleteCustomer = (customerId) => {
    console.log('delete customer ' + customerId)
    setCustomers(customers.filter((customer)=> customer.customerId !== customerId))
  }
  const [showAddEditCustomer, setShowAddEditCustomer] = useState(false)

  const [customers, setCustomers] = useState(
    [
      {
      "customerId": 1,
      "customerName": "Suneel",
      "location": "Hyderabad"
      },
      {
        "customerId": 2,
        "customerName": "Kumar",
        "location": "Bangalore"
        },
        {
          "customerId": 3,
          "customerName": "Suresh",
          "location": "Chenai"
          },
      ]
  )

  return (
    <div className="container">
      <Header title = 'Customer Information' onAdd={()=> setShowAddEditCustomer(!showAddEditCustomer)} showAdd={showAddEditCustomer}/>
      {showAddEditCustomer && <AddEditCustomer onAdd= {saveCustomer}/>}
      {customers.length > 0 ? <Customers customers={customers} onEdit={()=> setShowAddEditCustomer(!showAddEditCustomer)} showEdit={showAddEditCustomer} onSaveCustmer={saveCustomer} onDelete={deleteCustomer}/> :
      'No Customers Shwo'}
    </div>
  )
}

export default App;
