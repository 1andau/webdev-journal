import './App.css';
import Header from './header/header';
import Left from './left';
import Post from './Post/index'
function App() {
  return (
    <div className="App">

<Header/>
<div className='wrapper'>
<div className='leftSide'>
  <Left/>
  </div>
</div>
<div className="content">
  <Post/>
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
  <div className='rightSide'>
  <Left/>
  </div>
    </div>
  );
}

export default App;
