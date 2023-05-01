import React from 'react'
import './chat.scss';
import Kim2 from '../assets/Kim.jpeg'


const Chat = () => {
  return (
<div className="chat-container">
  <div className="dialogues">

  <div className="dialogue">

  <div class="message">
    <div class="user">
      <div class="image">
      <img className='chatImg' src={Kim2} />
      </div>
      <div class="name">
        Sarah
      </div>
    </div>
    <div className="textBox">
    <div class="text">
      Lorem ipsum dolor sit amet, consectetur  elit. Donec non mauris
    </div>
    </div>

  </div>
  
  <div class="message">
    <div class="user">
      <div class="image">
      <img className='chatImg' src={Kim2} />
      </div>
      <div class="name">
        Sarah
      </div>
    </div>
    <div className="textBox">
    <div class="text">
      Lorem ipsum dolor sit amet, consectetur  elit. Donec non mauris
    </div>
    </div>
  </div>

  <div class="message">
    <div class="user">
      <div class="image">
      <img className='chatImg' src={Kim2} />
      </div>
      <div class="name">
        Sarah
      </div>
    </div>
    <div className="textBox">
    <div class="text">
      Lorem ipsum dolor sit amet, consectetur  elit. Donec non mauris
    </div>
    </div>
  </div>




    </div>
  </div>

  <div className="active-dialogue">
    <div className="dialogue-header">
      <h2 className="dialogue-name">Имя Контакта</h2>
      <div className="dialogue-icons">
        <i className="fas fa-phone-alt"></i>
        <i className="fas fa-video"></i>
        <i className="fas fa-info-circle"></i>
        <i className="fas fa-ellipsis-v"></i>
      </div>
    </div>
    <div className="dialogue-messages">
      <div className="message in">
        <div className="message-text">Привет!</div>
      </div>
      <div className="message out">
        <div className="message-text">Привет! Как дела?</div>
      </div>
    </div>
    <div className="dialogue-add-message">
      <textarea className="add-message" placeholder="Напишите сообщение..."></textarea>
      <button className="add-message-btn">Отправить</button>
    </div>
  </div>
</div>
  )
}

export default Chat