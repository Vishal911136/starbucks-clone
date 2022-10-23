
const Banner = () =>{
    return(
        <>
            <div className="banner_container">
                <div className="banner_img">
                    <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81151.jpg" alt="" />
                </div>
                <div className="banner_text">
                    <h1>Win a thousand stars</h1>
                    <p>We’re giving away 1,000 Stars to 1,000 Starbucks® Rewards members in our Million Stars Giveaway and much more all week!*</p>
                    <button>Play to win</button>
                </div>
            </div>


            <div className="banner_container">
                <div className="banner_text2">
                    <h2>A new way to earn sips and trips</h2>

                    <p>Now you can link your Starbucks® Rewards + Delta SkyMiles® accounts to get:</p>
                    <div className="banner2_list">
                        <ul>
                            <li>150 Stars + 500 miles when you link before 12/31</li>
                            <li>Double Stars on Delta travel days</li>
                            <li>1 mile per $1 spent at Starbucks (excludes taxes and gratuities)**</li>
                        </ul>
                    </div>
                    <button>Link accounts</button>
                </div>
                <div className="banner_img">
                    <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81104.jpg" alt="" />
                </div>
            </div>


            <div className="d_grid banner3">
                <div className="img">
                    <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81152.jpg" alt="" />
                </div>
                <div className="banner_text3">
                    <h2>Perfectly pumpkin</h2>
                    <p>Savor the season with a Pumpkin Spice Latte or Pumpkin Cream Cold Brew.</p>
                    <button>Order now</button>
                </div>
            </div>


            <div className="d_grid banner3">
                <div className="banner_text3 order2">
                    <h2>Layers of baked apple yum</h2>
                    <p>Try the Apple Crisp Oatmilk Macchiato, now nondairy and with Starbucks® Blonde Espresso.</p>
                    <button> Learn more</button>
                </div>

                <div className="img order">
                    <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-79282.jpg" alt="" />
                </div>
            </div>
        </>
    )
}

export default Banner;