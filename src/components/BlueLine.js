import React from 'react'
import "./blueline.css";

const BlueLine = () => {
    return (
        <div className='bluebox'>
            <div className='quarterly-volume'>
                <h2 className="fig">$335B</h2>
                <div><p className="infor">Quarterly volume traded</p></div>
            </div>

            <div className='countries-support'>
                <h2 className="fig">100+</h2>
                <div><p className="infor">Countries Supported</p></div>
            </div>
            
            <div className='verified-users'>
                <h2 className="fig">56+M</h2>
                <div><p className="infor">Verified Users</p></div>
            </div>
            
        </div>
    )
}

export default BlueLine;
