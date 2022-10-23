import { BsFacebook,BsInstagram,BsPinterest,BsSpotify, BsTwitter, BsYoutube} from 'react-icons/bs'

const Footer = () =>{
    return(
        <>
            <footer>
                <div className="footer">

                <ul>
                    <h3>About Us</h3>
                    <li><a href="/">Our Company</a></li>
                    <li><a href="/">Our Coffee</a></li>
                    <li><a href="/">Stories and News</a></li>
                    <li><a href="/">Starbucks Archive</a></li>
                    <li><a href="/">Investor Relations</a></li>
                    <li><a href="/">Customer Service</a></li>
                </ul>
                
                <ul>
                    <h3>Careers</h3>
                    <li><a href="/">Culture and Values</a></li>
                    <li><a href="/">Inclusion, Diversity, and Equity</a></li>
                    <li><a href="/">College Achievement Plan</a></li>
                    <li><a href="/">Alumni Community</a></li>
                    <li><a href="/">U.S. Careers</a></li>
                    <li><a href="/">International Careers</a></li>
                </ul>

                <ul>
                    <h3>Social Impact</h3>
                    <li><a href="/">People</a></li>
                    <li><a href="/">Planet</a></li>
                    <li><a href="/">Environmental and Social Impact Reporting</a></li>
                </ul>

                <ul>
                    <h3>For Business Partners</h3>
                    <li><a href="/">Landlord Support Center</a></li>
                    <li><a href="/">Suppliers</a></li>
                    <li><a href="/">Corporate Gift Card Sales</a></li>
                    <li><a href="/">Office and Foodservice Coffee</a></li>
                </ul>

                <ul>
                    <h3>Order and Pickup</h3>
                    <li><a href="/">Order on the App</a></li>
                    <li><a href="/">Order on the Web</a></li>
                    <li><a href="/">Delivery</a></li>
                    <li><a href="/">Order and Pickup Options</a></li>
                    <li><a href="/">Explore and Find Coffee for Home</a></li>
                </ul>
                </div>
                <div className="icons_container">
                    <div className="icons">
                        <BsSpotify/>
                        <BsFacebook/>
                        <BsPinterest/>
                        <BsInstagram/>
                        <BsYoutube/>
                        <BsTwitter/>
                    </div>
                </div>
                <div className="policy_links">
                    <ul>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Terms of Use</a></li>
                        <li><a href="/">CA Supply Chain Act</a></li>
                        <li><a href="/">Cookie Preferences</a></li>
                    </ul>

                    <p>©  2022 Starbucks Coffee Company. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;