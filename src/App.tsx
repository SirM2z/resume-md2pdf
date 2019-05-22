import React from 'react';
import marked from 'marked';

import Header from './components/Header';
import { markdownStr } from './data';

const createMarkup = () => {
  return { __html: marked(markdownStr) };
}

const App: React.FC = () => {
  return (
    <div className="App">
      <Header title="" />
      <div className="mark-content" dangerouslySetInnerHTML={createMarkup()}></div>
    </div>
  );
}

export default App;
