import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './index.scss';

// When deploying in production, in Chrome the app doesn't display the latest updates unless you unregister the service worker below.
// Also in firebase.json added "headers" under "hosting" to sepcify no cache
import { unregister } from './registerServiceWorker';
unregister() ;

ReactDOM.render(<App />, document.getElementById('root'));