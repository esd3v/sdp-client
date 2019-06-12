import * as React from 'react';
import dayjs from 'dayjs/dayjs.min';
import tippy from 'tippy.js';
import {Props} from './types';
// import iconLock from 'assets/icons/lock.svg';
import * as styles from './styles';
import {
  // Icon,
  IconChat,
  IconLock,
  IconPin,
  IconCheck,
} from 'components/icons';

export class TopicItem extends React.Component<Props> {
  public refTitle: React.RefObject<HTMLAnchorElement> = React.createRef();
  public refIconLock: React.RefObject<HTMLSpanElement> = React.createRef();
  public refIconPin: React.RefObject<HTMLSpanElement> = React.createRef();
  public refIconCheck: React.RefObject<HTMLSpanElement> = React.createRef();

  public componentDidMount() {
    const options = {
      duration: 0,
      followCursor: true,
      multiple: false,
      placement: 'auto' as 'auto',
    };

    tippy(this.refTitle.current as Element, options);
    tippy(this.refIconLock.current as Element, options);
    tippy(this.refIconPin.current as Element, options);
    tippy(this.refIconCheck.current as Element, options);
  }

  public render() {
    const {topic} = this.props;

    return (
      <div className={styles.topicItem}>
        <div className={styles.top}>
          <div className={styles.header}>
            {topic.locked &&
              <IconLock
                ref={this.refIconLock}
                aria-label="Topic is locked"
                data-tippy-content="Topic is locked"
                className={`${styles.icon} ${styles.iconTitle}`}
              />
            }
            {topic.pinned &&
              <IconPin
                ref={this.refIconPin}
                aria-label="Topic is pinned"
                data-tippy-content="Topic is pinned"
                className={`${styles.icon} ${styles.iconTitle}`}
              />
            }
            {topic.answered &&
              <IconCheck
                ref={this.refIconCheck}
                aria-label="Topic is answered"
                data-tippy-content="Topic is answered"
                className={`${styles.icon} ${styles.iconTitle}`}
              />
            }
            <a
              className={styles.title}
              href={topic.url}
              data-tippy-content={topic.tooltip}
              ref={this.refTitle}
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
  }
}

const formatTime = (epoch: number) =>
  dayjs(epoch * 1000).format('DD.MM.YYYY @ HH:mm');
