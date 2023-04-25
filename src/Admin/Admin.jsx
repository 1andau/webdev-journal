import React from 'react'
import avatar from '../assets/em.jpeg'
import './admin.scss'

const Admin = () => {
  return (
	<div class="profile-card">
	<div class="profile-cover">
	<div class="profile-avatar">
			<div class="btns-container">
			</div>
			<a href="#"><img src={avatar}  /></a>
		</div>
		<div class="profile-details">
			<h1>Kim Metters</h1>
			<h6>wife, mother</h6>
		</div>
	</div>

	
	<div class="profile_content">
		<ul>
			<li>
				<div class="digits">83</div>
				Followers
			</li>
			<li>
				<div class="digits">1507</div>
				Tweets
			</li>
			<li>
				<div class="digits">234</div>
				Friends
			</li>
			<li>
				<div class="digits">51</div>
				Likes
			</li>
			<li>
				<div class="digits">42</div>
				Gits
			</li>
		</ul>
		<div class="clear"></div>
	</div>
</div>

	)
}

export default Admin