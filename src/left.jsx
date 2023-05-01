import React from 'react'
import { Button } from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import MessageIcon from '@mui/icons-material/Sms';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import  './LeftMenu.scss';
import { Link } from 'react-router-dom';
import QuizIcon from '@mui/icons-material/Quiz';

const Left = () => {


  return (
    <>
    <div className='menu'>
      <ul>
      <Link to="/posts">
      <li>
          <Button>
          <div class="notificationLeft">
         <button data-notification-count="1" id="notificationLeft-btn">
            <LocalFireDepartmentIcon  />
            </button>
        </div>
            Лента
          </Button>
        </li>
            </Link>
        <li>
        <Link to='/messages'>
          <Button>
          <div class="notificationLeft">
         <button data-notification-count="1" id="notificationLeft-btn">
            <MessageIcon />
            </button>
        </div>
            Сообщения
            
          </Button>
        
          </Link>

        </li>
        <li>
        <Link to='/tests'>
          <Button>
            <QuizIcon />
            Тесты
          </Button>
          </Link>

        </li>
        <li>
        <Link to='/subscriptions'>
          <Button>
            <FormatListBulletedIcon />
            Подписки
          </Button>
          </Link>

        </li>
      </ul>
    </div>     
    



    </>
 
    )
}

export default Left