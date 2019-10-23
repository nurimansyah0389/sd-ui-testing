import React from 'react';

import Layout from './components/Layout';
import CardList from './components/Cards/CardList';
import CardItem from './components/Cards/CardItem';
import flightsData from './data/flights.json';

const App = () => (
  <Layout>
    <CardList data={flightsData}>
      {(item) => <CardItem data={item}/>}
    </CardList>
  </Layout>
);
export default App;