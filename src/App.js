import './App.css';

import Body from './component/body.js';
import Header from './component/header.js';

function App() {
  return (
    <div className="bg-gray-100 h-full">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
