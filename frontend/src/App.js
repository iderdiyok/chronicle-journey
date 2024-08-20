import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import EventDetail from './EventDetail';
import { useTranslation } from 'react-i18next';
import './i18n';
import heroImage from './ChronicleJourney.svg';
import DropdownMenu from './components/DropdownMenu';
import ErrorAlert from './components/ErrorAlert';
import LoadingSpinner from './components/LoadingSpinner';
import EventList from './components/EventList';
import { iconMapping } from './constants/icons';

function App() {
  const { t, i18n } = useTranslation();
  const [birthDate, setBirthDate] = useState('');
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [staticEvents, setStaticEvents] = useState([]);

  useEffect(() => {
    const loadStaticEvents = async () => {
      try {
        const response = await fetch(`/data/events.json`);
        const data = await response.json();
        setStaticEvents(data[i18n.language] || []);
      } catch (error) {
        console.error('Error loading static events:', error);
      }
    };
    loadStaticEvents();
  }, [i18n.language]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const fetchEvents = useCallback(async () => {
    if (!birthDate) {
      setError(t('pleaseSelectDate'));
      return;
    }
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`http://localhost:5008/events`, {
        params: { date: birthDate, lang: i18n.language },
      });
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
      setError(t('fetchError'));
    } finally {
      setLoading(false);
    }
  }, [birthDate, i18n.language, t]);

  return (
    <div>
      <ErrorAlert error={error} />
      <div 
        className="relative text-center text-white py-20 bg-cover bg-center" 
        style={{ backgroundImage: `url('/img/hero_bg.png')` }}
      >
        <div className="flex justify-around items-center mb-6">
          <img src={heroImage} alt="Logo" className="max-w-[300px]" />
          <DropdownMenu />
        </div>
        <div className="max-w-xl mx-auto">
          <div>
            <label htmlFor="dateInput" className="block">{t('dateInputLabel')}</label>
            <input
              id="dateInput"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="border border-gray-300 p-2 rounded-md mb-4 w-full text-gray-700"
            />
          </div>
          <div className='text-center'>
            <button
              onClick={fetchEvents}
              className="bg-[#8ab2ff] text-white py-2 rounded-md hover:bg-[#3b1fc6] w-1/2 shadow-bottom-blue"
            >
              {t('fetchEventsButton')}
            </button>
          </div>
        </div>

        {loading && <LoadingSpinner />}
      </div>
      <div className="max-w-7xl mx-auto p-6">
        <EventList 
          events={events} 
          staticEvents={staticEvents} 
          setSelectedEvent={setSelectedEvent} 
          iconMapping={iconMapping}
        />
        {selectedEvent && <EventDetail event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
      </div>
    </div>
  );
}

export default App;
