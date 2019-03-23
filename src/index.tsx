import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'reducers/rootReducer';
import Main from 'pages/Main';
import PlayerVsAI from 'containers/PlayerVsAI';
import AIVsAI from 'containers/AIVsAI';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import 'normalize.css';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Main} />
        <Route path="/game/player_vs_ai" component={PlayerVsAI} />
        <Route path="/game/ai_vs_ai" component={AIVsAI} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
