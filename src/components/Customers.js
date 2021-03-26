import Customer from "./Customer"

const Customers =({customers, onEdit, showEdit, onSaveCustmer,  onDelete})=>{
    return(
        <>
        {customers.map((customer)=> 
           <Customer key={customer.id} customer = {customer} onEdit={onEdit} showEdit={showEdit} onSaveCustmer= {onSaveCustmer} onDelete= {onDelete}/> 
        )}  
        </> 
    )

}
export default Customers