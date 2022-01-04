import {useRouter} from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';

const FilteredEvents =() => {
    const router = useRouter();
    const filterData = router.query.slug;
    if(!filterData) return <p className='center'>Loading...</p>

    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];
    const year = +filteredYear;
    const month = +filteredMonth;

    if(isNaN(year) || isNaN(month)) return <p>Invalid filter, please adjust your values.</p>

    const events = getFilteredEvents({ year, month })
    if (!events || events.length === 0) return <p>No events found.</p>
    
    return <EventList events={events} />
}
export default FilteredEvents;