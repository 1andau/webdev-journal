import React from 'react';
import styles from './Post.module.scss';
import { Paper, Typography } from '@mui/material';
const Post = () => {
  return (
    <div>
      <Paper elevation={0} className="p-20">
        <Typography variant="h1" className={styles.title}>
         Eminem - Stan
        </Typography>
        <Typography className={styles.postsBlock}>
          My tea's gone cold, I'm wondering why I Got out of bed at all The morning rain clouds up
          my window And I can't see at all And even if I could it'll all be gray But your picture on
          my wall It reminds me, that it's not so bad It's not so bad My tea's gone cold, I'm
          wondering why I Got out of bed at all The morning rain clouds up my window (window) And I
          can't see at all And even if I could it'll all be gray But your picture on my wall It
          reminds me, that it's not so bad It's not so bad Dear Slim, I wrote you but you still
          ain't callin' I left my cell, my pager, and my home phone at the bottom I sent two letters
          back in autumn, you must not've got 'em There probably was a problem at the post office or
          somethin' Sometimes I scribble addresses too sloppy when I jot 'em But anyways, fuck it,
          what's been up, man? How's your daughter? My girlfriend's pregnant too, I'm 'bout to be a
        </Typography>
        <a className={styles.a} href=""> read more</a>

        <img className={styles.image} src='https://www.socialketchup.in/wp-content/uploads/2018/09/killshot.jpg' />
        
      </Paper>
    </div>
  );
};
export default Post;
