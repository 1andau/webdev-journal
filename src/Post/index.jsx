import React from 'react';
import styles from './Post.module.scss';
import { Paper, Typography } from '@mui/material';
import './post.scss';
import Pagination from '../tests/pagination';

const Post = () => {
  return (
<section id="posts-container">
	<article className="post">
		<img className="post__avatar" src="https://raw.githubusercontent.com/Javieer57/create-post-component/design/2010/img/avatar-tumblr.png" alt="" />

		<div className="post__content">
			<header className="post__header">
				<p className="post__user">galactiqangel</p>

				<div className="post__meta">
					<p className="post__reblogs">3,908</p>

					<button className="post__header-btn">
						<img src="https://raw.githubusercontent.com/Javieer57/create-post-component/43c8008a45b699957d2070cc23362f1953c65d78/icons/reblog-tumblr.svg" alt="" />
					</button>
					<button className="post__header-btn">
						<img src="https://raw.githubusercontent.com/Javieer57/create-post-component/43c8008a45b699957d2070cc23362f1953c65d78/icons/heart-tumblr.svg" alt="" />
					</button>
				</div>
			</header>

			<div className="post__body">
				<img className="post__img" src="https://raw.githubusercontent.com/Javieer57/create-post-component/design/2010/img/liz-lee.jpg" alt="" />
				<a href="https://es.wikipedia.org/wiki/My_Life_as_Liz" className="post__text">My Life As Liz</a>
			</div>

			<div className="post__footer">
				<span>#2010s</span>
				<span>#tumblr</span>
				<span>#codepen</span>
			</div>
		</div>
	</article>

	<article className="post">
		<img className="post__avatar" src="https://raw.githubusercontent.com/Javieer57/create-post-component/design/2010/img/avatar-tumblr.png" alt="" />

		<div className="post__content">
			<header className="post__header">
				<p className="post__user">galactiqangel</p>

				<div className="post__meta">
					<p className="post__reblogs">3,908</p>

					<button className="post__header-btn">
						<img src="https://raw.githubusercontent.com/Javieer57/create-post-component/43c8008a45b699957d2070cc23362f1953c65d78/icons/reblog-tumblr.svg" alt="" />
					</button>
					<button className="post__header-btn">
						<img src="https://raw.githubusercontent.com/Javieer57/create-post-component/43c8008a45b699957d2070cc23362f1953c65d78/icons/heart-tumblr.svg" alt="" />
					</button>
				</div>
			</header>

			<div className="post__body">
				<img className="post__img" src="https://raw.githubusercontent.com/Javieer57/create-post-component/design/2010/img/steven-universe.webp" alt="" />
				<a href="https://es.wikipedia.org/wiki/Steven_Universe" className="post__text">Steven Universe</a>
			</div>

			<div className="post__footer">
				<span>#2010s</span>
				<span>#tumblr</span>
				<span>#codepen</span>
			</div>
		</div>
	</article>

	<article className="post">
		<img className="post__avatar" src="https://raw.githubusercontent.com/Javieer57/create-post-component/design/2010/img/avatar-tumblr.png" alt="" />

		<div className="post__content">
			<header className="post__header">
				<p className="post__user">galactiqangel</p>

				<div className="post__meta">
					<p className="post__reblogs">3,908</p>

					<button className="post__header-btn">
						<img src="https://raw.githubusercontent.com/Javieer57/create-post-component/43c8008a45b699957d2070cc23362f1953c65d78/icons/reblog-tumblr.svg" alt="" />
					</button>
					<button className="post__header-btn">
						<img src="https://raw.githubusercontent.com/Javieer57/create-post-component/43c8008a45b699957d2070cc23362f1953c65d78/icons/heart-tumblr.svg" alt="" />
					</button>
				</div>
			</header>

			<div className="post__body">
				<img className="post__img" src="https://raw.githubusercontent.com/Javieer57/create-post-component/design/2010/img/catching-fire.webp" alt="" />
				<a href="https://en.wikipedia.org/wiki/The_Hunger_Games:_Catching_Fire" className="post__text">The Hunger Games...?</a>
			</div>

			<div className="post__footer">
				<span>#2010s</span>
				<span>#tumblr</span>
				<span>#codepen</span>
			</div>
		</div>
	</article>

	<article className="post">
		<img className="post__avatar" src="https://raw.githubusercontent.com/Javieer57/create-post-component/design/2010/img/avatar-tumblr.png" alt="" />

		<div className="post__content">
			<header className="post__header">
				<p className="post__user">galactiqangel</p>

				<div className="post__meta">
					<p className="post__reblogs">3,908</p>

					<button className="post__header-btn">
						<img src="https://raw.githubusercontent.com/Javieer57/create-post-component/43c8008a45b699957d2070cc23362f1953c65d78/icons/reblog-tumblr.svg" alt="" />
					</button>
					<button className="post__header-btn">
						<img src="https://raw.githubusercontent.com/Javieer57/create-post-component/43c8008a45b699957d2070cc23362f1953c65d78/icons/heart-tumblr.svg" alt="" />
					</button>
				</div>
			</header>

			<div className="post__body">
				<img className="post__img" src="https://raw.githubusercontent.com/Javieer57/create-post-component/design/2010/img/icecream-twerk.webp" alt="" />
			</div>

			<div className="post__footer">
				<span>#2010s</span>
				<span>#tumblr</span>
				<span>#codepen</span>
			</div>
		</div>
	</article>

	<Pagination/>
</section>

  );
};
export default Post;
