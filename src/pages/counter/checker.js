import React, {useState, useEffect} from 'react';

const Checker = () => {
    const [check, setCheck] = useState(0);
    console.log(check);

    useEffect(() => {
        check && console.log('Checker Mounted - useEffect');
        return () => {
            check && console.log('Checker Unmounted - useEffect');
        }
    }, [check]);

    return(
        <div>
            <p>{check} items are checked</p>
            <button onClick={() => setCheck(check+1)}>Check</button>
        </div>
    );
}

export default Checker;