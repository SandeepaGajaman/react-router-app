import React, {useState} from 'react';
import Checker from './checker';

const Counter = () => {
    const [showCounter, setShowCounter] = useState(false);
    console.log(showCounter);
    return(
        <div>
            <h1>Counter</h1>
            <button onClick={() => setShowCounter(!showCounter)}>
                {showCounter ? 'Hide Counter' : 'Show Counter'}
            </button>
            {showCounter && <Checker/>}
        </div>
    );
}

export default Counter;