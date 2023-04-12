import React from 'react'
import Left from '../left'
import Header from '../header/header'
import Post from '../Post'
const Layout = () => {


  return (
    <>
    <Header/>
<div className='wrapper'>
<div className='leftSide'> 
<Left />
    </div>
    </div>
<div className="content"> 
<Post/>
</div>
    </>

  )
}

export default Layout