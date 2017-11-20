import React from 'react';
import { Table, Button } from 'react-materialize';
import {deleteItem} from '../action';
import {connect} from 'react-redux';

const styles = {
  footer: {
    fontWeight: 'bold'
  },
  button:{
    marginLeft: 50,    
  }
}


const Inventary = (props) => {
  return (
    <Table className="striped">
      <h1>Inventory</h1>
      <tbody>
        {props.cart.map(item =>
          <tr key={item.id}>
            <td>{item.name}</td>
            <td className="text-right">RU{item.price}</td>
            
            <td className="text-right"  ><Button  onClick={() => props.deleteItem(item)}>Delete</Button></td>
          </tr>
        )}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="1" style={styles.footer}>
            Total Price: #RU {props.cart.reduce((sum, item) => sum + item.price, 0)}
          </td>
          <td colSpan="2" style={styles.footer}>
            Total Item: {props.cart.reduce((sum, item) => sum + 1, 0)}
          </td>
          <td colSpan="2" style={styles.footer}>
            Max Item in bag: {props.cart.reduce((sum, item) => sum-1, 5)}
          </td>
          <td colSpan="2" style={styles.footer}>
            Your RU: {props.cart.reduce((sum, item) => sum - item.price, 20000)}
          </td>
        </tr>
      </tfoot>
    </Table>
  )
  
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteItem(item) {
      dispatch(deleteItem(item));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Inventary);
