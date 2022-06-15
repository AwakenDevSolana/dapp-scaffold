
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



export const HackView: FC = ({ }) => {

  return (
<div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
              <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#44E43C] to-[#000000]">
         The Backbone of the Confederation
              </h1>
              <FadeInSection> <div id="theteam" className="max-w-md mx-auto mockup-code bg-primary p-10 my-10">
                  <code className="truncate">............................................</code>
                  <pre data-prefix=">$Hackbros!>$Hackbros!>$Hackbros!>$Hackbros!">
                      <code className="truncate"><br />............................................</code>
                  </pre>
              </div> </FadeInSection>
              <FadeInSection> <img src="whitehat.png" alt="Whitehat" className="fade-in-image" /> </FadeInSection><br />
              
              {/* HACKBROS*/}
              <FadeInSection> <div id="theteam" className="max-w-md mx-auto mockup-code bg-primary p-10 my-10">
                  <code className="truncate"><br />............................................</code>
                  <br /><br /> 
              <pre data-prefix=">$Hackbros!">
                  </pre>
                  <br />
                  <pre data-prefix=">$WhiteHat Defenders!">
                  </pre>
                  <br />
                  <pre data-prefix=">$Worldwide Ethical Hacking Group!">
                  </pre>
                  <br />
                  <pre data-prefix=">$Specialized Cyber Security Experts!">
                  </pre>
                  <br />
                  <pre data-prefix=">$Confederation's OG PARTNERS!">
                  </pre>
                  <br />
                  <pre data-prefix=">$Pillars of UGC's Cyber Academy!">
                  </pre>
                  <code className="truncate"><br />............................................</code>

                 

              </div></FadeInSection>

              <FadeInSection> <div id="ss" className="max-w-md mx-auto mockup-code bg-primary p-10 my-10">
                  <code className="truncate">............................................</code>
                  <br />
              <pre data-prefix=">#Specialized In IT and Cybersecurity,">
              </pre>
              <pre data-prefix=">#Registered Years of feild experience.">
              </pre>
              <pre data-prefix=">#Partners and Family of the confederation">
                  </pre>
                  <code className="truncate">............................................</code>

                  
              </div></FadeInSection>

              <FadeInSection> <div id="ss" className="max-w-md mx-auto mockup-code bg-primary p-10 my-10">
                  
                  <pre data-prefix=":>>HackBros Security Team Contribution:">
                  </pre>
                  <code className="truncate"><br />............................................</code>
                  <br />

                  <br />
              <pre data-prefix=":>>Will be providing our security measurments">
                  </pre>              
                  <pre data-prefix=":>>Will be providing endless tutorials">
                  </pre>
                  <pre data-prefix=":>>Will be providing hardware equipment">
                  </pre>
                  <pre data-prefix=":>>Will be providing custom software and tools">
                  </pre>
                  <pre data-prefix=":>>Custom Built Hackbros Equipment Kits">
                  </pre>
                  <pre data-prefix=":>>Everything will be provided in the academy">
                  </pre>
                  <pre data-prefix=":>>Penetration-Testing Kits Giveaway Mechanism">
                  </pre>
                  <pre data-prefix=":>>Is yet to be finalized, and will be to our">
                  </pre>
                  <pre data-prefix=":>>A+ Technology Geeks! with a invitation">
                  </pre>
                  <pre data-prefix=":>>to join our elite ethical hacking group">
                  </pre>
                  <br />
                  <code className="truncate"><br />............................................</code>
                  
                  <pre data-prefix=":>>HACKBROS!">
                  </pre>

                  <code className="truncate">............................................</code>

              </div></FadeInSection>
                  <FadeInSection> <div id="ss" className="max-w-md mx-auto mockup-code bg-primary p-10 my-10">
                      
                  <code className="truncate"><br />............................................</code>
                  <br />
                  <pre data-prefix=">**Hardware will be Custom Built By Hackbros!">
                  </pre>
                  <pre data-prefix=">**As well as other penetration tools!">
                  </pre>
                  <pre data-prefix=">**Exclusively for USG.NFT HOLDERS only!">
                  </pre>
                  <pre data-prefix=">**Be sure to grab a wl spot on our discord!!">
                  </pre>
                  <code className="truncate">............................................</code>
                  
                  
              </div></FadeInSection>
     
              
          
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
