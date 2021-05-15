import React from 'react';
import './earning.css';
import skale from './assets/images/skale.svg';
import token from './assets/images/token.svg';
import graph from './assets/images/graph.svg';
import steller from './assets/images/steller.svg';



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
            <div className="right-side"> 
                <div className="earn">
                        <div className="col-3">
                            <img src={skale}/>
                            <h2 class="TextElement__Spacer1">SKALE</h2>
                            <h3 class="TextSpacer2">SKL</h3>
                        </div>
                        <div class="CampaignRow">Earn $3 SKL</div>
                </div> 

                <div className="earn">
                        <div className="col-3">
                            <img src={token}/>
                            <h2 class="TextElement__Spacer1">Ampleforth<br/>Goveernance Token</h2>
                        
                        </div>
                        <div class="CampaignRow">Earn $3 FORTH</div>
                </div> 

                <div className="earn">
                        <div className="col-3">
                            <img src={graph}/>
                            <h2 class="TextElement__Spacer1">The Graph</h2>
                            <h3 class="TextSpacer2">GRT</h3>
                        </div>
                        <div class="CampaignRow">Earn $3 GRT</div>
                </div> 

                <div className="earn">
                        <div className="col-3">
                            <img src={steller}/>
                            <h2 class="TextElement__Spacer1">Steller Lumens</h2>
                            <h3 class="TextSpacer2">XLM</h3>
                        </div>
                        <div class="CampaignRow">Earn $10 XLM</div>
                </div> 
            </div>
            
        </div>
    )
}

export default Earning;
