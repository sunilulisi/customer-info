import {FaTimes, FaPencilAlt} from 'react-icons/fa' 

const Customer=({customer, onEdit, showEdit, onSaveCustmer, onDelete})=> {
    return(
        <div className='customer'>
             
            <h3>{customer.customerName}
            <FaPencilAlt style={{color: 'blue', cursor:'pointer', marginLeft:'280'}} onClick={() =>showEdit(customer.customerId)}/> 
            <FaTimes style={{color: 'red', cursor:'pointer'}} onClick={() =>onDelete(customer.customerId)}/></h3>
            <p>{customer.location}</p>
            
        </div> 
    )
}
export default Customer