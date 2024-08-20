import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EventList = ({ events, staticEvents, setSelectedEvent, iconMapping }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {events.length > 0
        ? events.map((event) => (
            <div key={event.id} className="bg-white p-5 rounded-md shadow-md mb-5 text-left">
              <h3 className="text-xl font-semibold mb-2">
                <FontAwesomeIcon icon={iconMapping[event.icon] || iconMapping.faLandmark} className="mr-2" />
                {event.summary}
              </h3>
              <button onClick={() => setSelectedEvent(event)} className="text-blue-500 underline">
                More Details
              </button>
            </div>
          ))
        : (
            staticEvents.length > 0
              ? staticEvents.map((event) => (
                  <div key={event.id} className="bg-white p-5 rounded-md shadow-md mb-5 text-left">
                    <h3 className="text-xl font-semibold mb-2">
                      <FontAwesomeIcon icon={iconMapping[event.icon]} className="mr-2" />
                      {event.summary}
                    </h3>
                    <p>{event.details}</p>
                  </div>
                ))
              : (
                  <p className="text-gray-500">No events found</p>
                )
        )}
    </div>
  );
};

export default EventList;
