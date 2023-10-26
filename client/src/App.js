import { useState, useEffect } from 'react'
import { fetchCalenderEvents } from './utils';
import { Navbar, Calender } from './components'

function App() {
  const [CalenderEvents, setCalenderEvents] = useState([])

  useEffect(function () {
    fetchCalenderEvents().then(function (data) {
      const { events } = data;

      setCalenderEvents(events)
    })
  }, [])

  return (
    <div>
      <Navbar />

      <Calender events={CalenderEvents} />

      {/* <ul>
        {CalenderEvents.map(function (event, index) {
          const calenderDate = new Date(event.date);

          return <li key={index}>{event.label} - {calenderDate.toLocaleDateString()}</li>
        })}
      </ul> */}
    </div>
  );
}

export default App;
