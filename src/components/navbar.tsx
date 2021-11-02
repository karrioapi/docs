import React from 'react';
import clss from './styles';


const Navbar: React.FC = () => {
  return (
    <nav className={clss("navbar is-fixed-top is-light")}>
      <div className={clss("container")}>
        <div className={clss("navbar-brand")}>
          <a className={clss("navbar-item")}>
            <img src="/img/logo.svg" width="130" height="30" alt="purplship" />
          </a>

          <a role="button" className={clss("navbar-burger")} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navMenu" className={clss("navbar-menu")}>
          <div className={clss("navbar-start")}>

            <div className={clss("navbar-item has-dropdown is-hoverable")}>
              <a className={clss("navbar-link has-text-weight-bold")}>
                Resources
              </a>

              <div className={clss("navbar-dropdown")}>
                <a className={clss("navbar-item has-text-weight-bold")} href="/docs">
                  Documentation
                </a>
                <a className={clss("navbar-item has-text-weight-bold")} href="/docs/reference">
                  API Reference
                </a>
              </div>
            </div>

            <a className={clss("navbar-item has-text-weight-bold")} href="/docs/carriers">
              Carriers
            </a>
            <a className={clss("navbar-item has-text-weight-bold")} href="/blog">
              Blog
            </a>
          </div>

          <div className={clss("navbar-end")}>
            <div className={clss("navbar-item")}>
              <div className={clss("buttons")}>
                <a className={clss("button is-link is-rounded")}>
                  <span>Join Beta</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
