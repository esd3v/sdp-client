import React, {
  FunctionComponent,
  useEffect,
  createRef,
} from 'react';
import dayjs from 'dayjs/dayjs.min';
import tippy, {followCursor} from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import {
  IconChat,
  IconLock,
  IconPin,
  IconCheck,
} from 'components/icons';
import {Props} from './types';
import * as styles from './styles';

const formatTime = (epoch: number) =>
  dayjs(epoch * 1000).format('DD.MM.YYYY @ HH:mm');

export const TopicItem: FunctionComponent<Props> = ({topic}) => {
  const refTitle: React.RefObject<HTMLAnchorElement> = createRef();
  const refIconLock: React.RefObject<HTMLSpanElement> = createRef();
  const refIconPin: React.RefObject<HTMLSpanElement> = createRef();
  const refIconCheck: React.RefObject<HTMLSpanElement> = createRef();

  useEffect(() => {
    const options = {
      duration: 0,
      followCursor: true,
      multiple: false,
      placement: 'auto' as 'auto',
      plugins: [followCursor],
    };

    if (refTitle.current) {
      tippy(refTitle.current, options);
    }

    if (refIconLock.current) {
      tippy(refIconLock.current, options);
    }

    if (refIconPin.current) {
      tippy(refIconPin.current, options);
    }

    if (refIconCheck.current) {
      tippy(refIconCheck.current, options);
    }

  }, [refIconCheck, refIconLock, refIconPin, refTitle]);

  return (
    <div className={styles.topicItem}>
      <div className={styles.top}>
        <div className={styles.header}>
          {topic.locked &&
            <IconLock
              ref={refIconLock}
              aria-label="Topic is locked"
              data-tippy-content="Topic is locked"
              className={`${styles.icon} ${styles.iconTitle}`}
            />
          }
          {topic.pinned &&
            <IconPin
              ref={refIconPin}
              aria-label="Topic is pinned"
              data-tippy-content="Topic is pinned"
              className={`${styles.icon} ${styles.iconTitle}`}
            />
          }
          {topic.answered &&
            <IconCheck
              ref={refIconCheck}
              aria-label="Topic is answered"
              data-tippy-content="Topic is answered"
              className={`${styles.icon} ${styles.iconTitle}`}
            />
          }
          <a
            className={styles.title}
            href={topic.url}
            data-tippy-content={topic.tooltip}
            ref={refTitle}
          >{topic.title}
          </a>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.author}>{topic.author}</div>
        <div>{formatTime(topic.timestamp)}</div>
        <IconChat className={`${styles.icon} ${styles.iconChat}`}/>
        <div>{topic.replyCount}</div>
      </div>
    </div>
  );
};
