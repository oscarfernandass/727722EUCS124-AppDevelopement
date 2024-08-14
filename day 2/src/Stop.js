
import React, { useState, useEffect } from 'react';

function Stop() {
    const [s, ss] = useState(0);
    const [ms, sms] = useState(0);
    const [m, sm] = useState(0);
    const [run, srun] = useState(false);

    useEffect(() => {
        let interval = null;
        if (run) {
            interval = setInterval(() => {
                sms((prevMs) => {
                    if (prevMs === 999) {
                        ss((prevS) => {
                            if (prevS === 59) {
                                sm((prevM) => prevM + 1);
                                return 0;
                            }
                            return prevS + 1;
                        });
                        return 0;
                    }
                    return prevMs + 1;
                });
            }, 1);
        } else if (!run && interval) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [run]);

    return (
        <div style={{ height: '100vh', width: '100vw', color: 'red', backgroundColor: 'black' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4%', width: '50vw', marginLeft: '320px', paddingTop: '250px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2%' }}>
                    <h1>{m}:{s}:{ms}</h1>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2%' }}>
                    <button onClick={() => { srun(true); console.log(`${m}:${s}:${ms}`) }}>Start</button>
                    <button onClick={() => { srun(false); console.log(`${m}:${s}:${ms}`) }}>Stop</button>
                    <button onClick={() => { ss(0); sms(0); sm(0); srun(false) }}>Reset</button>
                </div>
            </div>

        </div>
    );
}

export default Stop;

