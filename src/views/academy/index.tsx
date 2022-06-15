
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



export const AcademyView: FC = ({ }) => {

  return (
<div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
              <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#44E43C] to-[#000000]">
         The United Galactic Confederation Academy Of Knowledge and Technology
              </h1>
            
              <FadeInSection> <div id="academy" className="max-w-md mx-auto mockup-code bg-primary p-10 my-10">

                  <pre data-prefix=">#UGC ACADEMY OF KNOWLEDGE AND TECHNOLOGY">
                  </pre>
                  
                  <FadeInSection> <img src="mothership.png" className="fade-in-image" /> </FadeInSection><br />
                  
                  <br />
                  <pre data-prefix=">@The Academy">
                  </pre>


                  

                  <FadeInSection> <code className="truncate">  <code><br />...We at the united galactic confederation,<br />are making it easier than ever to access<br />knowledge and tutorials in most of the<br />technology space, aswell as helping our<br />investors build and upgrade their career<br />path and discover more on what technology<br />seeks to offer in all different technological<br />categories.</code></code></FadeInSection>
                  <br/><pre data-prefix=">@What Does the UGC Academy has to offer?"> 
                  </pre>
                  <FadeInSection> <code className="truncate"><code><br/>UGC will also be expanding the<br />academy as far as we can, by <br />adding new courses, upgrading the staff,<br />aswell as the quality, creating new<br /> opportunities, developing a research center,<br />creating a safe space online for out investors<br /> to share knowledge and gain premium data<br />and information, creating meetups for<br/> our community, creating custom software<br/> other than the penetration testing kits<br/>thats gonna be givenaway for our A+ Students.</code></code></FadeInSection>
                  <br /><pre data-prefix=">@What Does the UGC Academy has to offer?">
                  </pre>
                      <br /> <pre data-prefix=">>In Technology Terms:">
                      </pre>
                  <FadeInSection> <code className="truncate"><code><br />&gt; Our Online Class And Tutorials will<br/>&nbsp;&nbsp;consist the following and will expand<br/>&nbsp;&nbsp;as we move forward:<br/><br/> - Software Development.<br/> - Web Development.<br/> - Web3AndBlockchain Development. <br/> - Game Development.<br/> - Network & Cisco Courses.<br/> - Cyber Security & Penetration Testing.<br/> - Information Technology.<br/> - Internet OfThings.<br/> - Mining And Hardware Building. <br/> - NFTS & Cryptocurrency Trading Classes <br/></code></code></FadeInSection>
                  <br />
                  <pre data-prefix=">$@How To Register in the Academy?">
                  </pre>
                  <br />
                  <FadeInSection> <code className="truncate">...By Holding a UGC Non-fungible token,<br />you will be granted a life-time access to<br />all classes, courses, tutorial, meetups <br />and all other different benefits that the <br /> Academy has to offer. </code></FadeInSection>
                  <br/>
                  <FadeInSection> <code className="truncate"><code>...By Using a UGC Non-Fungible Token <br /> as a registeration pass for The United<br/> Galactic Confederation Academy, we are<br/>giving our students and investors<br/>a chance for a refund as well as a chance<br/> to make extra money.<br/><br/>...Students have the right to stay or leave,<br/>if you either decided to sell your USG pass<br/> and leave for any circumstances, you will<br/> always be welcomed back and we will be<br/> more than happy to share new knowledge<br/> with you again.<br/><br/>...But if you are buying on secondary,<br/>please keep in mind that we can't control<br/> the floor price, which means that the<br/> NFT passes could go up in price.<br/></code></code></FadeInSection>


                  
                  <br />
                    
                  <pre data-prefix=">$We strongly Believe It's our responsibility,">
                  </pre>
                  <pre data-prefix=">$To Help keep our investors safe ..">
                  </pre>
                  <pre data-prefix=">$From online cyber attacks ..">
                  </pre>
                      <pre data-prefix=">$Especially inside the web3 world ..">
                      </pre>


              </div></FadeInSection>
              <div>
                  <img src="binary.gif" className="pos" />
              </div>

        <div className="text-center position:fixed">
                  
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
                      </a> <br /> <br /> <br /><br /><br /><br />

                      </div>
                  
        </div>
      </div>
    </div>
  );
};
