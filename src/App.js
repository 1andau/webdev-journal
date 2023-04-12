import './App.css';
import Header from './header/header';
import Left from './left';
import Post from './Post/index';
import Message from './messages/Message';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <div className="leftSide">
          <Left />
        </div>
        <div className="content">
          <Routes>
            <Route path="/posts" element={<Post />}></Route>
            <Route path="/messages" element={<Message />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
