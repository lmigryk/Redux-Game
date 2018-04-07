import React, { Component } from 'react';
import { Button} from 'react-materialize';
import store from '../reducer'; 
import { addToInventary } from '../action';

const styles = {
  items: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  item: {
    width: '200px',
    height: '200px',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 30 
   
  },

  image:{
  width: '200px',
  height: '150px'
  },
  button:{
    marginLeft: 50,
  }
};

class ItemList extends Component {
  constructor() {
    super();
    this.addToInventary = this.addToInventary.bind(this);

    this.state = {
      items: [
        { id: 1, name: "Mana Potion", price: 79, image:"índice.jpg" },
        { id: 2, name: "Health Potion", price: 99, image: "verde.jpg" },
        { id: 3, name: "Energy Potion", price: 99, image: "amarilla.jpg" },
        { id: 4, name: "Helmet of Leonidas", price: 1000, image: "casco1.jpg" },
        { id: 5, name: "Helmet of Atenea", price: 850, image: "casco2.jpg" },
        { id: 6, name: "Helmet of Pitufino", price: 1050, image: "casco3.jpg" },
        { id: 7, name: "Bladex", price: 5000, image: "espada1.jpeg" },
        { id: 8, name: "Snow", price: 2222, image: "espada2.jpeg" },
        { id: 9, name: "Winter", price: 9900, image: "espada3.jpeg" },
      ]
    }
  }

  render() {
    return (
      <div style={styles.items}>
        {this.state.items.map(item =>
          <div className="thumbnail" style={styles.item} key={item.id}>
            <img src={item.image} alt={item.name} style={styles.image}/>
            <div className="caption">
              <h4>{item.name}</h4>
              <p>
                <Button style={styles.button} type="submit" onClick={() => this.addToInventary(item)} role="button" >RU{item.price}</Button>
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  addToInventary(item) {
    store.dispatch(addToInventary(item))
  }
}

export default ItemList;

