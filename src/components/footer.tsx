import React from 'react';
import clss from './styles';


const Footer: React.FC = () => {
  return (
    <footer className={clss("footer has-background-dark has-text-grey-light py-6")}>

      <div className={clss("container my-6")}>
        <div className={clss("columns is-multiline")}>
          <div className={clss("column is-half is-full-mobile")}>
            <img src="/img/logo-inverted.svg" width="260" height="80" alt="purplship" />
          </div>

          <div className={clss("column")}>
            <div className={clss("footer-column")}>
              <div className={clss("footer-header mb-3")}>
                <h3 className={clss("has-text-weight-bold")}>Resources</h3>
              </div>
              <ul className={clss("link-list")}>
                <li className={clss("mb-1")}><a className={clss("has-text-white-ter")} href="https://docs.purplship.com">Documentations</a></li>
                <li className={clss("mb-1")}><a className={clss("has-text-white-ter")} href="https://docs.purplship.com/reference">API Reference</a></li>
                <li className={clss("mb-1")}><a className={clss("has-text-white-ter")} href="https://docs.purplship.com/guides">Guides</a></li>
                <li className={clss("mb-1")}><a className={clss("has-text-white-ter")} href="https://docs.purplship.com/carriers">Carriers</a></li>
              </ul>
            </div>
          </div>

          <div className={clss("column")}>
            <div className={clss("footer-column")}>
              <div className={clss("footer-header mb-3")}>
                <h3 className={clss("has-text-weight-bold")}>About</h3>
              </div>
              <ul className={clss("link-list")}>
                <li className={clss("mb-1")}><a className={clss("has-text-white-ter")} href="https://github.com/purplship/purplship">Open Source</a></li>
                <li className={clss("mb-1")}><a className={clss("has-text-white-ter")} href="https://github.com/purplship/purplship/discussions">Community</a></li>
                <li className={clss("mb-1")}><a className={clss("has-text-white-ter")} href="https://blog.purplship.com">Blog</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={clss("container has-text-centered")}>
        {`Copyright © ${new Date().getFullYear()} purplship`}
      </div>

    </footer>
  )
};

export default Footer;
