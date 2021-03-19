import Button from "./Button"

const Header = ({title, onAdd, showAdd})=> {
    return(
        <div className='header'>
        <h1>{title}</h1>
        <Button color ={showAdd ? 'red' : 'green'} text ={showAdd ? 'colse':'Add'} onClick={onAdd}/>
        </div>
    )
}
export default Header