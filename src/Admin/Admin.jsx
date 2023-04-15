import React from 'react'

const Admin = () => {
  return (
<div id="options" class="options">
		<div class="head">
			<div id="close-options" class="close icon">
				<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
					<line x1="19" y1="12" x2="5" y2="12"></line>
					<polyline points="12 19 5 12 12 5"></polyline>
				</svg>
			</div>
		</div>
		
		<div class="info">
			<div class="person photo">
				<div class="online"></div>
			</div>
			<h2 class="name">Millie</h2>
			<div class="buttons">
				<div class="button">
					<div class="icon">
						<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
						<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
						</svg>
					</div>
					<p class="title">Audio</p>
				</div>
				<div class="button">
					<div class="icon">
						<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
							<polygon points="23 7 16 12 23 17 23 7"></polygon>
							<rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
						</svg>
					</div>
					<p class="title">Video</p>
				</div>
				<div class="button">
					<div class="icon">
						<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
							<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
							<circle cx="12" cy="7" r="4"></circle>
						</svg>
					</div>
					<p class="title">Profile</p>
				</div>
				<div class="button">
					<div class="icon">
						<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
							<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
							<path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
						</svg>
					</div>
					<p class="title">Mute</p>
				</div>
			</div>
			<hr />
			<div class="details">
				<label class="search-field">
					<div class="icon">
						<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
							<circle cx="11" cy="11" r="8"></circle>
							<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
						</svg>
					</div>
					<input id="search" class="search" type="text" placeholder="Search"/>
				</label>
				<label class="dark-mode">
					<span class="label">Dark Mode</span>
					<input id="input-dark" class="input-dark" type="checkbox" />
					<div class="toggle">
						<div class="circle"></div>
					</div>
				</label>
				<div class="theme">
					<span class="label">Theme</span>
					<div class="colors">
						<div id="color-blue" class="color blue"></div>
						<div id="color-red" class="color red"></div>
						<div id="color-green" class="color green"></div>
						<div id="color-purple" class="color purple"></div>
					</div>
				</div>
				<div class="media">
					<span class="label">
						<svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
						</svg>
						<span>Shared photos</span>
					</span>
					<div class="photos">
						<img class="img" src="https://i.imgur.com/8jqYvFL.jpeg"/>
						<img class="img" src="https://i.imgur.com/jlFgGpe.jpeg"/>
						<img class="img" src="https://i.imgur.com/BfyXuwR.gif"/>
					</div>
					<span class="view-more">View more</span>
				</div>
			</div>
		</div>
	</div>  )
}

export default Admin