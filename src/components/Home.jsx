import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import useThemeContext from '@theme/hooks/useThemeContext';
import React from 'react';

import carriers from './carriers.json';

function Home() {
  const { withBaseUrl } = useBaseUrlUtils();
  const { isDarkTheme } = useThemeContext();

  React.useEffect(() => {
    if (isDarkTheme) {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }, [isDarkTheme]);

  function Header() {
    return (
      <header id="hero" className="relative py-28">
        <div className="absolute inset-0 bg-no-repeat bg-cover lg:bg-auto bg-top hero-illustration" style={{ backgroundImage: 'url(/img/bubble.svg)' }}></div>
        <div className="relative max-w-lg m-auto">
          <h1 className={`text-5xl text-center ${isDarkTheme ? 'text-white' : 'text-gray-800'}`}>
            The Open Source Shipping Platform
          </h1>
          <div className="mt-12 m-x-auto flex justify-center">
            {/* <a href="/beta" className="ml-1 text-white font-bold px-6 py-4 rounded-full outline-none focus:outline-none mr-1 mb-1 text-sm shadow hover:shadow-lg no-underline" style={{ background: 'var(--ifm-color-primary)' }}>
              <span>Join Beta</span>
            </a>
            <a href="/docs" className="ml-1 bg-white font-bold px-6 py-4 rounded-full outline-none focus:outline-none mr-1 mb-1 text-sm shadow hover:shadow-lg no-underline" style={{ color: 'var(--ifm-color-primary)' }}>
              <span>Get Started</span>
            </a> */}
            <a href="/docs" className="ml-1 text-white font-bold px-6 py-4 rounded-full outline-none focus:outline-none mr-1 mb-1 text-sm shadow hover:shadow-lg no-underline" style={{ background: 'var(--ifm-color-primary)' }}>
              <span>Get Started</span>
            </a>
          </div>
        </div>
      </header>
    );
  }

  function Description() {
    return (
      <>
        {/* Showcase */}
        <div className="pt-6 pb-16 overflow-hidden">
          <div className="relative max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl leading-9 font-extrabold md:text-4xl md:leading-10">
                  Join the community
                </h2>
              </div>
            </div>
            <div className="pt-4 pb-12 md:pb-16">
              <div className="relative">
                <div className="relative max-w-screen-xl mx-auto px-4 lg:px-6">
                  <div className="max-w-4xl mx-auto">
                    <dl className="rounded-lg shadow-xl lg:grid lg:grid-cols-3 showcase">
                      <div className="flex flex-col border-b p-6 text-center lg:border-0 showcase-border">
                        <dt
                          className="order-2 mt-2 text-lg leading-6 font-medium text-description"
                          id="item-1"
                        >
                          Open Source
                        </dt>
                        <dd
                          className="order-1 text-5xl leading-none font-extrabold"
                          aria-describedby="item-1"
                          style={{ color: 'var(--ifm-color-primary)' }}
                        >
                          100%
                        </dd>
                      </div>
                      <div className="flex flex-col border-t border-b p-6 text-center lg:border-0 lg:border-l showcase-border">
                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-description">
                          Supported Carriers
                        </dt>
                        <dd className="order-1 text-5xl leading-none font-extrabold" style={{ color: 'var(--ifm-color-primary)' }}>
                          +15
                        </dd>
                      </div>
                      <div className="flex flex-col border-t p-6 text-center lg:border-0 lg:border-l showcase-border">
                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-description">
                          Purplship Downloads
                        </dt>
                        <dd className="order-1 text-5xl leading-none font-extrabold" style={{ color: 'var(--ifm-color-primary)' }}>
                          +2000
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 grid grid-cols-5 md:grid-cols-5 lg:grid-cols-10 gap-0">
              {carriers.map(({ name, href, image }) => (
                <div
                  key={href}
                  className="col-span-1 flex justify-center py-2 px-2 text-center"
                >
                  <a
                    href={href}
                    rel="noreferrer"
                    target="_blank"
                    alt={`Discover purplship on the ${name} documentation`}
                  >
                    <img
                      className="inline-block h-20 w-20"
                      src={withBaseUrl(image)}
                      alt={`Discover purplship on the ${name} documentation`}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="py-16 overflow-hidden">
          <div className="relative max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="relative">
              <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight md:text-4xl md:leading-10">
                Solve logistics challenges with a shipping platform
              </h3>
              <p className="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-description">
                Accelerate development, integrate with multiple carriers,
                and innovate quickly with a truly open and standardized
                shipping infrastructure.
              </p>
            </div>

            <div className="pt-16">
              <ul className="lg:grid lg:grid-cols-3 lg:col-gap-8 lg:row-gap-10">
                <li>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md text-white" style={{ background: 'var(--ifm-color-primary)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><g><rect fill="none" height="24" width="24" /><path d="M14,12l-2,2l-2-2l2-2L14,12z M12,6l2.12,2.12l2.5-2.5L12,1L7.38,5.62l2.5,2.5L12,6z M6,12l2.12-2.12l-2.5-2.5L1,12 l4.62,4.62l2.5-2.5L6,12z M18,12l-2.12,2.12l2.5,2.5L23,12l-4.62-4.62l-2.5,2.5L18,12z M12,18l-2.12-2.12l-2.5,2.5L12,23l4.62-4.62 l-2.5-2.5L12,18z" /></g></svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium">
                        Unified Multi-carrier shipping platform
                      </h4>
                      <p className="mt-2 text-base leading-6 text-description">
                        A dedicated platform bringing a unified and intuitive shipping
                        interface. A single integration giving access to a network of
                        shipping carrier services.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10 lg:mt-0">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md text-white" style={{ background: 'var(--ifm-color-primary)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><rect fill="none" height="24" width="24" /><g><path d="M17.41,6.59L15,5.5l2.41-1.09L18.5,2l1.09,2.41L22,5.5l-2.41,1.09L18.5,9L17.41,6.59z M21.28,12.72L20.5,11l-0.78,1.72 L18,13.5l1.72,0.78L20.5,16l0.78-1.72L23,13.5L21.28,12.72z M16.24,14.37l1.94,1.47l-2.5,4.33l-2.24-0.94 c-0.2,0.13-0.42,0.26-0.64,0.37L12.5,22h-5l-0.3-2.41c-0.22-0.11-0.43-0.23-0.64-0.37l-2.24,0.94l-2.5-4.33l1.94-1.47 C3.75,14.25,3.75,14.12,3.75,14s0-0.25,0.01-0.37l-1.94-1.47l2.5-4.33l2.24,0.94c0.2-0.13,0.42-0.26,0.64-0.37L7.5,6h5l0.3,2.41 c0.22,0.11,0.43,0.23,0.64,0.37l2.24-0.94l2.5,4.33l-1.94,1.47c0.01,0.12,0.01,0.24,0.01,0.37S16.25,14.25,16.24,14.37z M13,14 c0-1.66-1.34-3-3-3s-3,1.34-3,3s1.34,3,3,3S13,15.66,13,14z" /></g></svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium">
                        Modern shipping infrastructure
                      </h4>
                      <p className="mt-2 text-base leading-6 text-description">
                        A modern shipping platform that powers your access to features such as
                        rate comparison, label generation and real-time tracking on any cloud.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10 lg:mt-0">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md text-white" style={{ background: 'var(--ifm-color-primary)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none" /><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z" /></svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium">
                        Extensible carrier integrations
                      </h4>
                      <p className="mt-2 text-base leading-6 text-description">
                        An underlining framework to facilitate the integration of shipping
                        carrier services within hours instead of months.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="diagonal-box py-16 bg-gray-200 overflow-hidden">
          <div className="diagonal-content max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="max-w-screen-xl mx-auto pt-6 px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl leading-9 font-extrabold text-gray-900 md:text-4xl md:leading-10">
                  Use Cases
                </h2>
                <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                  Shipping enabled across industries and use cases.
                </p>
              </div>
            </div>

            <div className="py-16">
              <div className="max-w-xl mx-auto px-4 md:px-6 lg:max-w-screen-lg lg:px-8 ">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                  <div>
                    <div className="flex items-center justify-center">
                      <img
                        className="h-200"
                        src={withBaseUrl('img/illustrations/ecommerce.svg')}
                        width="220px"
                        height="220px"
                        alt="Scraping with Algolia Crawler"
                      />
                    </div>
                    <div className="mt-10 lg:mt-0 p-4">
                      <h5 className="text-lg leading-6 font-medium text-gray-900">
                        eRetail
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-600">
                        Process fulfillments for eCommerce and Marketplace orders online
                        and deliver a modern shopping experience for your customers on par
                        with the new standards.
                      </p>
                    </div>
                  </div>
                  <div className="mt-10 lg:mt-0 p-4">
                    <div className="h-200 flex items-center justify-center">
                      <img
                        src={withBaseUrl('img/illustrations/erp.svg')}
                        width="220px"
                        height="220px"
                        alt="Configuration of your crawler"
                      />
                    </div>
                    <div>
                      <h5 className="text-lg leading-6 font-medium text-gray-900">
                        ERP
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-600">
                        Regain control over your logistics operations by powering
                        your order processing and supply chain management
                        modules with a dedicated shipping platform.
                      </p>
                    </div>
                  </div>
                  <div className="mt-10 lg:mt-0 p-4">
                    <div className="h-200 flex items-center justify-center">
                      <img
                        src={withBaseUrl('img/illustrations/wms.svg')}
                        width="220px"
                        height="220px"
                        alt="Implementation on your website"
                      />
                    </div>
                    <div>
                      <h5 className="text-lg leading-6 font-medium text-gray-900">
                        3PL
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-600">
                        Enhance your fulfilment capabilities with the power of automation
                        through API and get direct access to carriers from your OMS, TMS, WMS
                        and any other inhouse systems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Made for developers */}
        <div className="py-16 overflow-hidden lg:py-24">
          <div className="relative max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative lg:mr-20 md:mr-20">
                <h4 className="text-2xl leading-8 font-extrabold tracking-tight md:text-3xl md:leading-9">
                  Made for developers
                </h4>
                <h6 className="text-xl leading-4 font-semibold">
                  The most advanced open source shipping platform.
                </h6>
                <p className="mt-3 mb-3 text-lg leading-7 text-description">
                  No more painful in-house carrier API integrations.
                  No more dependence and 3rd party and vendor lockin for
                  your logistics and shipping integrations. We obsess
                  over the right abstractions so your teams don’t
                  have to, or spend months integrating shipping functionality.
                  Create memorable fulfilment experiences and powerful
                  extensions through Webhooks, REST and GraphQL API.
                </p>

                <a href="/docs" className="bg-white font-bold px-6 py-4 rounded-full outline-none focus:outline-none my-8 text-sm shadow hover:shadow-lg no-underline" style={{ color: 'var(--ifm-color-primary)' }}>
                  <span>Read Docs</span>
                </a>
              </div>

              <div className="mt-10 -mx-4 lg:mt-0">
                <img
                  className="relative mx-auto"
                  src={withBaseUrl('img/illustrations/platform.svg')}
                  alt="purplship-modal"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shipping Product */}
        <div className="py-16 overflow-hidden lg:py-24" style={{ background: 'var(--ifm-color-primary)' }}>
          <div className="text-center">
            <h3 className="mt-2 text-3xl leading-8 font-extrabold text-white tracking-tight md:text-4xl md:leading-10">
              Build faster and focus on your products
            </h3>
          </div>
          <div className="relative max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <ul className="mt-10">
                  <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-indigo-500">
                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5722cc"><path d="M0 0h24v24H0z" fill="none" /><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z" /></svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg leading-6 font-medium text-white">
                          Carriers Connections
                        </h5>
                        <p className="mt-2 text-base leading-6 text-gray-300">
                          Manage your shipping carriers accounts and APIs connections.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md  bg-white text-indigo-500">
                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5722cc"><path d="M0 0h24v24H0z" fill="none" /><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" /></svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg leading-6 font-medium text-white">
                          Shipping API
                        </h5>
                        <p className="mt-2 text-base leading-6 text-gray-300">
                          Get live rates and buy labels from a network of carriers.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="relative">
                <ul className="mt-10">
                  <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-indigo-500">
                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5722cc"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" /></svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg leading-6 font-medium text-white">
                          Tracking API
                        </h5>
                        <p className="mt-2 text-base leading-6 text-gray-300">
                          Retrieve real-time shipment tracking details.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-indigo-500">
                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5722cc"><path d="M0 0h24v24H0z" fill="none" /><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg leading-6 font-medium text-white">
                          Address Validation
                        </h5>
                        <p className="mt-2 text-base leading-6 text-gray-300">
                          Ensure addresses are valid to avoid frustrations.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call To Action */}
        <div className="py-16 lg:py-24">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight md:text-4xl md:leading-10">
                One platform - multiple carriers
              </h3>
              <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-description lg:mx-auto">
                Give your team a head start and deploy your dedicated
                shipping service.
              </p>
              <div className="pt-12 items-center justify-center flex">
                <a href="/docs" className="ml-1 text-white font-bold px-6 py-4 rounded-full outline-none focus:outline-none mr-1 mb-1 text-sm shadow hover:shadow-lg no-underline" style={{ background: 'var(--ifm-color-primary)' }}>
                  <span>Get Started</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div id="tailwind">
      <Header />
      <Description />
    </div>
  );
}

export default Home;
