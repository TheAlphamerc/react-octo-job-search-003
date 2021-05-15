import './App.css';

import Body from './component/body.js';
import Footer from './component/footer.js';
import Header from './component/header.js';

function App() {
  return (
    <div className="bg-gray-100 dark:bg-bcakground h-full">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
