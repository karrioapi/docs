import Layout from '@theme/Layout';
import React from 'react';

import Home from '../components/Home';

function HomePage() {
  return (
    <Layout
      title="Purplship: Open Source, On-prem or Private cloud Shipping API"
      description="The Open Source multi-carrier shipping API"
    >
      <Home />
    </Layout>
  );
}

export default HomePage;
