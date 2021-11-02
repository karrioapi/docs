import React, { useEffect } from 'react';
import clss from './styles';


const HeroBody: React.FC = () => {
  const [ready, setReady] = React.useState(false);

  useEffect(() => {
    if (!ready) {
      hightlightScript();
      setReady(true);
    }
  }, [ready]);

  return (
    <div className={clss("hero-body")}>
      <div className={clss("container")}>
        <div className={clss("columns is-vcentered")}>

          <div className={clss("column is-half is-offset-one-quarter is-full-mobile has-text-centered")}>
            <p className={clss("title is-2 has-text-white is-bold is-spaced")}>
              The
              <span className={clss("ml-2")} style={{ width: '250px', minWidth: '250', display: 'inline-flex' }}>
                <span id="highlight" className={clss("has-text-secondary")}>Open Source</span>
              </span>
              <br />
              Shipping platform
            </p>

            <h2 className={clss("subtitle is-5 has-text-white")}>
              Accelerate development, integrate with multiple carriers, and innovate quickly with a truly open and standardized shipping infrastructure.
            </h2>
            <p>
              <a className={clss("button is-white is-outlined is-rounded m-2")} href="">
                <span>Join Beta</span>
              </a>
              <a className={clss("button is-white is-rounded m-2")} href="">
                <i className={"fa fa-book " + clss("mx-2")}></i>
                <span>Documentation</span>
              </a>
            </p>
          </div>

        </div>
      </div>
    </div >
  )
};


function hightlightScript() {
  // array with texts to type in typewriter
  var dataText = ["Enterprise", "Unified", "Customizable", "Multi-carrier", "eCommerce", "Open Source"];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text: string, i: number, fnCallback: Function) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
      document.querySelector("#highlight")!.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback)
      }, 150);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 2000);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i: number) {
    if (typeof dataText[i] == 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 60000);
    }
    // check if dataText[i] exists
    if (i < dataText.length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i === dataText.length - 1 ? 0 : i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
}

export default HeroBody;
