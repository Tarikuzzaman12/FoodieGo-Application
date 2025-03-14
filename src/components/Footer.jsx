import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className=" pt-10 bg-white text-black font-medium ">
          <h2 className="text-2xl text-black font-bold text-center">Payment </h2>
          <div className="grid lg:grid-cols-3 gap-6 items-center w-2/12 mx-auto ">
            <img className="w-16  " src="https://i.ibb.co.com/TpKZw19/Bkash-Logo-500x281.png"></img>
         <img className="w-16 "  src="https://i.ibb.co.com/XxwVHnXR/vectorseek-com-Nagad-Logo-Vector-300x131.png"></img>
         <img className="w-16 " src="https://i.ibb.co.com/q3nJjmf1/Rocket-ddbl.png"></img>
          </div>
          <section className="grid lg:grid-cols-2   ">
            <div className="flex flex-col mx-auto text-center w-7/12 ">
            <h2 className="text-2xl text-black font-bold text-center">Download App FoodieGo</h2>
              <p>Its all at your fingertips  
                the restaurants and shops you love. 
                Find the right food and groceries to 
                suit your mood,
                 and make the first bite last.
                  Go ahead, download us.</p>
            </div>
            <div className="flex mx-auto ">
              <div>
              <img className="w-16 " src="https://i.ibb.co.com/GvcGk5c7/google-play-logo.png"></img>
              <h4 className="text-xl font-bold">google play</h4>
              
              </div>
              <div className="ml-4">
              <img className="w-16 border p-1 " src="https://i.ibb.co.com/hF9wgcWj/Example-Code.png">
              
              </img>
              <h4 className="text-xl mt-1 font-bold">scan me</h4>
              </div>
            </div>
         
          </section>
          <aside className="text-center">
            <hr className="w-5/12 mx-auto mt-10 "></hr>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by FoodieGo</p>
          </aside>
        </footer>
        </div>
    );
};

export default Footer;