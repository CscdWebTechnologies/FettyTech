import React from 'react'
import "./blueline.css";

const BlueLine = () => {
    return (
        <div className='bluebox'>
            <div className='quarterly-volume'>
                <h2 className="fig">$335B</h2>
                <div><p className="info">Quarterly volume traded</p></div>
            </div>

            <div className='countries-support'>
                <h2 className="fig">100+</h2>
                <div><p className="info">Countries Supported</p></div>
            </div>
            
            <div className='verified-users'>
                <h2 className="fig">56+M</h2>
                <div><p className="info">Verified Users</p></div>
            </div>
            
        </div>
    )
}

export default BlueLine;
