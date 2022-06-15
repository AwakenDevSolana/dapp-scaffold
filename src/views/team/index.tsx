
import { FC } from "react";
import { SignMessage } from '../../components/SignMessage';
import { SendTransaction } from '../../components/SendTransaction'; 
import React from 'react';

// Fade In Fade Out Animation Function;

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



export const TeamView: FC = ({ }) => {

  return (
<div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
              <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#44E43C] to-[#000000]">
         The Team Behind the Confederation
              </h1>

              {/** ANIMATED GOGO ALIEN Join US On Dicord MESSAGE GIF**/}


              

              {/* THE TEAM */}
              <FadeInSection> <div id="theteam" className="max-w-md mx-auto mockup-code bg-primary p-10 my-10">
                  
                      <code className="truncate">............................................</code>
                  
              <pre data-prefix=">#Eveything starts with a $vision and a $team">
              </pre>
              <pre data-prefix=">#All Family Members are specialized;">
              </pre>
              <pre data-prefix=">#With Years Of Experience & Huge Skills.">
                  </pre>
                  
                  <pre data-prefix=">#IF You Think You got what it takes">
                  </pre>
              <pre data-prefix=">#Become part of the UGC.Family'!">
              </pre>
              <pre data-prefix=">#Fill out the forum on our discord Server!">
                  </pre>
                  <code className="truncate">............................................</code>
                  <br />
                  </div></FadeInSection>
              <div className="overlay">
                  <img src="gogoTeamMsg.gif" className="disappearAfter10sec" />
              </div>

              {/*Developer*/}

              <FadeInSection> <div id="theteam" className="max-w-md mx-auto mockup-code bg-primary p-10 my-10">

                  
                  <br />
                  <pre data-prefix=">$Full-Stack Developer🛸">
                  </pre>
                  <FadeInSection>
                      <div className="fade-in-image">
                      <img src="GraphicDesignerPFP.png"  />
                          </div>
                  </FadeInSection><br />
                  <pre data-prefix=">$Full-Name:Hsein Khazem">
                      </pre>
                  <pre data-prefix=">$Code-Name:AwakenDev.sol">
                  </pre>
                  
                 
                  <pre data-prefix=">$Vision:">
                       
                      <FadeInSection> <code className="truncate"><br />..After years and years of coding,<br /> Networking, Penetration Testing and<br /> technological advancement in Web2, Iot And <br /> today, Web3 & blockchain technology.<br />After all those years of DYOR <br />I decided to create this project<br />that acts as a transperant confederation,<br /> an institute to share knowledge and<br /> tutorials with all the newcomers<br /> and the old tech giants.All while investing,<br />learning, building a united confederation<br />and definitely by taking over the Solana<br/> Galaxy.<br /><br />#AwakenDev👨‍💻<br /></code></FadeInSection>
                  </pre>
                  <code className="truncate"><br />..........................................</code>
                  
                  <pre data-prefix=">$Never, Will I Ever Stop building value..">
                  </pre>
                  </div></FadeInSection>

                  {/*Designer*/}

              <FadeInSection> <div id="theteam" className="max-w-md mx-auto mockup-code bg-primary p-10 my-10">

                  
                  <br />
                  <pre data-prefix=">$Graphic-Designer-Illustrator🛸">
                  </pre>
                  <FadeInSection> <img src="AwakenDevPFP.png" className="fade-in-image" /> </FadeInSection><br />
                  <pre data-prefix=">$Full-Name:Sarah Koubaisi">
                      </pre>
                  <pre data-prefix=">$Artist-Name:S-K">
                  </pre>
                  
                 
                  <pre data-prefix=">$Vision:">
                       
                      <FadeInSection> <code className="truncate"><br />...Create a mind map. The first step is<br />to come up with an overview of all of<br /> your work.
                          If you miss this step, you <br />might end up overarching which might make<br /> you miss your connection to your audience.<br />
                          Hard Work Come With-in.
                          <br /><br />#S-K👩‍🎨</code></FadeInSection>
                  </pre>
                  <code className="truncate"><br />..........................................</code>
                  
                  <pre data-prefix=">$Hard Work Pays off, Never Gonna Stop..">
                  </pre>
                  </div></FadeInSection>

              {/*Developer*/}

              <FadeInSection> <div id="theteam" className="max-w-md mx-auto mockup-code bg-primary p-10 my-10">


                  <br />
                  <pre data-prefix=">$Computer-Communications Engineer🛸">
                  </pre>
                  <FadeInSection>
                      <div className="fade-in-image">
                          <img src="TEAMCC.png" />
                      </div>
                  </FadeInSection><br />
                  <pre data-prefix=">$Full-Name:Anthony Andre Khalil ">
                  </pre>
                  <pre data-prefix=">$Code-Name:ZeroX">
                  </pre>


                  <pre data-prefix=">$Vision:">
                      
                      <FadeInSection> <code className="truncate"><br />The biggest regret I have, is for all<br/> the wasted time i had behind the power<br/> of knowledge. You cannot change the past<br/> but you can surely write a new brighter<br/> future.<br/><br/><b>A future full of Technology and Information</b>.<br /><br />#ZeroX🥼<br /></code></FadeInSection>
                  </pre>
                  <code className="truncate"><br />..........................................</code>

                  <pre data-prefix=">$Long Live The Age Of Technology!">
                  </pre>
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
