import React from 'react'
import styles from './Header.module.scss';
import { Paper, Button,  IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CreateIcon from '@mui/icons-material/Create';
import MessageIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Settings } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Header = () => {
const navigate = useNavigate()

  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        {/* <IconButton >
          <MenuIcon />
        </IconButton> */}
        {/* <img
          className={styles.logo}
          src='https://images.squarespace-cdn.com/content/v1/6302b0eb1ce871273c7debd1/14c3a21f-e8f9-4a4e-b68f-8f4e70d3e32b/Sarah+Johnson+Logo.png'         
        /> */}






        <h4 className={styles.nameLogo}> <span className={styles.hhtps}>: //</span> Landau</h4>
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
        <Link to='/notifications'>
        <IconButton>
        <div class="notif">
         <button data-notification-count="1" id="notification-btn">
          <NotificationsIcon />
        </button>
        </div>

        </IconButton>

         </Link>
         
        {/* //settings */}
        {/* <Link to='/settings'>
        <IconButton>
        <Settings />
        </IconButton>
        </Link> */}

     
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