import React, {UseState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { Currency } = useContext(AppContext);
    const [Currency, setCurrency] = useState('Currency ('+'$ Dollar'+')');
        return (
        <div className='alert alert-secondary'>
           
                <select className="custom-select" id="currencySelection" onChange={(event) => setCurrency(event.target.value)}>
                  
                    <option value="$" name="Dollar">$ Dollar</option>
                    <option value="£" name="Pound">£ Pound</option>
                    <option value="€‎" name="Euro"> € Euro</option>
                    <option value="₹" name="Rupee"> ₹ Rupee</option>
                   
                </select>


        </div>
    );
};
// onChange={(event) => setBudget(event.target.value)}
          //<span>Budget: £{budget}</span> 
export default Currency;
