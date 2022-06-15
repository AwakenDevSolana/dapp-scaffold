// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../../components/RequestAirdrop';
import pkg from '../../../package.json';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';
// Fade In Fade Out
import React from 'react';


function FadeInSection(props) {
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
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}
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


export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  return (
      
    <div className="md:hero mx-auto p-4">
          <div className="md:hero-content flex flex-col">
                <FadeInSection><h1 className="text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#44E43C] to-[#000000]">
                  The United Galactic Confederation <span className='text-sm font-bold align-top text-slate-1000'>Universal</span>
              </h1></FadeInSection>

              {/** ANIMATED GOGO ALIEN WELCOME MESSAGE GIF [[NOT ACTIVE]]**/}


            



              {/*
              <h2 id="history" className="md:w-full text-center"><code><br/><br/><br /><br /><b><i>UGC's History</i></b></code> </h2>
              <h4 className="md:w-full text-center text-slate-300 my-2">
                  <FadeInSection> <code><br /><b>Millenniums ago,</b> humanity's space exploration rush triggered a resonating sequence
                      of events the echoed throughout the galaxy.<br/> Little did these humans know but back
                      then they set the galaxy on an irrevocable course of conflict. As centuries passed
                      by the human civilization spread across the galaxy as they colonized planets.<br/>
                      By now humans had put their differences apart and a coherent human civilization
                      was established with a earth effectively serving as humanity's governing capital.<br/>
                      Flourishing under peace, humanity was destined to meet an adversary,
                      soon humanity came across the Hocans an equally sophisticated civilization
                      with their own colonial galatic empire. The two powers in an attempt to exert dominance,
                      slipped into a vicious and chaotic war, that ravaged the entirety of the galaxy as billions perished.<br/>
                      However, centuries of conflict didn't sit well with the younger generations who were sick of war.
                      Eager for peace the new young leaders decided to unite the empires by establishing
                      what is now known as the <b><u>United Galactic Confederation</u></b>.<br /><br /></code></FadeInSection>

              </h4> */}

              <h2 id="present" className="md:w-full text-center"><code><br /><br /><b><i>The Confederation</i></b><br /><br /></code> </h2>
              <h4 className="md:w-full text-center text-slate-300 my-2">

                  
                  <FadeInSection>  <code><b>The United Galactic Confederation</b> is a sophisticated multiplanetary alien civilization, having the ultimate goal of uniting all the technology enthusiasts,Web2&Web3 Developers, Information Technology Experts & administrators, Cyber Security and Penetration Testers, so all the big brains in the <b><u>Solana</u></b> Galaxy under one flag🏴‍☠️<br />At the core of this civilization comes a great emphasis on <b><u>technological and economic superiority</u></b>. As such the <b><u>UGC</u></b> evolved to be as efficient as possible embracing the best technologies, and <b><u>educating the population</u></b> to the highest standard through our Academic Institution while maintaining a high living standard for its civilization.<br /><b><u>Transparency and democracy</u></b> being the pillars of the <b><u>governance mechanism</u></b> at UGC, every voice within the empire is heard with every citizen being granted the<u> <b> right to directly vote</b></u> on public matters.</code></FadeInSection>
          
              </h4>

              {/** dont Activate **/}

              {/**   <div className="overlay">
                  <img src="gogoTheAlien.gif" className="disappear" />
              </div>   **/}

              <FadeInSection> <div id="roadmap" className="max-w-md mx-auto mockup-code bg-primary p-10 my-10">
                  
                  <pre data-prefix=">#Roadmap V1">
                  </pre>
                  <pre data-prefix=">Rebirth of an Empire">
                      <FadeInSection> <code className="truncate">  <code><br /> ...Represents the first stage of the<br /> project, in this stage pillars of the<br /> confederation  are constructed as officials <br />just agreed  to end the galactic war and<br /> give room for cooperation and peace after<br /> years of deadly cyber galactic wars. <br /> <br /> ...The basis of the new administration <br /> is discussed. <br /><br />This phase will witness the following:<br /> <br />- Creation of discord server. <br />- Creation of social media accounts <br />- Creation of the Official Website.<br /> - Start Marketing & Promotion Campaign <br/>&nbsp;&nbsp;while filling the OG Spots & Alienlist.<br />- Launching the UGC Collection Pass <br /> - Releasing Official Rarity on SolRarity<br />- Establishing the Galactic Treasury.<br /> - Issuance of the official currency UGCT <br /> - Release Galactic Treasury<br />&nbsp;&nbsp;specialized roadmap. <br /> - Release the official Whitepaper. <br /> - Start Search Mission For new<br/>&nbsp; Collaborations<br/><br /></code></code></FadeInSection>
                  </pre>

                  <pre data-prefix=">Institutionalization">  <FadeInSection><code><br />...As the UGC is born and the nation<br />is stabilized, creating strong<br/>institutions becomes a necessity to <br/>establish a long lasting empire.<br /><br />...This phase will be centered<br />around UGC's economy and the overall <br/>utility of the project.<br /><br />- Establish giveaways of custom built<br/>&nbsp;&nbsp;penetration testing kits for holders<br />- Establish and finalize the <br />&nbsp;&nbsp;Galactic Academy of knowledge and<br />&nbsp;&nbsp;Technology.<br />- Discuss the governance mechanism of the<br />&nbsp;&nbsp;DAO responsible for the administrative <br />&nbsp;&nbsp;aspects of the project.<br />- Recruit more talented individuals<br />&nbsp;&nbsp;to the team<br />- Start offering financial services<br />&nbsp;&nbsp;through the treasury.<br />- Release Business Bureau specialized<br />&nbsp;&nbsp;roadmap.<br />- Release Galactic Academy of Knowledge<br />&nbsp;&nbsp;specialized roadmap.<br />- Initiate the Galactic heritage<br />&nbsp;&nbsp;collection.<br /><br /></code></FadeInSection>

                  </pre>
                  <pre data-prefix=">Ruled by The People"><FadeInSection><code><br />...This phase represents the transition<br />of the project to a fully decentralized<br />community with the DAO controlling<br />all aspects of the project.<br /><br />- Launch the administrative DAO.<br />- Start offering services through the<br />&nbsp;&nbsp;Business Bureau.<br />- Start offering services through the<br />&nbsp;&nbsp;Galactic Academy of Knowledge And<br />&nbsp;&nbsp;Technology.<br />- Unlock Active Staking Mechanism<br />&nbsp;&nbsp;through the our dapp.<br />- Begin our buy-back program,<br />&nbsp;&nbsp;to insure investor safety and<br />&nbsp;&nbsp;routinly sweep the floor<br />- Use bought nfts for giveaways<br />&nbsp;&nbsp;and for marketing and exposure.<br />- Airdrop the Galactic Heritage<br/>&nbsp;&nbsp;Collection.<br/>- Establish the Galactic Confederate<br />&nbsp;&nbsp;Museum.<br />- Release roadmap V2.</code></FadeInSection>

                  </pre>
              </div></FadeInSection>

              <div className="grid-flow-col gap-4 text-center pr-2">
                  <div>
                      <a href="legal.txt" className="text-white text-sm font-bold cursor-default ">
                          Legal Terms and Conditions
                      </a><br />
                      <a

                          href="legal.txt"
                          target="_blank"
                          className="text-white text-sm font-bold hover:text-primary-dark transition-all duration-200">
                          Privacy Policy
                      </a><br />
                      <a>Copyright&copy;
                      </a><br /><br/><br/>

                  </div>
              </div>
             

              
              {/**   
             
               <div className="text-center">
                 



          {wallet.publicKey && <p>Public Key: {wallet.publicKey.toBase58()}</p>} 
          {wallet && <p>SOL Balance: {(balance || 0).toLocaleString()}</p>}
              </div>
                                         **/} 
              
      </div>
      </div>


  );
};
