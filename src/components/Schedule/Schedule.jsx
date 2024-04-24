import styles from '../../style'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useEffect, useState } from 'react'
import { sessionsData } from './clasesData'
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

    const clasesPorDia = {
        'Monday': [
          { title: 'Clase Fitness', monitor: 'Juanjo', start: '09:00', end: '10:30', color: 'blue' },
          { title: 'Clase Yoga', monitor: 'Antonio', start: '11:00', end: '12:00', color: 'green' },
          { title: 'Clase Funcional', monitor: 'Paula', start: '18:00', end: '19:30', color: 'coral' },
        ],
        'Tuesday': [
          { title: 'Clase Spinning', monitor: 'Adrián', start: '09:00', end: '10:30', color: 'salmon' },
          { title: 'Clase HIIT', monitor: 'Fran', start: '11:00', end: '12:00', color: 'red' },
          { title: 'Clase Pilates', monitor: 'Noe', start: '18:00', end: '19:30', color: 'brown' },
          { title: 'Clase GAP', monitor: 'Paula', start: '16:00', end: '17:30', color: 'gray' },
        ],
        'Wednesday': [
          { title: 'Clase Fitness', monitor: 'Juanjo', start: '09:00', end: '10:30', color: 'blue' },
          { title: 'Clase Yoga', monitor: 'Antonio', start: '11:00', end: '12:00', color: 'green' },
          { title: 'Clase Funcional', monitor: 'Paula', start: '18:00', end: '19:30', color: 'coral' },
        ],
        'Thursday': [
          { title: 'Clase Spinning', monitor: 'Adrián', start: '09:00', end: '10:30', color: 'salmon' },
          { title: 'Clase HIIT', monitor: 'Fran', start: '11:00', end: '12:00', color: 'red' },
          { title: 'Clase Pilates', monitor: 'Noe', start: '18:00', end: '19:30', color: 'brown' },
          { title: 'Clase GAP', monitor: 'Paula', start: '16:00', end: '17:30', color: 'gray' },
        ],
        'Friday': [
          { title: 'Clase Fitness', monitor: 'Juanjo', start: '09:00', end: '10:30', color: 'blue' },
          { title: 'Clase Yoga', monitor: 'Antonio', start: '11:00', end: '12:00', color: 'green' },
          { title: 'Clase Funcional', monitor: 'Paula', start: '18:00', end: '19:30', color: 'coral' },
        ],
    };
      
    const generarEventosAnuales = () => {
        const eventosAnuales = [];
        const fechaInicial = new Date(Date.UTC(2024, 1, 1)); // Fecha inicial en UTC
        const fechaFinal = new Date(Date.UTC(2024, 12, 31)); // Fecha final en UTC
      
        const fechaActual = new Date(fechaInicial);
        while (fechaActual <= fechaFinal) {
          try{
            const diaDeLaSemana = fechaActual.toLocaleDateString('en', { weekday: 'long', timeZone: 'UTC' });
            const clasesDelDia = clasesPorDia[diaDeLaSemana];
            if (clasesDelDia) {
            const eventosDelDia = clasesDelDia.map(clase => ({
                ...clase,
                start: fechaActual.toISOString().slice(0, 10) + 'T' + clase.start + ':00',
                end: fechaActual.toISOString().slice(0, 10) + 'T' + clase.end + ':00',
            }));
            eventosAnuales.push(...eventosDelDia);
            } else {
                //console.log(`No hay clases definidas para ${diaDeLaSemana}`);
            }
          }
          catch(error){
            console.log(error)
          }
          
          //console.log("Eventos --> ", eventosDelDia)
          
      
          fechaActual.setDate(fechaActual.getDate() + 1); // Avanzar al siguiente día
        }
    
        console.log(JSON.stringify(eventosAnuales))
        return JSON.stringify(eventosAnuales);
    };
      
    const eventosSemanales = generarEventosAnuales();
          

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
                
                events={sessionsData}
                eventContent={(eventInfo) => {
                    return (
                        <div className="event-content">
                            <div>{eventInfo.timeText}</div>
                            <div>{eventInfo.event.title} - Monit@r: {eventInfo.event.extendedProps.monitor}</div>
                        </div>
                    );
                }}
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
