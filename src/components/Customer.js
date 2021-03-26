
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
    root: {
      color: theme.palette.text.primary,
    },
  }));
const Customer=({customer, showEdit, onDelete})=> {
    
      const classes = useStyles();
    return(
        <div className='customer'>
        <Grid container className={classes.root}>
             <Grid item xs={10}>
                <h3>{customer.customerName} </h3>
              </Grid>
              <Grid item xs={2}>
                <EditIcon style={{color: 'blue'}} onClick={() =>showEdit(customer.id)}/> 
                <DeleteIcon style={{color: 'red'}} onClick={() =>onDelete(customer.id)}/>
              </Grid>
            <p>{customer.location}</p>
            
        </Grid> 
        </div>
    )
}
export default Customer