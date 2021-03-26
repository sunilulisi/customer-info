import {useState} from 'react'
const AddCustomer=({onAdd})=> {
    const [customerName, setCustomerName] = useState('')
    //const [customerId, setCustomerId] = useState()
    const [location, setLocation] = useState('')

    
    const onSubmit = (e) => {
        e.preventDefault()
        if(!customerName) {
            alert('Customer Name is Required')
            return
        }
        onAdd({customerName, location})
        setCustomerName('')
        setLocation('')
    }
    
    return(
        <form className = 'add-form' onSubmit= {onSubmit}>
        <div className='form-control'>
            <label>Customer Name</label>
            <input type='text' placeholder='Add Customer' value={customerName} onChange={(e)=> setCustomerName(e.target.value)}></input>
        </div>
        <div className='form-control'>
            <label>Location</label>
            <input type='text' placeholder='Location'value={location} onChange={(e)=> setLocation(e.target.value)}></input>
        </div>
    
        <input type='submit' value='Add Customer' className='btn btn-block'/>
    </form>
    )

}
export default AddCustomer