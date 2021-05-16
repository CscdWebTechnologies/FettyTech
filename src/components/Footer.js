import React from 'react';
import './footer.css';
import logo from './assets/images/Consumer_Wordmark.svg';
const Footer = () => {
    return (
        <div>
            <footer className="footer">

<div className="main-container">
    <div className="container-1">
        <div>
          
            <img className="footer-coinbase" src={logo} alt="coinbase-logo" />
            <select className="language-selector">
                <option value="de">Deutsch</option>
                <option selected="" value="en">English</option>
                <option value="es">Español - España</option>
                <option value="es-LA">Español - América Latina</option>
                <option value="fr">Français - France</option>
                <option value="id">Bahasa Indonesia</option>
                <option value="it">Italiano</option>
                <option value="ko">한국어</option>
                <option value="pl">Polski</option>
                <option value="pt">Português - Brasil</option>
                <option value="pt-PT">Português - Portugal</option>
                <option value="ru">Pусский</option>
                <option value="th">ไทย</option>
                <option value="tr">Türkçe</option>
            </select>
            <div className="copyright-container">
                <div className="footer-elements coinbase-copyright">© 2021 Coinbase</div>
                <a className="elements" href="$">Blog</a>
                <span>•</span>
                <a className="elements" href="$">Twitter</a>
                <span>•</span>
                <a className="elements" href="$">Facebook</a>
            </div>
        </div>

    </div>
    <div className="container-2">
        <div className="box-1">
            <div className="sub-box-1 company-container">
                <h2 className="footer-h2 company-footer">Company</h2>
                <a className="footer-elements" href="$">About</a>
                <a className="footer-elements" href="$">Careers</a>
                <a className="footer-elements" href="$">Affiliates</a>
                <a className="footer-elements" href="$">Blog</a>
                <a className="footer-elements" href="$">Press</a>
                <a className="footer-elements" href="$">Investors</a>
                <a className="footer-elements" href="$">Legal & privacy</a>
                <a className="footer-elements" href="$">Cookie policy</a>
            </div>
            <div className="sub-box-1 learn-footer">
                <h2 className="footer-h2 learn-footer">Learn</h2>
                <a className="footer-elements" href="$">Browse crypto prices</a>
                <a className="footer-elements" href="$">Crypto basics</a>
                <a className="footer-elements" href="$">Tips & tutorials</a>
                <a className="footer-elements" href="$">Market updates</a>
                <a className="footer-elements" href="$">What is Bitcoin?</a>
                <a className="footer-elements" href="$">What is crypto?</a>
                <a className="footer-elements" href="$">What is a blockchain?</a>
                <a className="footer-elements" href="$">How to set up a crypto wallet</a>
                <a className="footer-elements" href="$">Taxes</a>

            </div>
        </div>
        <div className="box-2">

            <div className="sub-box-1 individual-container">
                <h2 className="footer-h2 individual-footer">Individual</h2>
                <a className="footer-elements" href="$">Buy & Sell</a>
                <a className="footer-elements" href="$">Earn free crypto</a>
                <a className="footer-elements" href="$">Wallet</a>
                <a className="footer-elements" href="$">Card</a>

            </div>



            <div className="sub-box-1 businesses-container">
                <h2 className="footer-h2 businesses-footer">Businesses</h2>
                <a className="footer-elements" href="$">Prime</a>
                <a className="footer-elements" href="$">Custody</a>
                <a className="footer-elements" href="$">Asset Hub</a>
                <a className="footer-elements" href="$">Commerce</a>
            </div>
            <div className="sub-box-1 developers-container">
                <h2 className="footer-h2 developers-footer">Developers</h2>
                <a className="footer-elements" href="$">Coinbase Cloud</a>
                <a className="footer-elements" href="$">Connect</a>
                <a className="footer-elements" href="$">Commerce</a>
                <a className="footer-elements" href="$">Pro</a>
                <a className="footer-elements" href="$">Bison Trails</a>
                <a className="footer-elements" href="$">WalletLink</a>
                <a className="footer-elements" href="$">Rosetta</a>
                <a className="footer-elements" href="$">USDC</a>
            </div>
        </div>
        <div className="box-3">
            <div className="sub-box-1 support-container">
                <h2 className="footer-h2 support-footer">Support</h2>
                <a className="footer-elements" href="$">Help center</a>
                <a className="footer-elements" href="$">Connect us</a>
                <a className="footer-elements" href="$">Create account</a>
                <a className="footer-elements" href="$">ID verification</a>
                <a className="footer-elements" href="$">Account information</a>
                <a className="footer-elements" href="$">Payment methods</a>
                <a className="footer-elements" href="$">Account access</a>
                <a className="footer-elements" href="$">Supported countries</a>
                <a className="footer-elements" href="$">Status</a>
            </div>
        </div>
    </div>
</div>

</footer>
        </div>
    )
}

export default Footer
