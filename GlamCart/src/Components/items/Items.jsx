
import React from 'react';
import PropTypes from 'prop-types';
import "./item.css";
import { Link } from 'react-router-dom';

function Items(props) {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img src={props.image} alt='' /></Link>
      <p>{props.name}</p>
      <div className='item-prices'>
        <div className='item-price-new'>{props.new_price}</div>
        <div className='item-price-old'>{props.old_price}</div>
      </div>
    </div>
  );
}

// Prop Types Validation
Items.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  new_price: PropTypes.number.isRequired,
  old_price: PropTypes.number.isRequired,
};

export default Items;

