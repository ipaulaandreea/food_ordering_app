import { Fragment } from 'react';
import AvailableMeals from './AvailableMeals/AvailableMeals'
import MealsSummary from './MealsSummary/MealsSummary';

const Meals = (props)=>{
    return (
        <Fragment>
            <MealsSummary/>
            <AvailableMeals items={props.items}/>
        </Fragment>
    )
}

export default Meals;