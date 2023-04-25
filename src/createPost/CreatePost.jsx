import React from 'react'
import './createPost.scss';
import { Photo } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const CreatePost = () => {
  return (

    <>
   <h1>Опубликовать свой текст</h1>
    <section className="create-post">
	<img className="create-post__avatar" src="https://raw.githubusercontent.com/Javieer57/create-post-component/design/2010/img/avatar-tumblr.png" alt="" />
	<form id="create-post-form" className="create-post__form" action="">

  <div className="createPostMain">
    <label htmlFor="">Заголовок</label>
			<textarea className='mainTextarea' placeholder="Как я стал frontend разработчиком"></textarea>
		</div>

		<div className="createText">
    <label htmlFor="">Ваш текст</label>
			<textarea name='mainTextarea' placeholder="Write something about you..."></textarea>
		</div>

		<div className="postMedia"></div>

		<div className="buttons">
			<div className="btn_assets">    
        
<label className='imgContainer'  for="pic">
  <span>upload File</span>
  <input type="file" id="pic" />
  <Photo className="icon" />
</label>
			</div>
			<button className="sendButton" type="submit" >Publish</button>
		</div>
	</form>
</section>

    </>
  )
}

export default CreatePost