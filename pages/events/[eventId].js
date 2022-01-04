import { useRouter } from 'next/router';
import { Fragment } from 'react/cjs/react.production.min';
import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

const EventDetail = () => {
    const router = useRouter();
    const event = getEventById(router.query.eventId);

    if(!event) return <p>No event found.</p>;


    return <Fragment>
        <EventSummary title={event.title}></EventSummary>
        <EventLogistics 
            date={event.date}
            address={event.location}
            image={event.image}
            imageAlt={event.title}>
        </EventLogistics>
        <EventContent>
            <p>{event.description}</p>
        </EventContent>
    </Fragment>
}

export default EventDetail;