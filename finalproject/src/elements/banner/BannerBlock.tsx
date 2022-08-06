import { FC } from 'react';
// Styles
import styles from './BannerBlock.module.scss';
import { Banner } from 'interfaces/Banner.types';
import { useWindowSize } from 'hooks/useWindowSize';
import classNames from 'classnames';
import globalStyle from '../../styles/global/global.module.scss';

// Interfaces
interface Props {
  banner: Banner;
}

const BannerBlock: FC<Props> = ({ banner }) => {
  const size = useWindowSize();

  return (
    <div className={styles.banner}>
      <div
        className={styles.wrapper}
        style={{
          backgroundImage:
            size.width > 1024
              ? `url(${banner.image})`
              : `url(${banner.smallImage})`,
        }}
      ></div>
      <div className={styles.bannerContent}>
        <div className={styles. contentBlock}>
          <div className={styles.logo}>
            <img src={banner.logo} alt={banner.title} />
          </div>
          <h2 className={styles.title}>{banner.title}</h2>
          <div className={styles.description}>{banner.description}</div>
          <a href={banner.link} target='_blank' className={styles.link}>
            {banner.linktitle}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerBlock;
