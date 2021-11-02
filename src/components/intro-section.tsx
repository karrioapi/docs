import React from 'react';
import clss from './styles';


const IntroSection: React.FC = () => {
  return (
    <section className={clss("hero is-medium is-light")}>
      <div className={clss("hero-body")}>
        <div className={clss("container")}>
          <div className={clss("columns is-multiline")}>

            <div className={clss("column is-offset-2 is-8 is-full-mobile has-text-centered")}>
              <p className={clss("title is-3 has-text-primary is-bold is-spaced")}>
                Solve shipping integration for modern applications
              </p>
              <p className={clss("is-size-5")}>
                The purplship shipping platform offer a set of APIs and tools to simplify the integration of
                shipping services. A dedicated platform bringing a unified and intuitive shipping interface.
                A single integration giving access to a network of shipping carrier services.
              </p>
            </div>

            <div className={clss("column columns is-vcentered is-centered my-4")}>

              <div className={clss("column is-4 columns is-vcentered m-0 is-mobile")}>
                <i className={"fa fa-database " + clss("is-size-4 m-2 has-text-primary")}></i>
                <p className={clss("column is-size-5 has-text-weight-bold")}>Standardize shipping data</p>
              </div>

              <div className={clss("column is-4 columns is-vcentered m-0 is-mobile")}>
                <i className={"fa fa-exchange-alt " + clss("is-size-4 m-2 has-text-primary")}></i>
                <p className={clss("column is-size-5 has-text-weight-bold")}>Unified shipping Interface</p>
              </div>

              <div className={clss("column is-4 columns is-vcentered m-0 is-mobile")}>
                <i className={"fa fa-plug " + clss("is-size-4 m-2 has-text-primary")}></i>
                <p className={clss("column is-size-5 has-text-weight-bold")}>Extensible carrier API</p>
              </div>

            </div>

          </div>
        </div >
      </div >
    </section >
  )
};

export default IntroSection;
