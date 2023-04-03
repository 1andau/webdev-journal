import './App.css';
import Header from './header/header';
import Left from './left';
import Post from './Post/index'
import Message from './messages/Message';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
<>
<Header/>
<div className='wrapper'>
<div className='leftSide'> 

<Routes>
<Route path="" element={<Left />}> </Route>
</Routes>

</div>
 <div className="content"> 

<Post/>
<Post/>
<Post/>
</div>
</div>

</>




  );
}

export default App;





