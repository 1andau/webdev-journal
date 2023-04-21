import React from 'react'
import './createPost.scss';
import { Photo } from '@mui/icons-material';
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
				<button type="button"  className="create-post__asset-btn">
					{/* <img className="icon" src="" alt="" /> */}
          
					<input type="file" name="post-img" id="create-post-media" accept=".png, .jpg, .jpeg, .gif" />
				</button>
        
        {/* <label htmlFor="input-id" className='imgContainer'>
        <div className="box">
        <Photo className="icon" />
<div className="imagetitle">добавить</div>
        </div>
        </label> */}
<label className='imgContainer'  for="pic">
  <span>Click To Upload File ;D</span>
  <input type="file" id="pic" />
</label>
			</div>
			<button className="create-post__submit" type="submit" >Publish</button>
		</div>
	</form>
</section>

    </>
  )
}

export default CreatePost