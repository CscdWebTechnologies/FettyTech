import React from 'react';
import './earning.css';
import skale from './assets/images/skale.svg';

function Earning() {
    return (
        <div className="row-2">
            <div className="col-2">
                <div>
                    <h2>Earn up to $28 worth<br/> of crypto</h2>
                    <p className="discover">Discover how specific cryptocurrencies work — and<br/> get a bit of each crypto to try out for yourself</p>
                    <button className="start-earning">Start earning</button>
                </div>
            </div> 
            <div className="earn">
                <div className="col-3">
                    <section><img src={skale}/>SKALE SKL</section>
                </div>
            </div> 
        </div>
    )
}

export default Earning;
