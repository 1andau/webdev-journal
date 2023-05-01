import React from 'react';
import './subscription.scss';

const Subscriptions = () => {
  return (
    <div className="subscriptions">
      <h2 className="title">My Subscriptions</h2>
      <ul className="channels">
        <li className="channel">
          <img src="https://img5tv.cdnvideo.ru/shared/files/202209/1_1589674.jpg" alt="Channel Image" className="image" />
          <div className="info">
            <h3 className="name">Channel Name 1</h3>
            <div className="description">Channel Description 1</div>
          </div>
          <button className="unsubscribe">Unsubscribe</button>
        </li>
        <li className="channel">
          <img src="https://img5tv.cdnvideo.ru/shared/files/202209/1_1589674.jpg" alt="Channel Image" className="image" />
          <div className="info">
            <h3 className="name">Channel Name 2</h3>
            <div className="description">Channel Description 2</div>
          </div>
          <button className="unsubscribe">Unsubscribe</button>
        </li>

        <li className="channel">
          <img src="https://img5tv.cdnvideo.ru/shared/files/202209/1_1589674.jpg" alt="Channel Image" className="image" />
          <div className="info">
            <h3 className="name">Channel Name 2</h3>
            <div className="description">Channel Description 2</div>
          </div>
          <button className="unsubscribe">Unsubscribe</button>
        </li>
        
        <li className="channel">
          <img src="https://img5tv.cdnvideo.ru/shared/files/202209/1_1589674.jpg" alt="Channel Image" className="image" />
          <div className="info">
            <h3 className="name">Channel Name 2</h3>
            <div className="description">Channel Description 2</div>
          </div>
          <button className="unsubscribe">Unsubscribe</button>
        </li>
        {/* //больше каналов */}
      </ul>
    </div>
  );
};

export default Subscriptions;
