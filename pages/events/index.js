import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';

const Events = () => {
    const events = getAllEvents();

    return <EventList events={events}></EventList>
}
export default Events;