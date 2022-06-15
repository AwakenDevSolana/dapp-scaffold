
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



export const WhitepaperView: FC = ({ }) => {

  return (
<div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
              <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#44E43C] to-[#000000]">
         This is the Official Whitepaper for The United Galactic Confederation
        </h1>
              <FadeInSection> <div id="whitepaper" className="max-w-md mx-auto mockup-code bg-primary p-10 my-10">

                  <pre data-prefix=">#Official Whitepaper">
                  </pre>
                  <pre data-prefix=">@loading...15%">
                  </pre>
                  <pre data-prefix=">$loading...35%">
                  </pre>
                  <pre data-prefix=">@loading...55%">
                  </pre>
                      <pre data-prefix=">$loading...82%">
                      <FadeInSection> <code className="truncate">  <code><br /><br />#Official Whitepaper Will Soon<br /> be released as we go through<br />our roadmap.<br /><br /><br /><br /></code></code></FadeInSection>
                  </pre>
                  
                  <pre data-prefix=">$lets keep on building(Y/N)? ..">
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
