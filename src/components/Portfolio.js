import React,{useState} from 'react'
import ReactDOM from 'react-dom';
import './portfolio.css';
import logo from './assets/images/phone.png';
import blue from './assets/images/blueBTC.png'
// get our fontawesome imports
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function portfolio() {
    return (
        <div className="row">
           <div className="col-1">
                <a href="" class="btn "><FontAwesomeIcon icon={faBitcoin}/> Jump start your portfolio &#8594;</a>
                <h1>Jump start<br></br> your crypto<br></br>portfolio</h1>
                <div>
                    <p>Coinbase is the easiest place to buy and sell <br>
                    </br>cryptocurrency. Sign up and get started today.</p> 
                </div>
                <div>
                    <form className="address">
                        <input placeholder="Email address" name="email" />
                        <button className="startButton" type="button">Get Started</button>
                    </form>
                </div>
                <a class="terms-apply" href="https://www.coinbase.com/legal/user_agreement#general-use-prohibited-use-death-of-account-holder-and-termination"  title="Terms of Service">* Terms apply</a>
            </div>
            <div className="col-1">
            <img src={logo} alt="phone logo" width="450px" />
            </div>
        </div>
    );
}

export default portfolio;
