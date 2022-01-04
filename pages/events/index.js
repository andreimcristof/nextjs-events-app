import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { Fragment } from 'react/cjs/react.production.min';
import { useRouter } from 'next/router';

const Events = () => {
    const router = useRouter();
    const events = getAllEvents();

    const findEventsHandler = (year, month) => {
        const path = `/events/${year}/${month}`;
        router.push(path);
    }

    return <Fragment>
        <EventsSearch onSearch={findEventsHandler}></EventsSearch>
        <EventList events={events}></EventList>
    </Fragment>
}
export default Events;