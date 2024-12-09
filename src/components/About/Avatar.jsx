import sc from './Avatar.module.css';

import ELLIPSE from '../../assets/images/Ellipse background.png'
import PHOTO_2 from '../../assets/images/photo 2.png'

const Avatar = () => {
  return (
    <div className={sc.avatar}>
      <img src={ELLIPSE} alt="avatar background" className={sc.avatar__ellipse} />
      <div className={sc.avatar__background}>
        <img src={PHOTO_2} alt="avatar" className={sc.avatar__photo} />
      </div>
    </div>
  );
};

export default Avatar;
