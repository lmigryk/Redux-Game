import React, { Component } from 'react';
import { Table, Button } from 'react-materialize';
import store from '../store';
const styles = {
  footer: {
    fontWeight: 'bold'
  }
}


class Inventary extends Component {
  constructor() {
    super();
    this.deleteItem = this.deleteItem.bind(this);

    this.state = {
      cart: []
    }

    store.subscribe(() => {
      this.setState({
        cart: store.getState().cart
      });
    });
  }

  render() {
    return (
     
        <Table className="striped">
          <h1>Inventary</h1>
          <tbody>
            {this.state.cart.map(item =>
              <tr key={item.id}>
                <td>{item.name}</td>
                <td className="text-right">RU{item.price}</td>
                <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => this.deleteItem(item)}>Delete</Button></td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={styles.footer}>
                Total Price: #RU {this.state.cart.reduce((sum, item) => sum + item.price, 0)}
              </td>
              <td colSpan="4" style={styles.footer}>
                Total Item: {this.state.cart.reduce((sum, item) => sum + 1, 0)}
              </td>
            </tr>
          </tfoot>
        </Table>

      
    )
  }

  deleteItem(item) {
    store.dispatch({
      type: "DELETE_TO_INVENTARY",
      item
    })
  }
}

export default Inventary;
