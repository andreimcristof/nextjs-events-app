import {  getFeaturedEvents } from './dummy-data';
import EventList from '../components/events/event-list';

const Home = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
        <EventList events={featuredEvents}></EventList>            
    </div>
  )
}
export default Home;
