import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        includes: "Includes",
        itinerary: "Itinerary",
        book: "Book",
        faq: "FAQ"
      },
      menorcaPage: {
        heroTitle: "MENORCA",
        heroSubtitle: "A Mediterranean Sanctuary. Five days. Padel, lifestyle, tranquility.",
        heroMeta: "30 Sep – 4 Oct 2026 · Menorca · All-Inclusive",
        bookBtn: "View the experience",
        agendaTitle: "The Itinerary",
        itineraryEyebrow: "Programme",
        itineraryTitle: "The Itinerary",
        faqTitle: "Frequently Asked Questions",
        faqViewLess: "View less",
        faqViewAll: "View all questions",
        whatsIncluded: {
          title: "What's included?",
          subtitle: "From arrival to departure, every detail of your retreat is taken care of - coaching, dining, transport, activities, all included.",
          pillars: [
            {
              tag: "Elite Coaching",
              title: "Where You'll Train — Padelin",
              subtitle: "Menorca's premier padel venue and home to world #1 Gemma Triay",
              bullets: [
                "Train where Gemma Triay, one of the world's top padel players, sharpens her game",
                "Receive expert coaching from former professionals who tailor each session to your level",
                "Enjoy access to quality amenities including changing rooms, a bar/restaurant, and an outdoor terrace",
                "Located in Sant Lluís, just a short drive from the hotel"
              ]
            },
            {
              tag: "Luxury Stay",
              title: "Luxury Stay at Barceló Nura",
              subtitle: "A 5-star coastal retreat in Biniancollet, where contemporary design meets Menorca's natural beauty",
              bullets: [
                "Spacious, light-filled rooms with private terraces or semiprivate pools, designed for rest and comfort",
                "Access to a full-service spa, indoor and outdoor pools, and a modern fitness center",
                "Nestled just steps from the Mediterranean, offering peaceful views and golden sunsets",
                "Daily breakfast and Mediterranean-inspired cuisine served in stylish, tranquil surroundings"
              ]
            },
            {
              tag: "Fine Dining",
              title: "Flavours of Menorca",
              subtitle: "A curated culinary journey",
              bullets: [
                "Handpicked restaurants offering a mix of Mediterranean flavours, fresh seafood, and high-quality meat and vegetarian options",
                "Scenic dining settings ranging from waterfront terraces to vibrant spots in the heart of Mahón and along the port",
                "A special lunch or dinner at a Michelin-recognised restaurant, included as part of the experience",
                "A focus on authentic, seasonal ingredients and relaxed, social meals that reflect the island's charm"
              ]
            },
            {
              tag: "Unforgettable island adventures",
              title: "Beyond the Court",
              subtitle: "Venture off the court and immerse yourself in Menorca's exciting outdoor adventures",
              bullets: [
                "Discover the charm of Mahón with a guided tour through its historic streets and vibrant port",
                "Enjoy a vineyard tour and curated wine and food tasting at Binifadet, featuring local cheeses and delicacies",
                "Enjoy a breathtaking sunset at Cova d'en Xoroi, set on a cliff above the Mediterranean",
                "The activities mentioned above are included in our itinerary, with additional options available upon request"
              ]
            }
          ]
        },
        agenda: [
          {
            dayStr: 'Day 01',
            date: 'Tue 30 Sep',
            label: 'Arrival & Welcome',
            activities: [
              {
                time: 'Morning',
                title: 'Arrival & Check-In',
                desc: 'Private transfers from the airport to Barceló Nura. Welcome drinks on arrival and welcome packs in rooms.',
                image: '/imagenes/EM-4.webp',
              },
              {
                time: '14:00 – 16:30',
                title: 'Seaside Lunch',
                desc: 'Enjoy a relaxing seaside lunch to kick off the retreat and connect with fellow guests.',
                image: '/imagenes/Cala en porter.webp',
              },
              {
                time: '17:00 – 18:30',
                title: 'Warm-Up Padel Session',
                desc: 'Easy intro session at Padelin. Mixers to warm up the group in a relaxed, social format.',
                image: '/imagenes/JOPS-721.webp',
              },
              {
                time: '20:00',
                title: 'Welcome Dinner',
                desc: 'Opening dinner at Ses Forquilles restaurant in Mahón. Group reservation confirmed.',
                image: '/imagenes/restaurante-interior.jpg',
              },
            ],
          },
          {
            dayStr: 'Day 02',
            date: 'Wed 1 Oct',
            label: 'Padel & Boat Tour',
            activities: [
              {
                time: '08:30 – 09:15',
                title: 'Breakfast — Barceló Nura',
                desc: 'Group breakfast with reserved seating at the hotel. Fuel up before a full morning on court.',
                image: '/imagenes/hotel-terrace.jpg',
              },
              {
                time: '10:00 – 12:00',
                title: 'Padel Coaching & Matchplay',
                desc: 'Court sessions at Padelin with coach-led drills and competitive matchplay.',
                image: '/imagenes/EM-81.webp',
              },
              {
                time: '13:45 – 17:30',
                title: 'Lunch & Boat Tour — Sa Punta',
                desc: 'Lunch at Sa Punta restaurant followed by a charter boat tour from Es Castell.',
                image: '/imagenes/sa punta.webp',
              },
              {
                time: '20:00',
                title: 'Dinner — Hotel / Free Evening',
                desc: 'Hotel meal included. Concierge available to assist with restaurant recommendations.',
                image: '/imagenes/restaurante-interior.jpg',
              },
            ],
          },
          {
            dayStr: 'Day 03',
            date: 'Thu 2 Oct',
            label: 'Padel & Vineyard',
            activities: [
              {
                time: '08:30 – 09:15',
                title: 'Breakfast — Barceló Nura',
                desc: 'Group breakfast with reserved seating. Skill-grouped sessions briefed at the table.',
                image: '/imagenes/hotel-terrace.jpg',
              },
              {
                time: '10:00 – 12:00',
                title: 'Padel Coaching & Matches',
                desc: 'Skill-grouped sessions at Padelin. Technical improvement and competitive play.',
                image: '/imagenes/EM-53.webp',
              },
              {
                time: '13:30 – 16:30',
                title: 'Vineyard Tour & Lunch — Binifadet',
                desc: 'Tour and lunch at Binifadet winery. Wine & cheese tasting included.',
                image: '/imagenes/binifadet.webp',
              },
              {
                time: '20:00',
                title: 'Dinner — La Calita',
                desc: 'Dinner at La Calita restaurant. Hotel meal included.',
                image: '/imagenes/IMG_2914.webp',
              },
            ],
          },
          {
            dayStr: 'Day 04',
            date: 'Fri 3 Oct',
            label: 'Tournament & Sunset',
            activities: [
              {
                time: '07:30 – 08:15',
                title: 'Early Breakfast — Barceló Nura',
                desc: 'Tournament day starts early. Hydration packs ready and group seating reserved.',
                image: '/imagenes/hotel-terrace.jpg',
              },
              {
                time: '09:00 – 13:00',
                title: 'Padel Tournament — Padelin',
                desc: 'Mixed doubles round-robin tournament at Padelin. Trophy and prizes confirmed with venue.',
                image: '/imagenes/EM-22.webp',
              },
              {
                time: '13:00 – 14:30',
                title: 'Tournament Lunch & Awards',
                desc: 'On-site lunch at Padelin followed by the awards and trophy presentation ceremony.',
                image: '/imagenes/IMG_2167.webp',
              },
              {
                time: '17:00 – 19:00',
                title: "Sunset & Tapas — Cova d'en Xoroi",
                desc: "Live music, tapas and cocktails at the iconic Cova d'en Xoroi. Sunset at ~19:30.",
                image: '/imagenes/cap roig.webp',
              },
            ],
          },
          {
            dayStr: 'Day 05',
            date: 'Sat 4 Oct',
            label: 'Final Session & Farewell',
            activities: [
              {
                time: '08:30 – 09:15',
                title: 'Final Breakfast — Barceló Nura',
                desc: 'Last group breakfast together. Luggage out by 11:00.',
                image: '/imagenes/hotel-terrace.jpg',
              },
              {
                time: '10:30 – 13:00',
                title: 'Optional Padel Session — Padelin',
                desc: 'Casual open-court session for those whose flights allow. Entirely optional.',
                image: '/imagenes/JOPS-1071.webp',
              },
              {
                time: 'From 11:00',
                title: 'Check-Out & Transfers to Airport',
                desc: 'Private transfers per individual flight time. Late checkout available on request.',
                image: '/imagenes/EM-4.webp',
              },
            ],
          }
        ],
        faq: [
          { q: "Do I need padel experience?", a: "No. Our retreats welcome all levels — coaching is tailored from beginners building foundations to advanced players refining strategy." },
          { q: "Is everything included?", a: "Yes. Everything in the itinerary is included — accommodation, all meals, coaching, matchplay, local transport, and activities. Guests are welcome to skip any activity. Anything booked outside the itinerary is at the guest's own cost." },
          { q: "Are flights and airport transfers included?", a: "Transfers to and from Mahón Airport are included. Flights are not — our concierge can advise on routes or arrange a private charter on request." },
          { q: "Can a non-playing partner come along?", a: "Yes. Non-playing partners pay the same retreat price, and their programme can be customised around their preferences." },
          { q: "What about dietary requirements?", a: "Our on-site private chef builds bespoke menus around a wellness and dietary questionnaire sent before arrival." },
          { q: "How many guests per retreat?", a: "Each open retreat is capped to preserve exclusivity. Private retreats run for a minimum of 6 guests." },
          { q: "Can I extend my stay before or after the retreat?", a: "Yes — we can arrange additional nights at Barceló Nura on request." },
          { q: "Can I book a private retreat on different dates?", a: "Yes. We run fully bespoke private retreats on any week of the year, with a minimum of 6 guests and 2 months' lead time." },
          { q: "When is the next Menorca retreat?", a: "30 September – 4 October 2026 (4 nights, 5 days). Places are limited — early booking is advised." },
          { q: "What's the deposit and when is the balance due?", a: "A 40% deposit secures your place. The remaining balance is due 6 weeks before the retreat start date." },
          { q: "What's the cancellation policy?", a: "Cancellations made more than 10 weeks before the retreat start date are eligible for a full deposit refund. Within 10 weeks of the start date, the 40% deposit becomes non-refundable." }
        ],
        rooms: {
          sectionTag: "Accommodation",
          title: "Booking options",
          subtitle: "Connect, play, and unwind in our private suites.",
          priceLabel: "Total Retreat Price",
          whatsIncluded: "What's included",
          securePlace: "Secure Your Place",
          talkToConcierge: "Talk to a Concierge",
          talkToConciergeMessage: "I need more information about the Menorca retreat",
          openRetreat: {
            name: "Open Retreat",
            tag: "Solo or Friends",
            priceFrom: "",
            priceShared: "from £2,400 (shared occupancy)",
            priceSingle: "from £1,750 (single occupancy)",
            description: "Solo or with a friend. Share the retreat with a curated group of like-minded players. Open dates, mixed group.",
            capacity: "1 - 2 guests per suite",
            amenities: ["Accommodation", "All meals", "Coaching", "Matchplay", "Local transport", "Activities"]
          },
          privateRetreat: {
            name: "Private Retreat",
            tag: "Ultimate Privacy",
            priceFrom: "",
            description: "Reserve the entire retreat exclusively for your group of friends or family.",
            capacity: "8 - 20 guests",
            amenities: ["All-inclusive 4 Nights", "Full exclusivity", "Private courts", "Custom schedule"]
          },
          corporateRetreat: {
            name: "Corporate / Executive Retreat",
            tag: "C-Suite",
            priceFrom: "",
            description: "A closed retreat designed for company offsites, leadership teams, or client hospitality. Bespoke programme available.",
            capacity: "Up to 20 executives",
            amenities: ["All-inclusive 4 Nights", "Private meeting room", "Business concierge"]
          }
        }
      },
      footer: {
        rights: "© 2026 CourtSide Padel. All rights reserved.",
        privacy: "Privacy Policy",
        cookies: "Cookie Policy",
        terms: "Terms & Conditions",
        legal: "Legal Notice"
      },
      bespokeRetreats: {
        title: "Want it on your dates?",
        description: "Beyond our open retreats, we run bespoke private retreats at Menorca for closed groups, fully customisable around your dates, your group, and your priorities — from coaching intensity to dining preferences to off-court experiences.",
        features: [
          "Minimum 6 guests",
          "Any week of the year",
          "Fully tailored"
        ],
        cta: "Enquire about a bespoke private retreat →",
        modalTitle: "Bespoke Enquiry",
        modalDesc: "Leave your details and a specialist will reach out to tailor your private retreat.",
        nameLabel: "Full Name",
        emailLabel: "Email Address",
        datesLabel: "Desired Dates (Optional)",
        guestsLabel: "Number of Guests (Min 6)",
        submitBtn: "Request Proposal",
        successMsg: "Thank you. Our concierge team will contact you shortly."
      },
      testimonials: {
        label: "Reviews",
        title: "What guests have to say",
        subtitle: "Guests who arrived as players. Left a part of the Courtside community.",
        items: [
          {
            name: "Tomasz Campbell",
            role: "Senior Director, London",
            text: "Truly life-changing. The coaching sessions elevated my game, but the yacht day and gourmet dinners made it a complete luxury escape. Already booked for next year.",
            initials: "T",
            image: "/imagenes/testimonio-tomasz.jpg"
          },
          {
            name: "Ana Martínez",
            role: "CEO, Madrid",
            text: "The attention to detail is unreal. From the airport transfer to the farewell dinner, every moment felt tailored. This is how a padel retreat should be.",
            initials: "A",
            image: "/imagenes/testimonio-ana.jpg"
          },
          {
            name: "James Whitfield",
            role: "Managing Partner, Edinburgh",
            text: "I came for the padel and stayed for the experience. The vineyard lunch, the tournament day, the sunset at Cova d'en Xoroi — every single day was extraordinary.",
            initials: "J",
            image: "/imagenes/testimonio-james.jpg"
          }
        ]
      },
      legalNotice: {
        notice: "This document is available in English only."
      },
      bookNow: {
        eyebrow: "Limited places each season",
        title: "Book Now",
        subtitle: "Secure your place at the most exclusive padel retreat in the Mediterranean.",
        labelDestination: "Destination",
        labelDates: "Available Dates",
        labelAccommodation: "Accommodation",
        cta: "Secure Your Place →",
        disclaimer: "No commitment required. Speak with your Personal Concierge first."
      },
      notFound: {
        error: "Error 404",
        title: "Page Not Found",
        message: "The page you are looking for does not exist or has been moved.",
        backBtn: "Return to Homepage"
      },
      cookieConsent: {
        message: "We use an essential cookie to remember your language preference.",
        accept: "Got it",
        learnMore: "Cookie Policy"
      },
      bookingDrawer: {
        eyebrow: "Limited places · 2026",
        title: "Secure Your Place",
        closeAria: "Close",
        labelDestination: "Destination",
        valueDestination: "Menorca, Spain",
        labelDates: "Dates",
        valueDates: "30 Sep – 4 Oct 2026",
        labelFrom: "From",
        valueFrom: "£1,750 per person",
        iframeTitle: "Booking enquiry",
        footerDisclaimer: "No commitment required. Handled per our",
        privacyLink: "Privacy Policy"
      }
    }
  },
  es: {
    translation: {
      navbar: {
        home: "Inicio",
        includes: "Qué incluye",
        itinerary: "Itinerario",
        book: "Reservar",
        faq: "FAQ"
      },
      menorcaPage: {
        heroTitle: "MENORCA",
        heroSubtitle: "Un santuario mediterráneo. Cinco días. Pádel, estilo de vida, tranquilidad.",
        heroMeta: "30 Sep – 4 Oct 2026 · Menorca · Todo Incluido",
        bookBtn: "Ver la experiencia",
        agendaTitle: "El Itinerario",
        itineraryEyebrow: "Programa",
        itineraryTitle: "El Itinerario",
        faqTitle: "Preguntas Frecuentes",
        faqViewLess: "Ver menos",
        faqViewAll: "Ver todas las preguntas",
        whatsIncluded: {
          title: "¿Qué incluye?",
          subtitle: "Desde la llegada hasta la salida, cada detalle de tu retiro está cubierto: entrenamiento, gastronomía, transporte, actividades; todo incluido.",
          pillars: [
            {
              tag: "Entrenamiento Élite",
              title: "Dónde Entrenarás — Padelin",
              subtitle: "El mejor club de pádel de Menorca y hogar de la número 1 mundial Gemma Triay",
              bullets: [
                "Entrena donde Gemma Triay, una de las mejores jugadoras de pádel del mundo, perfecciona su juego",
                "Recibe entrenamiento experto de exprofesionales que adaptan cada sesión a tu nivel",
                "Disfruta de instalaciones de calidad que incluyen vestuarios, bar/restaurante y terraza exterior",
                "Ubicado en Sant Lluís, a poca distancia en coche del hotel"
              ]
            },
            {
              tag: "Estancia de Lujo",
              title: "Estancia de Lujo en Barceló Nura",
              subtitle: "Un retiro costero de 5 estrellas en Biniancollet, donde el diseño contemporáneo se une a la belleza natural de Menorca",
              bullets: [
                "Amplias habitaciones luminosas con terrazas privadas o piscinas semiprivadas, diseñadas para el descanso y el confort",
                "Acceso a un spa de servicio completo, piscinas interiores y exteriores, y un gimnasio moderno",
                "Situado a pocos pasos del Mediterráneo, con vistas tranquilas y atardeceres dorados",
                "Desayuno diario y cocina de inspiración mediterránea en un entorno elegante y tranquilo"
              ]
            },
            {
              tag: "Alta Gastronomía",
              title: "Los Sabores de Menorca",
              subtitle: "Un viaje culinario cuidadosamente seleccionado",
              bullets: [
                "Restaurantes seleccionados con una mezcla de sabores mediterráneos, marisco fresco y opciones de carne y vegetarianas de alta calidad",
                "Entornos gastronómicos únicos desde terrazas frente al mar hasta rincones vibrantes en el centro de Mahón y a lo largo del puerto",
                "Un almuerzo o cena especial en un restaurante reconocido por la guía Michelin, incluido como parte de la experiencia",
                "Con énfasis en ingredientes auténticos de temporada y comidas relajadas que reflejan el encanto de la isla"
              ]
            },
            {
              tag: "Aventuras insulares inolvidables",
              title: "Más Allá de la Pista",
              subtitle: "Sal de la pista y sumérgete en las emocionantes aventuras al aire libre de Menorca",
              bullets: [
                "Descubre el encanto de Mahón con un tour guiado por sus calles históricas y su animado puerto",
                "Disfruta de un tour por el viñedo y una degustación de vinos y gastronomía en Binifadet, con quesos y delicias locales",
                "Disfruta de un impresionante atardecer en Cova d'en Xoroi, situada en un acantilado sobre el Mediterráneo",
                "Las actividades mencionadas están incluidas en nuestro itinerario, con opciones adicionales disponibles bajo solicitud"
              ]
            }
          ]
        },
        agenda: [
          {
            dayStr: 'Día 01',
            date: 'Mar 30 Sep',
            label: 'Llegada & Bienvenida',
            activities: [
              {
                time: 'Mañana',
                title: 'Llegada & Check-In',
                desc: 'Traslados privados desde el aeropuerto al Barceló Nura. Bebidas de bienvenida y packs en las habitaciones.',
                image: '/imagenes/EM-4.webp',
              },
              {
                time: '14:00 – 16:30',
                title: 'Almuerzo frente al mar',
                desc: 'Disfruta de un relajante almuerzo frente al mar para iniciar el retiro y conectar con otros invitados.',
                image: '/imagenes/Cala en porter.webp',
              },
              {
                time: '17:00 – 18:30',
                title: 'Sesión de Pádel (Calentamiento)',
                desc: 'Sesión introductoria en Padelin. Formato relajado y social para entrar en calor.',
                image: '/imagenes/JOPS-721.webp',
              },
              {
                time: '20:00',
                title: 'Cena de Bienvenida',
                desc: 'Cena de apertura en el restaurante Ses Forquilles en Mahón. Reserva de grupo confirmada.',
                image: '/imagenes/restaurante-interior.jpg',
              },
            ],
          },
          {
            dayStr: 'Día 02',
            date: 'Mié 1 Oct',
            label: 'Pádel & Paseo en Barco',
            activities: [
              {
                time: '08:30 – 09:15',
                title: 'Desayuno — Barceló Nura',
                desc: 'Desayuno de grupo con zona reservada en el hotel para recargar energías.',
                image: '/imagenes/hotel-terrace.jpg',
              },
              {
                time: '10:00 – 12:00',
                title: 'Pádel (Entrenamiento y Partidos)',
                desc: 'Sesiones en Padelin dirigidas por entrenadores y partidos competitivos.',
                image: '/imagenes/EM-81.webp',
              },
              {
                time: '13:45 – 17:30',
                title: 'Almuerzo & Barco — Sa Punta',
                desc: 'Almuerzo en el restaurante Sa Punta seguido de un paseo en barco desde Es Castell.',
                image: '/imagenes/sa punta.webp',
              },
              {
                time: '20:00',
                title: 'Cena — Hotel / Tarde Libre',
                desc: 'Cena en el hotel incluida. Concierge disponible para recomendar restaurantes.',
                image: '/imagenes/restaurante-interior.jpg',
              },
            ],
          },
          {
            dayStr: 'Día 03',
            date: 'Jue 2 Oct',
            label: 'Pádel & Viñedo',
            activities: [
              {
                time: '08:30 – 09:15',
                title: 'Desayuno — Barceló Nura',
                desc: 'Desayuno de grupo. Resumen de las sesiones por nivel durante el desayuno.',
                image: '/imagenes/hotel-terrace.jpg',
              },
              {
                time: '10:00 – 12:00',
                title: 'Pádel (Técnica y Partidos)',
                desc: 'Sesiones por grupos de habilidad en Padelin. Mejora técnica y juego competitivo.',
                image: '/imagenes/EM-53.webp',
              },
              {
                time: '13:30 – 16:30',
                title: 'Visita a Viñedo y Almuerzo — Binifadet',
                desc: 'Tour y almuerzo en la bodega Binifadet. Incluye cata de vinos y quesos.',
                image: '/imagenes/binifadet.webp',
              },
              {
                time: '20:00',
                title: 'Cena — La Calita',
                desc: 'Cena en el restaurante La Calita. Menú incluido.',
                image: '/imagenes/IMG_2914.webp',
              },
            ],
          },
          {
            dayStr: 'Día 04',
            date: 'Vie 3 Oct',
            label: 'Torneo & Atardecer',
            activities: [
              {
                time: '07:30 – 08:15',
                title: 'Desayuno Temprano — Barceló Nura',
                desc: 'El día del torneo empieza pronto. Packs de hidratación listos.',
                image: '/imagenes/hotel-terrace.jpg',
              },
              {
                time: '09:00 – 13:00',
                title: 'Torneo de Pádel — Padelin',
                desc: 'Torneo round-robin de dobles mixtos en Padelin. Trofeo y premios confirmados.',
                image: '/imagenes/EM-22.webp',
              },
              {
                time: '13:00 – 14:30',
                title: 'Almuerzo & Entrega de Premios',
                desc: 'Almuerzo en las instalaciones de Padelin seguido de la ceremonia de trofeos.',
                image: '/imagenes/IMG_2167.webp',
              },
              {
                time: '17:00 – 19:00',
                title: "Atardecer & Tapas — Cova d'en Xoroi",
                desc: "Música en vivo, tapas y cócteles en la icónica Cova d'en Xoroi. Atardecer ~19:30.",
                image: '/imagenes/cap roig.webp',
              },
            ],
          },
          {
            dayStr: 'Día 05',
            date: 'Sáb 4 Oct',
            label: 'Sesión Final & Despedida',
            activities: [
              {
                time: '08:30 – 09:15',
                title: 'Desayuno Final — Barceló Nura',
                desc: 'Último desayuno en grupo. Equipaje listo para las 11:00.',
                image: '/imagenes/hotel-terrace.jpg',
              },
              {
                time: '10:30 – 13:00',
                title: 'Sesión de Pádel Opcional — Padelin',
                desc: 'Sesión informal en pista abierta para quienes sus vuelos lo permitan. Opcional.',
                image: '/imagenes/JOPS-1071.webp',
              },
              {
                time: 'Desde 11:00',
                title: 'Check-Out & Traslados al Aeropuerto',
                desc: 'Traslados privados según horario de vuelo. Late checkout bajo petición.',
                image: '/imagenes/EM-4.webp',
              },
            ],
          }
        ],
        faq: [
          { q: "¿Necesito experiencia en pádel?", a: "No. Nuestros retiros son para todos los niveles; el entrenamiento se adapta desde principiantes que buscan construir una base sólida, hasta jugadores avanzados que desean refinar su estrategia." },
          { q: "¿Está todo incluido?", a: "Sí. Todo lo descrito en el itinerario está incluido: alojamiento, todas las comidas, entrenamiento, partidos, transporte local y actividades. Los huéspedes pueden decidir no participar en alguna actividad si lo desean. Cualquier reserva fuera del itinerario corre por cuenta del huésped." },
          { q: "¿Están incluidos los vuelos y traslados al aeropuerto?", a: "Los traslados desde y hacia el Aeropuerto de Mahón están incluidos. Los vuelos no; nuestro concierge puede asesorarle sobre las mejores rutas u organizar un vuelo chárter privado si lo solicita." },
          { q: "¿Puede acompañarme un invitado que no juegue al pádel?", a: "Sí. Los acompañantes que no jueguen abonan el mismo precio del retiro, y su programa puede personalizarse según sus preferencias." },
          { q: "¿Tenemos en cuenta los requisitos dietéticos especiales?", a: "Nuestro chef privado en el lugar diseña menús a medida en base a un cuestionario de bienestar y dietético que se envía antes de su llegada." },
          { q: "¿Cuántos invitados hay por retiro?", a: "Cada retiro abierto tiene un límite de participantes para preservar la exclusividad. Los retiros privados requieren un mínimo de 6 invitados." },
          { q: "¿Puedo extender mi estancia antes o después del retiro?", a: "Sí; podemos organizar noches adicionales en Barceló Nura previa solicitud." },
          { q: "¿Puedo reservar un retiro privado en otras fechas?", a: "Sí. Organizamos retiros privados completamente a medida en cualquier semana del año, con un mínimo de 6 invitados y al menos 2 meses de antelación." },
          { q: "¿Cuándo es el próximo retiro en Menorca?", a: "Del 30 de septiembre al 4 de octubre de 2026 (4 noches, 5 días). Las plazas son limitadas, por lo que se recomienda reservar con anticipación." },
          { q: "¿De cuánto es el depósito y cuándo se debe pagar el saldo restante?", a: "Un depósito del 40% asegura su plaza. El saldo restante debe abonarse 6 semanas antes de la fecha de inicio del retiro." },
          { q: "¿Cuál es la política de cancelación?", a: "Las cancelaciones realizadas con más de 10 semanas de antelación al inicio del retiro son elegibles para un reembolso completo del depósito. Si se cancela a menos de 10 semanas de la fecha de inicio, el depósito del 40% no será reembolsable." }
        ],
        rooms: {
          sectionTag: "Alojamiento",
          title: "Opciones de reserva",
          subtitle: "Conecta, juega y descansa en nuestras suites privadas.",
          priceLabel: "Precio Total del Retiro",
          whatsIncluded: "Qué incluye",
          securePlace: "Asegurar mi Plaza",
          talkToConcierge: "Hablar con un Concierge",
          talkToConciergeMessage: "Necesito más información sobre el retiro de Menorca",
          openRetreat: {
            name: "Open Retreat",
            tag: "Solo o con amigos",
            priceFrom: "",
            priceShared: "desde £2,400 (habitación compartida)",
            priceSingle: "desde £1,750 (uso individual)",
            description: "Para ti solo o con un amigo. Comparte el retiro con un grupo seleccionado de jugadores afines. Fechas abiertas, grupo mixto.",
            capacity: "1 - 2 invitados por suite",
            amenities: ["Alojamiento", "Todas las comidas", "Entrenamiento", "Partidos", "Transporte local", "Actividades"]
          },
          privateRetreat: {
            name: "Retiro Privado",
            tag: "Privacidad Total",
            priceFrom: "",
            description: "Reserva el retiro completo en exclusiva para tu grupo de amigos o familiares.",
            capacity: "8 - 20 invitados",
            amenities: ["4 noches Todo Incluido", "Exclusividad total", "Pistas privadas", "Horario personalizado"]
          },
          corporateRetreat: {
            name: "Retiro Corporativo / Ejecutivo",
            tag: "C-Suite",
            priceFrom: "",
            description: "Un retiro a puerta cerrada diseñado para viajes de empresa, equipos directivos o clientes. Programa a medida disponible.",
            capacity: "Hasta 20 ejecutivos",
            amenities: ["4 noches Todo Incluido", "Sala de reuniones privada", "Concierge de negocios"]
          }
        }
      },
      footer: {
        rights: "© 2026 CourtSide Padel. Todos los derechos reservados.",
        privacy: "Política de Privacidad",
        cookies: "Política de Cookies",
        terms: "Términos y Condiciones",
        legal: "Aviso Legal"
      },
      bespokeRetreats: {
        title: "¿Lo quieres en tus fechas?",
        description: "Más allá de nuestros retiros abiertos, organizamos retiros privados a medida en Menorca para grupos cerrados, totalmente personalizables en torno a tus fechas, tu grupo y tus prioridades: desde la intensidad del entrenamiento hasta las preferencias gastronómicas y las experiencias fuera de la pista.",
        features: [
          "Mínimo 6 invitados",
          "Cualquier semana del año",
          "Totalmente a medida"
        ],
        cta: "Solicita un retiro privado a medida →",
        modalTitle: "Consulta a Medida",
        modalDesc: "Déjanos tus datos y un especialista se pondrá en contacto para diseñar tu retiro privado.",
        nameLabel: "Nombre Completo",
        emailLabel: "Correo Electrónico",
        datesLabel: "Fechas Deseadas (Opcional)",
        guestsLabel: "Número de Invitados (Mínimo 6)",
        submitBtn: "Solicitar Propuesta",
        successMsg: "Gracias. Nuestro equipo de concierge se pondrá en contacto pronto."
      },
      testimonials: {
        label: "Reseñas",
        title: "Lo que dicen nuestros invitados",
        subtitle: "Invitados que llegaron como jugadores. Se fueron como parte de la comunidad Courtside.",
        items: [
          {
            name: "Tomasz Campbell",
            role: "Director Senior, Londres",
            text: "Realmente me cambió la vida. Las sesiones de entrenamiento elevaron mi juego, pero el día en yate y las cenas gourmet lo convirtieron en un escape de lujo total. Ya he reservado para el próximo año.",
            initials: "T",
            image: "/imagenes/testimonio-tomasz.jpg"
          },
          {
            name: "Ana Martínez",
            role: "CEO, Madrid",
            text: "La atención al detalle es irreal. Desde el traslado al aeropuerto hasta la cena de despedida, cada momento se sintió hecho a medida. Así es como debe ser un retiro de pádel.",
            initials: "A",
            image: "/imagenes/testimonio-ana.jpg"
          },
          {
            name: "James Whitfield",
            role: "Socio Director, Edimburgo",
            text: "Vine por el pádel y me quedé por la experiencia. El almuerzo en el viñedo, el día del torneo, el atardecer en Cova d'en Xoroi — cada uno de los días fue extraordinario.",
            initials: "J",
            image: "/imagenes/testimonio-james.jpg"
          }
        ]
      },
      legalNotice: {
        notice: "Este documento está disponible solo en inglés."
      },
      bookNow: {
        eyebrow: "Plazas limitadas cada temporada",
        title: "Reservar",
        subtitle: "Asegura tu plaza en el retiro de pádel más exclusivo del Mediterráneo.",
        labelDestination: "Destino",
        labelDates: "Fechas Disponibles",
        labelAccommodation: "Alojamiento",
        cta: "Asegurar mi Plaza →",
        disclaimer: "Sin compromiso. Habla primero con tu Concierge Personal."
      },
      notFound: {
        error: "Error 404",
        title: "Página No Encontrada",
        message: "La página que buscas no existe o ha sido movida.",
        backBtn: "Volver al Inicio"
      },
      cookieConsent: {
        message: "Usamos una cookie esencial para recordar tu preferencia de idioma.",
        accept: "Entendido",
        learnMore: "Política de Cookies"
      },
      bookingDrawer: {
        eyebrow: "Plazas limitadas · 2026",
        title: "Asegura tu Plaza",
        closeAria: "Cerrar",
        labelDestination: "Destino",
        valueDestination: "Menorca, España",
        labelDates: "Fechas",
        valueDates: "30 sep – 4 oct 2026",
        labelFrom: "Desde",
        valueFrom: "1.750 £ por persona",
        iframeTitle: "Formulario de reserva",
        footerDisclaimer: "Sin compromiso. Según nuestra",
        privacyLink: "Política de Privacidad"
      }
    }
  },
  fr: {
    translation: {
      navbar: {
        home: "Accueil",
        includes: "Inclus",
        itinerary: "Itinéraire",
        book: "Réserver",
        faq: "FAQ"
      },
      menorcaPage: {
        heroTitle: "MINORQUE",
        heroSubtitle: "Un sanctuaire méditerranéen. Cinq jours. Padel, art de vivre, tranquillité.",
        heroMeta: "30 Sep – 4 Oct 2026 · Minorque · Tout Inclus",
        bookBtn: "Voir l'expérience",
        agendaTitle: "L'Itinéraire",
        itineraryEyebrow: "Programme",
        itineraryTitle: "L'Itinéraire",
        faqTitle: "Questions Fréquentes",
        faqViewLess: "Voir moins",
        faqViewAll: "Voir toutes les questions",
        whatsIncluded: {
          title: "Qu'est-ce qui est inclus ?",
          subtitle: "De l'arrivée au départ, chaque détail de votre séjour est pris en charge — coaching, repas, transport, activités, tout inclus.",
          pillars: [
            {
              tag: "Coaching d'Élite",
              title: "Où Vous Vous Entraînerez — Padelin",
              subtitle: "Le meilleur club de padel de Minorque et terrain d'entraînement du numéro 1 mondial Gemma Triay",
              bullets: [
                "Entraînez-vous là où Gemma Triay, l'une des meilleures joueuses de padel au monde, perfectionne son jeu",
                "Bénéficiez d'un coaching expert d'anciens professionnels qui adaptent chaque session à votre niveau",
                "Profitez d'installations de qualité incluant vestiaires, bar/restaurant et terrasse extérieure",
                "Situé à Sant Lluís, à quelques minutes en voiture de l'hôtel"
              ]
            },
            {
              tag: "Séjour de Luxe",
              title: "Séjour de Luxe au Barceló Nura",
              subtitle: "Un resort côtier 5 étoiles à Biniancollet, où le design contemporain rencontre la beauté naturelle de Minorque",
              bullets: [
                "Chambres spacieuses et lumineuses avec terrasses privées ou piscines semi-privées, conçues pour le repos et le confort",
                "Accès à un spa complet, piscines intérieures et extérieures et une salle de sport moderne",
                "Niché à quelques pas de la Méditerranée, offrant des vues apaisantes et des couchers de soleil dorés",
                "Petit-déjeuner quotidien et cuisine d'inspiration méditerranéenne dans un cadre élégant et tranquille"
              ]
            },
            {
              tag: "Gastronomie Raffinée",
              title: "Les Saveurs de Minorque",
              subtitle: "Un voyage culinaire soigneusement sélectionné",
              bullets: [
                "Restaurants triés sur le volet proposant un mélange de saveurs méditerranéennes, fruits de mer frais et options de viande et végétariennes de haute qualité",
                "Cadres gastronomiques uniques allant des terrasses en bord de mer aux endroits animés au cœur de Mahón et le long du port",
                "Un déjeuner ou dîner spécial dans un restaurant reconnu par le Guide Michelin, inclus dans l'expérience",
                "L'accent est mis sur des ingrédients authentiques et de saison, et des repas conviviaux qui reflètent le charme de l'île"
              ]
            },
            {
              tag: "Aventures insulaires inoubliables",
              title: "Au-Delà du Court",
              subtitle: "Quittez le court et plongez-vous dans les aventures passionnantes en plein air de Minorque",
              bullets: [
                "Découvrez le charme de Mahón lors d'une visite guidée de ses rues historiques et de son port animé",
                "Profitez d'une visite du vignoble et d'une dégustation de vins et de gastronomie à Binifadet, avec fromages et spécialités locales",
                "Admirez un coucher de soleil époustouflant à la Cova d'en Xoroi, perchée sur une falaise au-dessus de la Méditerranée",
                "Les activités mentionnées sont incluses dans notre programme, avec des options supplémentaires disponibles sur demande"
              ]
            }
          ]
        },
        agenda: [
          {
            dayStr: 'Jour 01',
            date: 'Mar 30 Sep',
            label: 'Arrivée & Bienvenue',
            activities: [
              {
                time: 'Matin',
                title: 'Arrivée & Check-In',
                desc: 'Transferts privés depuis l\'aéroport au Barceló Nura. Boissons de bienvenue à l\'arrivée et packs dans les chambres.',
                image: '/imagenes/EM-4.webp',
              },
              {
                time: '14:00 – 16:30',
                title: 'Déjeuner en Bord de Mer',
                desc: 'Profitez d\'un déjeuner relaxant en bord de mer pour bien commencer le séjour et faire connaissance avec les autres participants.',
                image: '/imagenes/Cala en porter.webp',
              },
              {
                time: '17:00 – 18:30',
                title: 'Session de Padel d\'Échauffement',
                desc: 'Session introductive à Padelin. Format détendu et convivial pour mettre le groupe en jambes.',
                image: '/imagenes/JOPS-721.webp',
              },
              {
                time: '20:00',
                title: 'Dîner de Bienvenue',
                desc: 'Dîner d\'ouverture au restaurant Ses Forquilles à Mahón. Réservation de groupe confirmée.',
                image: '/imagenes/restaurante-interior.jpg',
              },
            ],
          },
          {
            dayStr: 'Jour 02',
            date: 'Mer 1 Oct',
            label: 'Padel & Tour en Bateau',
            activities: [
              {
                time: '08:30 – 09:15',
                title: 'Petit-Déjeuner — Barceló Nura',
                desc: 'Petit-déjeuner de groupe avec places réservées à l\'hôtel. Se préparer avant une matinée complète sur le court.',
                image: '/imagenes/hotel-terrace.jpg',
              },
              {
                time: '10:00 – 12:00',
                title: 'Coaching Padel & Matchs',
                desc: 'Sessions sur le court à Padelin avec exercices dirigés par des coachs et matchs compétitifs.',
                image: '/imagenes/EM-81.webp',
              },
              {
                time: '13:45 – 17:30',
                title: 'Déjeuner & Tour en Bateau — Sa Punta',
                desc: 'Déjeuner au restaurant Sa Punta suivi d\'une croisière en charter depuis Es Castell.',
                image: '/imagenes/sa punta.webp',
              },
              {
                time: '20:00',
                title: 'Dîner — Hôtel / Soirée Libre',
                desc: 'Repas à l\'hôtel inclus. Le concierge est disponible pour des recommandations de restaurants.',
                image: '/imagenes/restaurante-interior.jpg',
              },
            ],
          },
          {
            dayStr: 'Jour 03',
            date: 'Jeu 2 Oct',
            label: 'Padel & Vignoble',
            activities: [
              {
                time: '08:30 – 09:15',
                title: 'Petit-Déjeuner — Barceló Nura',
                desc: 'Petit-déjeuner de groupe. Sessions par groupes de niveau présentées pendant le repas.',
                image: '/imagenes/hotel-terrace.jpg',
              },
              {
                time: '10:00 – 12:00',
                title: 'Coaching Padel & Matchs',
                desc: 'Sessions par groupes de niveau à Padelin. Amélioration technique et jeu compétitif.',
                image: '/imagenes/EM-53.webp',
              },
              {
                time: '13:30 – 16:30',
                title: 'Visite du Vignoble & Déjeuner — Binifadet',
                desc: 'Visite et déjeuner à la cave Binifadet. Dégustation de vins et fromages incluse.',
                image: '/imagenes/binifadet.webp',
              },
              {
                time: '20:00',
                title: 'Dîner — La Calita',
                desc: 'Dîner au restaurant La Calita. Repas inclus.',
                image: '/imagenes/IMG_2914.webp',
              },
            ],
          },
          {
            dayStr: 'Jour 04',
            date: 'Ven 3 Oct',
            label: 'Tournoi & Coucher de Soleil',
            activities: [
              {
                time: '07:30 – 08:15',
                title: 'Petit-Déjeuner Matinal — Barceló Nura',
                desc: 'La journée du tournoi commence tôt. Packs d\'hydratation prêts et places de groupe réservées.',
                image: '/imagenes/hotel-terrace.jpg',
              },
              {
                time: '09:00 – 13:00',
                title: 'Tournoi de Padel — Padelin',
                desc: 'Tournoi round-robin en double mixte à Padelin. Trophée et prix confirmés avec le lieu.',
                image: '/imagenes/EM-22.webp',
              },
              {
                time: '13:00 – 14:30',
                title: 'Déjeuner du Tournoi & Remise des Prix',
                desc: 'Déjeuner sur place à Padelin suivi de la cérémonie de remise des prix et du trophée.',
                image: '/imagenes/IMG_2167.webp',
              },
              {
                time: '17:00 – 19:00',
                title: "Coucher de Soleil & Tapas — Cova d'en Xoroi",
                desc: "Musique live, tapas et cocktails à l'iconique Cova d'en Xoroi. Coucher de soleil vers 19h30.",
                image: '/imagenes/cap roig.webp',
              },
            ],
          },
          {
            dayStr: 'Jour 05',
            date: 'Sam 4 Oct',
            label: 'Session Finale & Au Revoir',
            activities: [
              {
                time: '08:30 – 09:15',
                title: 'Dernier Petit-Déjeuner — Barceló Nura',
                desc: 'Dernier petit-déjeuner de groupe. Bagages à sortir avant 11h00.',
                image: '/imagenes/hotel-terrace.jpg',
              },
              {
                time: '10:30 – 13:00',
                title: 'Session de Padel Optionnelle — Padelin',
                desc: 'Session décontractée en court libre pour ceux dont les vols le permettent. Entièrement optionnelle.',
                image: '/imagenes/JOPS-1071.webp',
              },
              {
                time: 'Dès 11:00',
                title: 'Check-Out & Transferts vers l\'Aéroport',
                desc: 'Transferts privés selon l\'heure de vol individuelle. Départ tardif disponible sur demande.',
                image: '/imagenes/EM-4.webp',
              },
            ],
          }
        ],
        faq: [
          { q: "Ai-je besoin d'expérience en padel ?", a: "Non. Nos séjours accueillent tous les niveaux — le coaching est adapté des débutants construisant les bases aux joueurs avancés affinant leur stratégie." },
          { q: "Tout est-il inclus ?", a: "Oui. Tout ce qui figure dans l'itinéraire est inclus — hébergement, tous les repas, coaching, matchs, transport local et activités. Les participants peuvent décider de ne pas participer à une activité. Tout ce qui est réservé en dehors de l'itinéraire est à la charge du participant." },
          { q: "Les vols et transferts aéroport sont-ils inclus ?", a: "Les transferts depuis et vers l'Aéroport de Mahón sont inclus. Les vols ne le sont pas — notre concierge peut conseiller sur les meilleures routes ou organiser un charter privé sur demande." },
          { q: "Un partenaire non-joueur peut-il m'accompagner ?", a: "Oui. Les partenaires non-joueurs paient le même prix du séjour, et leur programme peut être personnalisé selon leurs préférences." },
          { q: "Qu'en est-il des régimes alimentaires particuliers ?", a: "Notre chef privé sur place élabore des menus sur mesure à partir d'un questionnaire bien-être et alimentaire envoyé avant l'arrivée." },
          { q: "Combien de participants par séjour ?", a: "Chaque séjour ouvert est plafonné pour préserver l'exclusivité. Les séjours privés requièrent un minimum de 6 participants." },
          { q: "Puis-je prolonger mon séjour avant ou après le retreat ?", a: "Oui — nous pouvons organiser des nuits supplémentaires au Barceló Nura sur demande." },
          { q: "Puis-je réserver un séjour privé à d'autres dates ?", a: "Oui. Nous organisons des séjours privés entièrement sur mesure n'importe quelle semaine de l'année, avec un minimum de 6 participants et 2 mois de préavis." },
          { q: "Quand aura lieu le prochain séjour à Minorque ?", a: "Du 30 septembre au 4 octobre 2026 (4 nuits, 5 jours). Les places sont limitées — une réservation anticipée est conseillée." },
          { q: "Quel est le montant de l'acompte et quand le solde est-il dû ?", a: "Un acompte de 40 % assure votre place. Le solde restant est dû 6 semaines avant la date de début du séjour." },
          { q: "Quelle est la politique d'annulation ?", a: "Les annulations effectuées plus de 10 semaines avant la date de début du séjour donnent droit au remboursement intégral de l'acompte. Dans les 10 semaines précédant la date de début, l'acompte de 40 % est non remboursable." }
        ],
        rooms: {
          sectionTag: "Hébergement",
          title: "Options de réservation",
          subtitle: "Connectez-vous, jouez et détendez-vous dans nos suites privées.",
          priceLabel: "Prix Total du Séjour",
          whatsIncluded: "Ce qui est inclus",
          securePlace: "Réserver ma Place",
          talkToConcierge: "Parler à un Concierge",
          talkToConciergeMessage: "J'ai besoin de plus d'informations sur le séjour à Minorque",
          openRetreat: {
            name: "Séjour Ouvert",
            tag: "Solo ou entre Amis",
            priceFrom: "",
            priceShared: "à partir de £2 400 (occupation partagée)",
            priceSingle: "à partir de £1 750 (occupation individuelle)",
            description: "Seul ou avec un ami. Partagez le séjour avec un groupe sélectionné de joueurs partageant les mêmes intérêts. Dates ouvertes, groupe mixte.",
            capacity: "1 - 2 participants par suite",
            amenities: ["Hébergement", "Tous les repas", "Coaching", "Matchs", "Transport local", "Activités"]
          },
          privateRetreat: {
            name: "Séjour Privé",
            tag: "Exclusivité Totale",
            priceFrom: "",
            description: "Réservez l'intégralité du séjour en exclusivité pour votre groupe d'amis ou de famille.",
            capacity: "8 - 20 participants",
            amenities: ["4 Nuits Tout Inclus", "Exclusivité totale", "Courts privés", "Programme personnalisé"]
          },
          corporateRetreat: {
            name: "Séjour Corporatif / Exécutif",
            tag: "C-Suite",
            priceFrom: "",
            description: "Un séjour fermé conçu pour les sorties d'entreprise, les équipes dirigeantes ou l'hospitalité client. Programme sur mesure disponible.",
            capacity: "Jusqu'à 20 dirigeants",
            amenities: ["4 Nuits Tout Inclus", "Salle de réunion privée", "Concierge d'affaires"]
          }
        }
      },
      footer: {
        rights: "© 2026 CourtSide Padel. Tous droits réservés.",
        privacy: "Politique de Confidentialité",
        cookies: "Politique de Cookies",
        terms: "Conditions Générales",
        legal: "Mentions Légales"
      },
      bespokeRetreats: {
        title: "Vous le voulez à vos dates ?",
        description: "Au-delà de nos séjours ouverts, nous organisons des séjours privés sur mesure à Minorque pour des groupes fermés, entièrement personnalisables selon vos dates, votre groupe et vos priorités — de l'intensité du coaching aux préférences gastronomiques en passant par les expériences hors du court.",
        features: [
          "Minimum 6 participants",
          "N'importe quelle semaine de l'année",
          "Entièrement sur mesure"
        ],
        cta: "Demander un séjour privé sur mesure →",
        modalTitle: "Demande Sur Mesure",
        modalDesc: "Laissez vos coordonnées et un spécialiste vous contactera pour personnaliser votre séjour privé.",
        nameLabel: "Nom Complet",
        emailLabel: "Adresse E-mail",
        datesLabel: "Dates Souhaitées (Optionnel)",
        guestsLabel: "Nombre de Participants (Min 6)",
        submitBtn: "Demander un Devis",
        successMsg: "Merci. Notre équipe de concierge vous contactera prochainement."
      },
      testimonials: {
        label: "Avis",
        title: "Ce que disent nos participants",
        subtitle: "Des participants arrivés en tant que joueurs. Repartis en tant que membres de la communauté Courtside.",
        items: [
          {
            name: "Tomasz Campbell",
            role: "Directeur Senior, Londres",
            text: "Vraiment bouleversant. Les sessions de coaching ont élevé mon jeu, mais la journée en yacht et les dîners gastronomiques en ont fait une escapade de luxe complète. Déjà réservé pour l'année prochaine.",
            initials: "T",
            image: "/imagenes/testimonio-tomasz.jpg"
          },
          {
            name: "Ana Martínez",
            role: "PDG, Madrid",
            text: "L'attention aux détails est incroyable. Du transfert aéroport au dîner d'adieu, chaque moment semblait taillé sur mesure. C'est ainsi que doit être un séjour padel.",
            initials: "A",
            image: "/imagenes/testimonio-ana.jpg"
          },
          {
            name: "James Whitfield",
            role: "Associé Directeur, Édimbourg",
            text: "Je suis venu pour le padel et je suis resté pour l'expérience. Le déjeuner au vignoble, la journée du tournoi, le coucher de soleil à la Cova d'en Xoroi — chaque journée était extraordinaire.",
            initials: "J",
            image: "/imagenes/testimonio-james.jpg"
          }
        ]
      },
      legalNotice: {
        notice: "Ce document est uniquement disponible en anglais."
      },
      bookNow: {
        eyebrow: "Places limitées chaque saison",
        title: "Réserver",
        subtitle: "Réservez votre place dans le séjour padel le plus exclusif de Méditerranée.",
        labelDestination: "Destination",
        labelDates: "Dates Disponibles",
        labelAccommodation: "Hébergement",
        cta: "Réserver ma Place →",
        disclaimer: "Sans engagement. Parlez d'abord avec votre Concierge Personnel."
      },
      notFound: {
        error: "Erreur 404",
        title: "Page Introuvable",
        message: "La page que vous recherchez n'existe pas ou a été déplacée.",
        backBtn: "Retour à l'Accueil"
      },
      cookieConsent: {
        message: "Nous utilisons un cookie essentiel pour mémoriser votre préférence de langue.",
        accept: "Compris",
        learnMore: "Politique de Cookies"
      },
      bookingDrawer: {
        eyebrow: "Places limitées · 2026",
        title: "Réserver ma Place",
        closeAria: "Fermer",
        labelDestination: "Destination",
        valueDestination: "Minorque, Espagne",
        labelDates: "Dates",
        valueDates: "30 sep – 4 oct 2026",
        labelFrom: "À partir de",
        valueFrom: "1 750 £ par personne",
        iframeTitle: "Formulaire de réservation",
        footerDisclaimer: "Sans engagement. Conformément à notre",
        privacyLink: "Politique de confidentialité"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "es", "fr"],
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
