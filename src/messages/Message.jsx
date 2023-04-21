import React from 'react'
import { Avatar, Button, experimental_extendTheme } from '@mui/material'
// import CircularProgress from '@mui/material'
// import { Editor } from 'react-draft-wysiwyg'
import SendIcon from '@mui/icons-material/Send';
import './message.scss'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import moment from 'moment';
import Eminem from '../assets/em.jpeg'
import Kim from '../assets/Kim.jpeg'
import Send from '@mui/icons-material/Send';
const messages = [
    {
        author: "Marshall", 
        message: 'fuck you, Mariah Carey', 
        date: '11.11.23', 
        avatar: 'https://img5tv.cdnvideo.ru/shared/files/202209/1_1589674.jpg', 


    },     {
        author: "Mariah Carey", 
        message: 'Asshole, Marshall', 
        date: '11.11.23', 
        avatar: 'https://cdn.britannica.com/13/238513-050-98B05E9E/Mariah-Carey-American-pop-singer-2019.jpg', 

    },
    {
        author: "Kimberly Ann Scott,", 
        message: 'fuck you, ALL', 
        date: '11.11.23', 
        avatar: 'https://turntable.kagiso.io/images/kim_and_eminem.width-800.png', 

    },   
      {
        author: "Mariah Carey", 
        message: 'Marshall and Kim fuck off, Ill write a mean song about you', 
        date: '11.11.23', 
        avatar: 'https://cdn.britannica.com/13/238513-050-98B05E9E/Mariah-Carey-American-pop-singer-2019.jpg', 

    },
    {
        author: "Mariah Carey", 
        message: 'Marshall and Kim fuck off, Ill write a mean song about you', 
        date: '11.11.23', 
        avatar: 'https://cdn.britannica.com/13/238513-050-98B05E9E/Mariah-Carey-American-pop-singer-2019.jpg', 

    },
]

const Message = () => {
const navigate = useNavigate(); 

return(
<>


<div id="chat" class="chat">
	<div class="conversation">
		<div class="head">
        <Avatar src={Kim}> </Avatar>

			<h3 class="person-name">Kim</h3>
			<div class="buttons">
				<svg title="Call" class="audio-call icon" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg">
					<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
				</svg>
				<svg title="Video-call" class="video-call icon" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg">
					<polygon points="23 7 16 12 23 17 23 7"></polygon>
					<rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
				</svg>
				<svg id="button-options" class="button-option icon"  stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg">
					<circle cx="12" cy="12" r="10"></circle>
					<line x1="12" y1="16" x2="12" y2="12"></line>
					<line x1="12" y1="8" x2="12.01" y2="8"></line>
				</svg>
			</div>
		</div>


        {messages.map((message, i) => (
    
		<div id="messages" class="messages">
            <div className="time">{moment().format("DD.MM.YYYY HH:mm")}</div>
			<div class="msg-text">
            <Avatar src={Kim}> </Avatar>
				<span class="text">{message.message}</span>
			</div>
	
			<div class="msg-text owner">
				<span class="text">{message.message}</span>
                <Avatar src={Eminem}/>

			</div>	
		</div>
		
        ))}
		<div class="field">
			<svg class="emoji icon" stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
	  </svg>
			<input id="input-message" class="input-message" type="text" placeholder="Type something..." />
			<div class="icon plus">
				<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
					<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
				</svg>
			</div>
			<div id="send-text" class="icon send text">
				<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
					<line x1="22" y1="2" x2="11" y2="13"></line>
					<polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
				</svg>
			</div>
			<div id="send-audio" class="icon send audio">
			<Send/>
			</div>
		</div>
	</div>
	
	
</div>
</>

    )  
}

export default Message