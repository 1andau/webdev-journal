import React from 'react'
import Popup from "reactjs-popup";
import { useState } from 'react';
import './notification.scss';
import Avatar from '@mui/material/Avatar';
import Kim2 from '../assets/Kim.jpeg'
const Notifications = () => {

    return (
<>

<div class="notification">
<div className="box">
<div class="avatar">
    <img src={Kim2} alt="" />
  </div>
  <div class="content">
    <div class="header">
      <a href="#" class="name">Kim</a>
      <span class="time">5 минут назад</span>
    </div>
    <div class="message">Текст уведомления или лайка</div>
  </div>
</div>

<div className="box">
<div class="avatar">
    <img src={Kim2} alt="" />
  </div>
  <div class="content">
    <div class="header">
      <a href="#" class="name">Kim</a>
      <span class="time">5 минут назад</span>
    </div>
    <div class="message">лайка</div>
  </div>
</div>


</div>




{/* <div className="popup-notification">
  <div className="notification__header">
    Новое уведомление
  </div>
  <div className="notificationContainer">
    <div class="notification__avatar">
<img src={Kim2} alt="" />
       <p><strong>@johndoe</strong> нравится ваш пост</p>
        </div>

        <div class="notification__avatar">
        <img src={Kim2} alt="" />
        <p><strong>@annasmith</strong> прокомментировала ваш пост</p>
    </div>
    </div>
</div> */}
</>
  
  )
}

export default Notifications