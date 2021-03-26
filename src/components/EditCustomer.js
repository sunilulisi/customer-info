import {useEffect, useState} from 'react'
const EditCustomer=({currentCustomerId, updateCustomer, fetchCustomer})=> {

    const [currentcustomer, setCurrentCustomer] = useState({
        id: '',
        customerName:'',
        location: ''
    })

    useEffect( () => {
        fetchCustomer(currentCustomerId).then((customer)=> {
            let customerData = {
                id: customer.id,
                customerName: customer.customerName,
                location: customer.location
            };
            setCurrentCustomer(customerData)
        })
    
     }, [currentCustomerId]);
    
    const onSubmit = (e) => {
        e.preventDefault()
        if(!currentcustomer.customerName) {
            alert('Customer Name is Required')
            return
        }
        updateCustomer(currentcustomer)
    }
    const handleInputChange = event => {
        const { name, value } = event.target
    
        setCurrentCustomer({ ...currentcustomer, [name]: value })
      }
    return(
        <form className = 'add-form' onSubmit= {onSubmit}>
        <div className='form-control'>
            <label>Customer Name</label>
            <input type='text' placeholder='Add Customer' name = 'customerName' value={currentcustomer.customerName} onChange={handleInputChange}></input>
        </div>
        <div className='form-control'>
            <label>Location</label>
            <input type='text' placeholder='Location' name='location' value={currentcustomer.location} onChange={handleInputChange}></input>
        </div>
    
        <input type='submit' value='Update Customer' className='btn btn-block'/>
    </form>
    )

}
export default EditCustomer