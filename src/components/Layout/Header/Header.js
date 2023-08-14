import React, { Fragment } from 'react'
import classes from './Header.module.css'
import mealsImage from './meals.avif'
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';

const Header = props => {
  return (
    <React.Fragment>
      <header className={classes['header']}>
        <h1>BestBistro</h1>
        <HeaderCartButton onClick={props.onDisplayCart}></HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="a nice table full of food" />
      </div>
    </React.Fragment>
  )
}

export default Header
