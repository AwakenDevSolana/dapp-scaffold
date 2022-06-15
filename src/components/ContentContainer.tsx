import Link from "next/link";
import { FC } from 'react';
import React from 'react';

function FadeInSectionX(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    }, []);
    return (
        <div
            className={`fade-in-section-X ${isVisible ? 'is-visible-X' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}


export const ContentContainer: FC = props => {

  return (
    <div className="flex-1 drawer h-52">
     {/* <div className="h-screen drawer drawer-mobile w-full"> */}
      <input id="my-drawer" type="checkbox" className="grow drawer-toggle" />
      <div className="items-center  drawer-content">
        {props.children}
      </div>

          {/* SideBar / Drawer */}
          <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <ul className="p-4 overflow-y-auto menu w-80 bg-base-100 ">
                 <li className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#44E43C] to-[#FFFFFF]">
                       <h1><b><i><u>-----------------------------------------</u></i></b><br /></h1>
                  </li>
                  <li className="font-bold text-center text-transparent bg-clip-text bg-gradient-to-tr from-[#44E43C] to-[#FFFFFF]">
                       <h1><b><i><u>United Galactic Confederation</u></i></b><br /></h1>
                  </li>
                  <li className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#44E43C] to-[#FFFFFF]">
                      <h1><b><i><u>-----------------------------------------</u></i></b><br /><br /></h1>
                  </li>
                  
                  <li className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#44E43C] to-[#000000]">
                      <a href="/#present" className="btn btn-ghost btn rounded-btn">The Confederation Today</a>
                  </li>
                  <li className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#44E43C] to-[#000000]">
            
                      <a href="/#roadmap" className="btn btn-ghost btn rounded-btn">Official Roadmap</a>
            
                  </li>
                 
                  <li className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#44E43C] to-[#000000]">

                      <a href="/whitepaper" className="btn btn-ghost btn rounded-btn">Official Whitepaper</a>

                  </li> 

                 

                  <li className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#44E43C] to-[#000000]">

                      <a href="/team" className="btn btn-ghost btn rounded-btn">Meet The Team!</a>

                  </li>
                  <br/>
                  <li className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#44E43C] to-[#FFFFFF]">
                      <h1><b><i><u>-----------------------------------------</u></i></b><br /><br /></h1>
                  </li>


             
                  <li className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#44E43C] to-[#000000]">

                      <a href="/academy" className="btn btn-ghost btn rounded-btn">The Academy of Knowledge And Technology</a>

                  </li>
                  <li className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#44E43C] to-[#000000]">

                      <a href="/hackbros" className="btn btn-ghost btn rounded-btn">HackBros Cyber Security Team</a>

                  </li><br />

                  <li className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#44E43C] to-[#FFFFFF]">
                      <h1><b><i><u>-----------------------------------------</u></i></b><br /><br /></h1>
                  </li>


                  {/**
                  <li className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#44E43C] to-[#000000]">

                      <a href="/nftpage" className="btn btn-ghost btn rounded-btn">UGC NFT COLLECTION</a>

                  </li> **/}


                  <li className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#44E43C] to-[#000000]">
                      <Link href="/rarity">
                      <a href="/underconstruction" className="btn btn-ghost btn rounded-btn">Collection Rarity</a>
                      </Link>
                  </li>

                  <li className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#44E43C] to-[#000000]">
                      <Link href="/basics#passivestaking">
                          <a className="btn btn-ghost btn rounded-btn">Passive Staking</a>
                      </Link>
                  </li>

                  <li className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#44E43C] to-[#000000]">
                      <Link href="/basics#activestaking">
                          <a className="btn btn-ghost btn rounded-btn">Active Staking</a>
                      </Link>
                  </li><br/>

                  <li className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#44E43C] to-[#FFFFFF]">
                      <h1><b><i><u>-----------------------------------------</u></i></b><br /><br /></h1>
                  </li>

                  <li className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#44E43C] to-[#000000]">

                      <a href="/underconstruction" className="btn btn-ghost btn rounded-btn">$UGCT</a>

                  </li>

                  <li className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#44E43C] to-[#000000]">

                      <a href="/underconstruction" className="btn btn-ghost btn rounded-btn">$UGCT Utility</a>

                  </li>

                  <li className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#44E43C] to-[#000000]">

                      <a href="/underconstruction" className="btn btn-ghost btn rounded-btn">$UGCT Tokenomics</a>

                  </li><br />

                  <li className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#44E43C] to-[#FFFFFF]">
                      <h1><b><i><u>-----------------------------------------</u></i></b><br /><br /></h1>
                  </li>

              </ul>
          </div> 
        </div>
  );
};
