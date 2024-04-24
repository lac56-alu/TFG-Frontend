import styles from '../../style'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useEffect, useState } from 'react'
import { sessionsData } from './sessionsData'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from '@fullcalendar/timegrid';


export default function Schedule() {
    const [calendarView, setCalendarView] = useState('timeGridWeek');

    useEffect(() => {
        function handleResize() {
          if (window.innerWidth <= 768) {
            setCalendarView('timeGridDay');
          } else {
            setCalendarView('timeGridWeek');
          }
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const eventosSemanales = [
        { title: 'Clase Pilates', start: '2024-04-24T09:00:00', end: '2024-04-24T12:00:00' },
        { title: 'Clase Yoga', start: '2024-04-24T18:00:00', end: '2024-04-24T19:00:00' },
        { title: 'Clase Capoeira', start: '2024-04-25T13:00:00', end: '2024-04-24T14:00:00' },
    ];

    const slotLabelContent = (arg) => {
        const date = new Date(arg.date);
        const hour = date.getHours();
        const minute = date.getMinutes().toString().padStart(2, '0');
        return `${hour}:${minute}`;
    };

  return (
    <div className="bg-primary w-full overflow-hidden">
        <div className={` ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`${styles.flexCenter} sm:flex-row flex-col `} >
            <div className="flex flex-col justify-center items-center">
                <div className="text-center">
                    <h2 className={`${styles.heading2}`}>
                        Horario
                    </h2>
                </div>
            </div>
        </div>

        <div className={`${styles.marginY} text-white`}>
            <FullCalendar
                plugins={[ dayGridPlugin, timeGridPlugin ]}
                timeZone= 'UTC'
                locale= 'es'
                height={800}
                allDaySlot={false}
                expandRows={true}
                weekends={false}
                slotDuration= '02:00:00'
                slotMinTime= '09:00:00'
                slotMaxTime= '21:00:00'
                
                slotLabelContent={slotLabelContent}

                slotEventOverlap={true}
                headerToolbar= {{
                    left: 'prev,next',
                    center: 'title',
                    right: 'timeGridWeek,dayGridDay' // estará normalmente a la derecha. Si RTL, estará a la izquierda
                }}
                
                events={eventosSemanales}
                firstDay={1}
                initialView={calendarView}

                views={{
                    dayGridDay: {
                        allDaySlot: false,
                        expandRows: true,
                        weekends: false,
                        slotDuration: '02:00:00',
                        slotMinTime: '09:00:00',
                        slotMaxTime: '21:00:00',
                    }
                }}
            />
        </div>

      
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Footer />
            </div>
        </div>
    </div>
  )
}
