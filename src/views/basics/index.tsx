
import { FC } from "react";
import { SignMessage } from '../../components/SignMessage';
import { SendTransaction } from '../../components/SendTransaction';
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


export const BasicsView: FC = ({ }) => {

  return (
<div className="md:hero mx-auto p-4">
          <div className="md:hero-content flex flex-col">
              <FadeInSection>  <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#44E43C] to-[#000000]">
                  USG NFT's Different Staking Mechanisms<br />Passive/Active<br />
              </h1></FadeInSection>


              <FadeInSection> <div id="staking" className="max-w-md mx-auto mockup-code bg-primary p-10 my-10">

                  <pre data-prefix=">#What about that passive income!">
                      <FadeInSection> <code className="truncate"><br />...Other than the academic aspect<br />of this project UGC NFT Holders can<br /> take advantage of both of our<br />staking mechanisms inorder to<br />generate a stream of passive income<br />for our investors regardless<br /> if you're holding a USG NFT <br /> in your wallet or staking it here<br /> on the confederation Dapp!<br /></code></FadeInSection>
                      <FadeInSection><code className="truncate"><br />...We decided to implement 2 staking<br /> mechanisms, inorder to maximize<br />our community's rewards and create <br /> a good sum of passive income.<br/><br/>...Both Staking Mechanisims are<br/> detailed below.</code></FadeInSection>
                  </pre><br />
       
                  <pre data-prefix=">$Goto Passive Staking(Y/N)? ..">
                  </pre>
                  <pre data-prefix=">@loading...1%">
                  </pre>
                  <pre data-prefix=">!Almost There..keep scrolling">
                  </pre>

              </div></FadeInSection>

              <FadeInSection> <div id="passivestaking" className="max-w-md mx-auto mockup-code bg-primary p-10 my-10">

                  <pre data-prefix=">$Passive Staking Mechanism">
                      <pre data-prefix=">#What is Passive Staking?">
                          
                          <FadeInSection> <code className="truncate"><br />...This feature is flexible,<br /> no need to lock your nft<br /> all holders are eligable to<br />get rewards for passive staking<br /> by simply holding atleast 1 USG NFT<br /> in their wallet. Rewards are<br /> distributed in solana reflection<br />regularly among USG holders.<br/></code></FadeInSection>
                      </pre><br /></pre>
                  <FadeInSection>
                      <pre data-prefix=">#If you mint and hold:">
                      <pre data-prefix=">#There is a huge chance,">
                          <pre data-prefix=">$Your Wallet will get Airdropped">
                              <pre data-prefix=">@UGC NFT from our Buy-Back Program!">
                              </pre>
                              </pre>
                          </pre></pre> </FadeInSection>
                  <br />
                  <br/>
                  <pre data-prefix=">$Goto Active Staking(Y/N)? ..">
                  </pre>
                  <pre data-prefix=">@loading...2%">
                  </pre>
                  <pre data-prefix=">!done..scroll down">
                  </pre>

              </div></FadeInSection>

              <FadeInSection> <div id="activestaking" className="max-w-md mx-auto mockup-code bg-primary p-10 my-10">

                  <pre data-prefix=">$Active Staking Mechanism">
                      <pre data-prefix=">#What is Active Staking?">

                          <FadeInSection> <code className="truncate"><br />...Just like passive staking,<br />holders whom stake there nft<br /> on the dapp all holders are<br /> eligable for rewards for active<br/> staking by simply locking 1 or<br/> more UGC NFT on the dapp for<br/> a certain period of time.<br /></code></FadeInSection>
                          <FadeInSection> <code className="truncate"><br />...the difference is once you<br />stake your UGC on the dapp, you<br />cannot unstake, or use the UGC <br />till the time you chose is over.<br /></code></FadeInSection>
                          <FadeInSection> <code className="truncate"><br />...Active Staking rewards are<br />distributed out in $UGCT.<br />Active Staking is currently closed<br />till community discusses and<br /> vote for token utility and use on<br /> our way throughout our roadmap!</code></FadeInSection>
                    

                      </pre><br /></pre>
                  <FadeInSection>    <pre data-prefix=">#We decided to lock Active Staking">
                      
                      <pre data-prefix=">#We Will not give our community">
                          <pre data-prefix=">$Another Shitcoin with no utility.">
                              <pre data-prefix=">!it's for the sake of our investors">
                                  <pre data-prefix=">@Lets Keep building value!">
                                      <pre data-prefix=">@Lets vote to keep things moving!">
                                          </pre>
                                      </pre>
                              </pre>
                          </pre>
                      </pre></pre></FadeInSection>
                  <br />
                  <br />
                  <pre data-prefix=">$Voting is Strictly done">
                  </pre>
                  <pre data-prefix=">@on our discord Server..">
                  </pre>
                  <pre data-prefix=">!Meet Us There!">
                  </pre><br/><br/>

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
                      </a><br /><br /><br /> <br /><br /><br />

                  </div>
              </div> 

        
        
        </div>
      </div>
    
  );
};
