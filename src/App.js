import './App.scss';
import Header from './header/header';
import Left from './left';
import Post from './Post/index';
import Message from './messages/Message';
import { Routes, Route } from 'react-router-dom';
import Settings from './settings/Settings';
import Chat from './chat/Chat';
import Notifications from './notifications/Notifications';
import CreatePost from './createPost/CreatePost';
import Admin from './Admin/Admin';
import Subscriptions from './Subscriptions/Subscriptions';
import Test from './tests/Test';
function App() {
  return (
    <div className="App">
      <Header />
        <div className="leftSide">
          <Left />
        </div>
        <div className="content">
          <Routes>
            <Route path="/posts" element={<Post />}></Route>
            <Route path="/messages" element={<Message />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
            <Route path="/chat" element={<Chat />}></Route>
            <Route path="/notifications" element={<Notifications />}></Route>
            <Route path="/createPost" element={<CreatePost />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/tests" element={<Test />}></Route>
            <Route path="/subscriptions" element={<Subscriptions />}></Route>

          </Routes>
        </div>
      </div>
  );
}

export default App;
