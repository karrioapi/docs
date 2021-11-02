import React from 'react';
import clss from './styles';


const CARRIERS = [
  "canadapost",
  "usps",
  "australiapost",
  "fedex",
  "dhl_express",
  "ups",
  "purolator",
  "canpar",
  "aramex",
  "sendle",
  "royalmail",
  "tnt",
];

const HeroFooter: React.FC = () => {
  return (
    <div className={clss("hero-foot has-background-light pb-6")}>
      <div className={clss("container my-2")}>

        <div className={clss("is-centered px-3 column has-text-centered")}>
          <p className={clss("title is-3 my-2 has-text-primary")}>Easy Integrations</p>
          <p className={clss("mb-4")}>
            <a className={clss("button is-rounded secondary-btn is-small")} href="/docs/carriers">
              <span className={clss("px-2")}>See the complete list</span>
              <i className="fa fa-chevron-right"></i>
            </a>
          </p>
        </div>

        <div className={clss("tabs is-centered")}>
          <ul>
            {CARRIERS.map((carrier, index) => (
              <li key={index}>
                <figure className={clss("image is-96x96 mx-1")}>
                  <img className={clss("partner-logo")} src={`/img/carriers/${carrier}_icon.svg`} alt={carrier} />
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div >
  )
};

export default HeroFooter;
