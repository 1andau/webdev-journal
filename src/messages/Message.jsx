import React from 'react'
import { Button } from '@mui/material'
import CircularProgress from '@mui/material'
import { Editor } from 'react-draft-wysiwyg'
import SendIcon from '@mui/icons-material/Send';
const Message = () => {

  return (
    <div className='ChatPage'>
  <div className='buttonsPanel'>
  <Button variant="contained" color="secondary" className="back">Назад</Button>
  </div>
  <CircularProgress color="primary" className="loader" />

  <div className='container'>
  <div  className="messagesContainer">
<h3>Сара</h3>
<p>привет мир</p>
<p>Отправка...</p>

<div className="row">
    <div className="avatar">
        <div className="message"> 
        <div className="messageHeader">
        <div className="from">sarah</div>
        <div className="dot" />
<div className="date">11.11.2023</div>
<div className="dot hide" />
<div className="replay hide">Ответить</div>
        </div>

<div className="text"/>
        </div>
        <div className="avatar">?</div>
    </div>
</div>
</div>
<div className="wysiwygContainer">
<Editor
toolbarClassName="wysiwygToolbar"
wrapperClassName="wysiwygWrapper"
editorClassName="wysiwyEditor"
/>

<SendIcon className="send">отправить</SendIcon>
</div>



</div>
    </div>
  )
}

export default Message