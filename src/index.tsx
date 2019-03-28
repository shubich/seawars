import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import rootReducer from 'reducers/rootReducer';
import Main from 'pages/Main';
import Settings from 'pages/Settings';
import PlayerVsAI from 'containers/PlayerVsAI';
import AIVsAI from 'containers/AIVsAI';
import { BASE_URL } from 'constants/url';

import 'normalize.css';
import './index.scss';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router basename={BASE_URL}>
      <Switch>
        <Route exact={true} path="/" component={Main} />
        <Route path="/settings" component={Settings} />
        <Route path="/game/player_vs_ai" component={PlayerVsAI} />
        <Route path="/game/ai_vs_ai" component={AIVsAI} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
