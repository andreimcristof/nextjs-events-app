import Link from 'next/link';
import Button from '../ui/button';
import styles from './event-item.module.css';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';


const EventItem = (props) => {
    const { title, image, date, location, id } = props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;
    
    return <li className={styles.item}>
        <img src={`/${image}` } alt='event image' width={180} height={140}></img>
        <div className={styles.content}>
            <div className={styles.summary}>
                <h2>{title}</h2>
                <div className={styles.date}>
                    <DateIcon></DateIcon>
                    <time dateTime="">{humanReadableDate}</time>
                </div>
                <div className={styles.address}>
                    <AddressIcon></AddressIcon>
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div className={styles.actions}>
                <Button link={exploreLink}>
                    <span>Explore Event</span>
                    <span className={styles.icon}><ArrowRightIcon></ArrowRightIcon></span>
                </Button>
            </div>
        </div>
    </li>
}

export default EventItem;