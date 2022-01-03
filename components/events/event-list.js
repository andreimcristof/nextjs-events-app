import EventItem from './event-item';
import styles from './event-list.module.css';

const EventList = (props) => {
    const { events } = props;

    return <ul className={styles.list}>
        {events.map(event => <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            date={event.date}
            description={event.description}
            location={event.location}
            image={event.image}
        ></EventItem>)}
    </ul>
}

export default EventList;
