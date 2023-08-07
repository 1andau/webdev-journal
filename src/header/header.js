import React from 'react'
import styles from './Header.module.scss';
import { Paper, Button,  IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CreateIcon from '@mui/icons-material/Create';
import MessageIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import Notifications from '../notifications/Notifications';
import { useState, useEffect, useRef } from 'react';
import Popup from "reactjs-popup";

const Header = () => {
const [isOpen, setIsOpen] = useState(false);



  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
  

  <Link to="/posts">
  <h4 className={styles.nameLogo}> <span className={styles.hhtps}>: //</span> Landau</h4>
  </Link>
        <div className={styles.searchBlock}>
          <SearchIcon />
          <input type="text" placeholder="Поиск" />
        </div>

        <Link to='/createPost'>
        <Button className={styles.penButton}>
          <CreateIcon />
        </Button>
        </Link>

      </div>
      <div className="d-flex align-center">
       {/* //message */}
       <Link to='/chat'>
        <IconButton>
         <div class="notif">
         <button data-notification-count="1" id="notification-btn">       
          <MessageIcon />
        </button>
        </div>       
        </IconButton>
        </Link>

        {/* //notification */}
        {/* <Link to='/notifications'> */}
        <IconButton>
        <div class="notif">
         <button data-notification-count="1" id="notification-btn">
          <NotificationsIcon onClick={() => setIsOpen(true)} />
          <Popup
          open={isOpen}
          onClose={() => setIsOpen(false)}
          closeOnDocumentClick
       
        >
          <div className="notification">
            <Notifications/>
            <button className='closeBtn' onClick={() => setIsOpen(false)}>Close</button> 
          </div>
        </Popup>


        </button>
        </div>
        </IconButton>



     
      <Link to='/admin'>
     <Avatar
          className={styles.avatar}
          alt="Remy Sharp"
          src="https://img5tv.cdnvideo.ru/shared/files/202209/1_1589674.jpg"
        />
       </Link>

        {/* <ExpandMoreIcon /> */}
      </div>
    </Paper>
  )
}

export default Header