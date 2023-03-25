import React, {useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    const [budget2, setBudget] = useState({budget});
        return (
        <div className='alert alert-secondary'>
           
           Budget: £

            <input
                required='required'
                type='number'
                id='Budget'
                value={budget}
                step={10}
                min = {50}
                max = {20500}
                style={{ marginLeft: '2rem', size: 10 }}
                onChange={(event) => setBudget(event.target.value)}
               // onChange={(event) => handlecheckValue(event.target.value)}
                > 
            </input>


        </div>
    );
};
// onChange={(event) => setBudget(event.target.value)}
          //<span>Budget: £{budget}</span> 
export default Budget;
