
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



export const RarityView: FC = ({ }) => {

  return (
<div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
              <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#44E43C] to-[#000000]">
                  Collection Rarity
              </h1>

              {/** ANIMATED GOGO ALIEN Join US On Dicord MESSAGE GIF**/}
              <h2 id="present" className="md:w-full text-center"><code><br /><br /><b><i>UGC.Nft's Rarity</i> 👽  </b><br /><br /></code> </h2>
              <h4 className="md:w-full text-center text-slate-300 my-2">

                  
                  <FadeInSection>  <code><b>Collection Rarirty</b> will be public on SolRarity once the collection is fully minted. But you can have a look at the scartch😉  </code></FadeInSection>
          
              </h4>

              

              {/* THE TEAM */}
              <FadeInSection> <div id="theteam" className="max-w-md mx-auto mockup-code bg-primary p-10 my-10">
                  
                      <code className="truncate">.................................</code>
                  
              <pre data-prefix=">#IMP:#This Is a SCRATCH">
              </pre>
              <pre data-prefix=">$Un-verified Collection Rarity">
              </pre>
              <pre data-prefix=">#Un-verified Categories> $start:">
              </pre>
            
              </div></FadeInSection>

              
              <div className="overlay">
                  <img src="gogoTeamMsg.gif" className="disappearAfter10sec" />
              </div>


              {/*Background Rarity UGC.NFTS*/}

              <FadeInSection> <div id="theteam" className="max-w-md mx-auto mockup-code bg-primary p-10 my-10">

                  
                  <br />
                  <pre data-prefix=">$🔙BACKGROUND:">
                      <FadeInSection> <code className="truncate"> &gt;Binary&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1️⃣<br />&nbsp;&nbsp;&gt;Neon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2️⃣<br />&nbsp;&nbsp;&gt;Moon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3️⃣<br />&nbsp;&nbsp;&gt;Earth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4️⃣<br />&nbsp;&nbsp;&gt;Exo-Earth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5️⃣<br />&nbsp;&nbsp;&gt;Ganymede Planet&nbsp;6️⃣<br />&nbsp;&nbsp;&gt;Saturn&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7️⃣<br />&nbsp;&nbsp;&gt;Venus&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8️⃣<br />&nbsp;&nbsp;&gt;Black Hole&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9️⃣<br />&nbsp;&nbsp;&gt;UFOs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🔟<br />&nbsp;&nbsp;&gt;Space&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1️⃣1️⃣<br />&nbsp;&nbsp;&gt;Mint&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1️⃣2️⃣<br />&nbsp;&nbsp;&gt;Strawberry&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1️⃣3️⃣<br />&nbsp;&nbsp;&gt;Blue&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1️⃣4️⃣<br />&nbsp;&nbsp;&gt;Black&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1️⃣5️⃣</code></FadeInSection>

                  </pre>    

                  <br/>
                  <pre data-prefix=">@Keep Scrolling;">
                  </pre>
                  </div></FadeInSection>

              {/*Alien Breed Rarity UGC.NFTS*/}

              <FadeInSection> <div id="theteam" className="max-w-md mx-auto mockup-code bg-primary p-10 my-10">


                  <br />
                  <pre data-prefix=">$🛸ALIEN's BREED:">
                      <FadeInSection> <code className="truncate"> &gt;Green&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1️⃣<br />&nbsp;&nbsp;&gt;Cyan&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2️⃣<br />&nbsp;&nbsp;&gt;Blue&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3️⃣<br />&nbsp;&nbsp;&gt;Red&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4️⃣<br />&nbsp;&nbsp;&gt;Purple&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5️⃣<br />&nbsp;&nbsp;&gt;Yellow&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6️⃣</code></FadeInSection>

                  </pre>

                  <br />
                  <pre data-prefix=">@GoDown++;">
                  </pre>
              </div></FadeInSection>



              {/*Eyes Rarity UGC.NFTS*/}

              <FadeInSection> <div id="theteam" className="max-w-md mx-auto mockup-code bg-primary p-10 my-10">


                  <br />
                  <pre data-prefix=">$👀ALIEN's EYES:">
                      <FadeInSection> <code className="truncate"> &gt;Solana Eyes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1️⃣<br />&nbsp;&nbsp;&gt;Green Laser Eyes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2️⃣<br />&nbsp;&nbsp;&gt;Purple Laser Eyes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3️⃣<br />&nbsp;&nbsp;&gt;Lava Red&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4️⃣<br />&nbsp;&nbsp;&gt;Full-White Eyes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5️⃣<br />&nbsp;&nbsp;&gt;Full-Black Eyes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6️⃣<br />&nbsp;&nbsp;&gt;Normal Green Eyes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7️⃣<br />&nbsp;&nbsp;&gt;Normal Purple Eyes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8️⃣<br />&nbsp;&nbsp;&gt;Normal Blue Eyes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9️⃣<br />&nbsp;&nbsp;&gt;Normal Brown Eyes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🔟<br />&nbsp;&nbsp;&gt;Normal Black Eyes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1️⃣1️⃣<br />&nbsp;&nbsp;&gt;Normal Eyes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1️⃣2️⃣<br />&nbsp;&nbsp;&gt;Dead Eyes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1️⃣3️⃣<br />&nbsp;&nbsp;&gt;Exlamation Eyes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1️⃣4️⃣<br />&nbsp;&nbsp;&gt;Weird Eyes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1️⃣5️⃣</code></FadeInSection>

                  </pre>

                  <br />
                  <pre data-prefix=">@Keep Going down;">
                  </pre>
              </div></FadeInSection>

              {/*Mouth Rarity UGC.NFTS*/}

              <FadeInSection> <div id="theteam" className="max-w-md mx-auto mockup-code bg-primary p-10 my-10">


                  <br />
                  <pre data-prefix=">$👄ALIEN's MOUTH:">
                      <FadeInSection> <code className="truncate"> &gt;Smoking a J&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1️⃣<br />&nbsp;&nbsp;&gt;Medical Mask&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2️⃣<br />&nbsp;&nbsp;&gt;Taped&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3️⃣<br />&nbsp;&nbsp;&gt;Golden Smile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4️⃣<br />&nbsp;&nbsp;&gt;Eating a frog&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5️⃣<br />&nbsp;&nbsp;&gt;Cat Mouth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6️⃣<br />&nbsp;&nbsp;&gt;Normal Smile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7️⃣<br />&nbsp;&nbsp;&gt;Angry&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8️⃣<br />&nbsp;&nbsp;&gt;Tongue-Out W/Fangs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9️⃣<br />&nbsp;&nbsp;&gt;Tongue-Out&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🔟<br />&nbsp;&nbsp;&gt;Grinch's mouth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1️⃣1️⃣<br />&nbsp;&nbsp;&gt;Hitler's Mouth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1️⃣2️⃣</code></FadeInSection>

                  </pre>

                  <br />
                  <pre data-prefix=">@More? ok! go down..;">
                  </pre>
              </div></FadeInSection>


              {/*Neck Rarity UGC.NFTS*/}

              <FadeInSection> <div id="theteam" className="max-w-md mx-auto mockup-code bg-primary p-10 my-10">


                  <br />
                  <pre data-prefix=">$👄ALIEN's NECK:">
                      <FadeInSection> <code className="truncate"> &gt;Solana Chain&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1️⃣<br />&nbsp;&nbsp;&gt;Golden Chain&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2️⃣<br />&nbsp;&nbsp;&gt;Silver Chain&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3️⃣<br />&nbsp;&nbsp;&gt;Illuminati Tattoo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4️⃣<br />&nbsp;&nbsp;&gt;Heart Tattoo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5️⃣<br />&nbsp;&nbsp;&gt;Black Collar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6️⃣<br />&nbsp;&nbsp;&gt;Bitten By A Brother&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7️⃣<br />&nbsp;&nbsp;&gt;Nothing&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8️⃣</code></FadeInSection>

                  </pre>

                  <br />
                  <pre data-prefix=">@GoDown++;">
                  </pre>
              </div></FadeInSection>






              {/*Accessories Rarity UGC.NFTS*/}

              <FadeInSection> <div id="theteam" className="max-w-md mx-auto mockup-code bg-primary p-10 my-10">


                  <br />
                  <pre data-prefix=">$👑ACCESSORIES:">
                      <FadeInSection> <code className="truncate"> &gt;Hallo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1️⃣<br />&nbsp;&nbsp;&gt;Crown&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2️⃣<br />&nbsp;&nbsp;&gt;Black Bandana&nbsp;&nbsp;&nbsp;3️⃣<br />&nbsp;&nbsp;&gt;Green Parasite&nbsp;&nbsp;4️⃣<br />&nbsp;&nbsp;&gt;Black Parasite&nbsp;&nbsp;5️⃣<br />&nbsp;&nbsp;&gt;Eyebrow Piercing6️⃣<br />&nbsp;&nbsp;&gt;Blonde Wig&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7️⃣<br />&nbsp;&nbsp;&gt;Purple Wig&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8️⃣<br />&nbsp;&nbsp;&gt;Orange Wig&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9️⃣<br />&nbsp;&nbsp;&gt;Black Wig&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🔟<br />&nbsp;&nbsp;&gt;Pimples&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1️⃣1️⃣</code></FadeInSection>

                  </pre>

                  <br />
                  <pre data-prefix=">@Keep in mind:">
                  </pre>
                  <pre data-prefix=">@THIS IS NOT THE OFFICIAL RARITY!!">
                  </pre>
                  <pre data-prefix=">@This might change once released!!">
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
