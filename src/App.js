import Header from "./components/Header"
import {useState, useEffect} from 'react';
import Customers from "./components/Customers";
import AddCustomer from "./components/AddCustomer";
import EditCustomer from "./components/EditCustomer";


function App() {


  useEffect(() => {
    const getCustomers = async()=> {
      const data = await fetchCustomers()
      setCustomers(data)
    }
    getCustomers()

  }, [])

  const fetchCustomers = async()=> {
    const res = await fetch('http://localhost:5001/customers')
    const data = await res.json()
    return data
  }

  const fetchCustomer = async(id)=> {
    const res = await fetch(`http://localhost:5001/customers/${id}`)
    const data = await res.json()
    return data
  }

  const deleteCustomer =async(id)=> {
    await fetch(`http://localhost:5001/customers/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    setCustomers(customers.filter((customer)=> customer.id !== id))
  }

  const addCustomer = async(customer) => {
    const resp = await fetch('http://localhost:5001/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customer)
    })
    const data = await resp.json()
    setCustomers([...customers, data])

  }
  const updateCustomer = async(updatedCustomer) => {
    const resp = await fetch(`http://localhost:5001/customers/${updatedCustomer.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCustomer)

    })
    const data = await resp.json()
    setCustomers(customers.map((customer)=> customer.id === updatedCustomer.id ?
    {...customer, customerName: data.customerName, location: data.location}: customer))
    
  }
  const [showAddCustomer, setShowAddCustomer] = useState(false)
  const [showEditCustomer, setShowEditCustomer] = useState(false)
  const [currentCustomerId, setCurrentCustomerId] = useState('')

  const onAdd = () => {
    setShowAddCustomer(!showAddCustomer)
  }
  const showEdit = (currentCustomerId) => {
  
    setShowEditCustomer(true)
    setCurrentCustomerId(currentCustomerId)
  }

  const [customers, setCustomers] = useState(
    []
  )

  return (
    <div className="container">
      <Header title = 'Customer Information' onAdd={onAdd} showAdd={showAddCustomer}/>
      {showEditCustomer && <EditCustomer updateCustomer= {updateCustomer} currentCustomerId={currentCustomerId} fetchCustomer={fetchCustomer} />}
      {showAddCustomer && <AddCustomer onAdd= {addCustomer}/>}
      {customers.length > 0 ? <Customers customers={customers} showEdit={showEdit} onSaveCustmer={addCustomer} onDelete={deleteCustomer}/> :
      'No Customers Shwo'}
    </div>
  )
}

export default App;
