import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';

import { Layout } from 'components';
import { Home } from 'pages';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_ID
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

window.db = db;

const App = () => {
  console.log('dasdas', process.env)
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Redirect to='/' />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
