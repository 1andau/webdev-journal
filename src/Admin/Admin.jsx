import React from 'react'
import avatar from '../assets/em.jpeg'
import './admin.scss'

const Admin = () => {
  return (
	<div className="profile-card">
	<div className="profile-cover">
	<div className="profile-avatar">
			<div className="btns-container">
			</div>
			<a href="#"><img src={avatar}  /></a>
		</div>
		<div className="profile-details">
			<h1>Kim Metters</h1>
			<h6>wife, mother</h6>
		</div>
	</div>

	
	<div className="profile_content">
		<ul>
			<li>
				<div className="digits">83</div>
				Followers
			</li>
			<li>
				<div className="digits">1507</div>
				Tweets
			</li>
			<li>
				<div className="digits">234</div>
				Friends
			</li>
			<li>
				<div className="digits">51</div>
				Likes
			</li>
			<li>
				<div className="digits">42</div>
				Gits
			</li>
		</ul>
		<div className="clear"></div>
	</div>
</div>

	)
}

export default Admin