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
        agendaTitle: "The Sample Itinerary",
        itineraryEyebrow: "Programme",
        itineraryTitle: "The Sample Itinerary",
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
              tag: "Accommodation",
              title: "Your Stay at Barceló Nura",
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
                "Cruise along Menorca's stunning coastline on a private charter boat tour, with hidden coves and turquoise waters along the way",
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
                image: '/nuevas fotos/arrival.jpg',
              },
              {
                time: '17:00 – 18:30',
                title: 'Warm-Up Padel Session',
                image: '/imagenes/EM-38.jpg',
              },
              {
                time: '20:00',
                title: 'Group Welcome Dinner',
                image: '/imagenes/IMG_2448.JPG',
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
                image: '/nuevas fotos/breakfast day 2.jpg',
              },
              {
                time: '10:00 – 12:00',
                title: 'Padel Coaching & Matchplay',
                image: '/imagenes-nuevas/d3-coaching-tecnico-padel.webp',
              },
              {
                time: '13:45 – 17:30',
                title: 'Lunch & Boat Tour',
                image: '/nuevas fotos/lunchu y boar.jpg',
              },
              {
                time: '20:00',
                title: 'Dinner — Hotel / Free Evening',
                image: '/nuevas fotos/dinner dia 2.jpg',
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
                image: '/nuevas fotos/day 3 desayuno.jpg',
              },
              {
                time: '10:00 – 12:00',
                title: 'Padel Coaching & Matches',
                image: '/nuevas fotos/day 3.jpg',
              },
              {
                time: '13:30 – 16:30',
                title: 'Vineyard Tour & Lunch',
                image: '/Menorca Retreat Pics/DAY 3/EM-41.jpg',
              },
              {
                time: '20:00',
                title: 'Group Dinner',
                image: '/Menorca Retreat Pics/DAY 3/EM-48.jpg',
                imagePosition: 'center 70%',
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
                image: '/nuevas fotos/adab4f92-0e60-46c3-a43a-d37ced1b5d42.png',
              },
              {
                time: '09:00 – 13:00',
                title: 'Padel Tournament',
                image: '/imagenes/EM-22.jpg',
              },
              {
                time: '13:00 – 14:30',
                title: 'Tournament Lunch & Awards',
                image: '/Menorca Retreat Pics/DAY 1/IMG_1460 2 copy.JPG',
              },
              {
                time: '17:00 – 19:00',
                title: "Sunset & Tapas — Cova d'en Xoroi",
                image: '/posibles imagenes/cova de xorio.jpg',
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
                image: '/nuevas fotos/380fa89e-d61b-4d43-9859-9cc1b3630d41.png',
              },
              {
                time: '10:30 – 13:00',
                title: 'Optional Padel Session — Padelin',
                image: '/nuevas fotos/b8d75113-9b1d-4f7f-8b3d-9c25366aa4d3.jpg',
              },
              {
                time: 'From 11:00',
                title: 'Check-Out & Transfers to Airport',
                image: '/imagenes/EM-4.jpg',
              },
            ],
          }
        ],
        faq: [
          { q: "Do I need padel experience?", a: "No. Our retreats welcome all levels — coaching is tailored from beginners building foundations to advanced players refining strategy." },
          { q: "Is everything included?", a: "Yes. Everything in the itinerary is included — accommodation, all meals, coaching, matchplay, local transport, and activities. Guests are welcome to skip any activity. Anything booked outside the itinerary is at the guest's own cost." },
          { q: "Are flights and airport transfers included?", a: "Transfers to and from Mahón Airport are included. Flights are not — our concierge can advise on routes or arrange a private charter on request." },
          { q: "Can a non-playing partner come along?", a: "Yes. Non-playing partners pay the same retreat price, and their programme can be customised around their preferences." },
          { q: "What about dietary requirements?", a: "Yes — we can cater to all dietary requirements across meals and dining during the retreat. Just let us know your needs when you book or before you arrive." },
          { q: "How many guests per retreat?", a: "Each open retreat is capped to preserve exclusivity. Private retreats run for a minimum of 6 guests." },
          { q: "Can I extend my stay before or after the retreat?", a: "Yes — we can arrange additional nights at Barceló Nura on request." },
          { q: "Can I book a private retreat on different dates?", a: "Yes. We run fully bespoke private retreats on any week of the year, with a minimum of 6 guests and 2 months' lead time." },
          { q: "When is the next Menorca retreat?", a: "30 September – 4 October 2026 (4 nights, 5 days). Places are limited — early booking is advised." },
          { q: "What's the deposit and when is the balance due?", a: "A 40% deposit secures your place. The remaining balance is due 6 weeks before the retreat start date." },
          { q: "What's the cancellation policy?", a: "Cancellations made more than 8 weeks before the retreat start date are eligible for a full deposit refund. Within 8 weeks of the start date, the 40% deposit becomes non-refundable." }
        ],
        rooms: {
          sectionTag: "Accommodation",
          title: "Booking options",
          subtitle: "Connect, play, and unwind in our private suites.",
          priceLabel: "Total Retreat Price",
          whatsIncluded: "What's included",
          securePlace: "Secure Your Place",
          talkToConcierge: "Enquire about",
          talkToConciergeMessage: "I need more information about the Menorca retreat",
          openRetreat: {
            name: "Open Retreat",
            tag: "Solo or Friends",
            priceFrom: "",
            priceShared: "from £1,850 (double occupancy)",
            priceSingle: "from £2,400 (single occupancy)",
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
        title: "Choose Your Dates",
        description: "Beyond our open retreats, we run bespoke private retreats in Menorca for closed groups, fully customisable around your dates, your group, and your priorities - from coaching intensity to dining preferences and off-court experiences.",
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
        items: [
          {
            name: "Jean Bonnavion",
            role: "Partner - Palamon Capital",
            text: "The entire experience was incredibly well thought out from start to finish. The padel coaching was excellent and tailored to different levels, while the off-court activities gave us a chance to experience Menorca beyond the court. The accommodation, restaurants, and private transport were all first-class, making the trip completely stress-free.",
            initials: "J",
            image: "/imagenes/testimonio-jean.jpg"
          },
          {
            name: "Nicolas Maurer",
            role: "CEO - Team Vitality",
            text: "What stood out most was the attention to detail. Everything was seamlessly organized, from airport transfers to restaurant reservations and daily activities. The balance between quality padel sessions and time to enjoy the island's tranquility was perfect. It felt like a premium experience without ever feeling overly structured.",
            initials: "N",
            image: "/imagenes/testimonio-nicolas.jpg"
          },
          {
            name: "Anatole Levy",
            role: "Founder - Bizentis",
            text: "The combination of great coaching, beautiful surroundings, and exceptional hospitality made this a memorable trip. Every aspect of the retreat was carefully curated, from the accommodation and local dining experiences to the boat excursion and private transportation. It was the ideal mix of sport, relaxation, and discovering Menorca.",
            initials: "A",
            image: "/imagenes/testimonio-jean.jpg"
          }
        ]
      },
      legalNotice: {
        notice: "This document is available in English only."
      },
      bookNow: {
        eyebrow: "Limited places each season",
        title: "Book Now",
        subtitle: "Secure your place for a curated blend of padel, luxury, and Mediterranean lifestyle.",
        labelDestination: "Destination",
        valueDestination: "Menorca, Balearic Islands, Spain",
        labelDates: "Open Retreat Dates",
        labelAccommodation: "Accommodation",
        valueAccommodation: "Barceló Nura",
        cta: "Secure Your Place →",
        talkToConcierge: "Enquire about",
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
        valueFrom: "£1,850",
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
        agendaTitle: "Itinerario",
        itineraryEyebrow: "Programa",
        itineraryTitle: "Itinerario",
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
              tag: "Alojamiento",
              title: "Tu Estancia en Barceló Nura",
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
                "Navega por la impresionante costa de Menorca en un paseo en barco privado, descubriendo calas escondidas y aguas turquesas",
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
                image: '/nuevas fotos/arrival.jpg',
              },
              {
                time: '17:00 – 18:30',
                title: 'Sesión de Pádel (Calentamiento)',
                image: '/imagenes/EM-38.jpg',
              },
              {
                time: '20:00',
                title: 'Cena de Bienvenida en Grupo',
                image: '/imagenes/IMG_2448.JPG',
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
                image: '/nuevas fotos/breakfast day 2.jpg',
              },
              {
                time: '10:00 – 12:00',
                title: 'Pádel (Entrenamiento y Partidos)',
                image: '/imagenes-nuevas/d3-coaching-tecnico-padel.webp',
              },
              {
                time: '13:45 – 17:30',
                title: 'Almuerzo y Paseo en Barco',
                image: '/nuevas fotos/lunchu y boar.jpg',
              },
              {
                time: '20:00',
                title: 'Cena — Hotel / Tarde Libre',
                image: '/nuevas fotos/dinner dia 2.jpg',
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
                image: '/nuevas fotos/day 3 desayuno.jpg',
              },
              {
                time: '10:00 – 12:00',
                title: 'Pádel (Técnica y Partidos)',
                image: '/nuevas fotos/day 3.jpg',
              },
              {
                time: '13:30 – 16:30',
                title: 'Visita a Viñedo y Almuerzo',
                image: '/Menorca Retreat Pics/DAY 3/EM-41.jpg',
              },
              {
                time: '20:00',
                title: 'Cena de Grupo',
                image: '/Menorca Retreat Pics/DAY 3/EM-48.jpg',
                imagePosition: 'center 70%',
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
                image: '/nuevas fotos/adab4f92-0e60-46c3-a43a-d37ced1b5d42.png',
              },
              {
                time: '09:00 – 13:00',
                title: 'Torneo de Pádel',
                image: '/imagenes/EM-22.jpg',
              },
              {
                time: '13:00 – 14:30',
                title: 'Almuerzo & Entrega de Premios',
                image: '/Menorca Retreat Pics/DAY 1/IMG_1460 2 copy.JPG',
              },
              {
                time: '17:00 – 19:00',
                title: "Atardecer & Tapas — Cova d'en Xoroi",
                image: '/posibles imagenes/cova de xorio.jpg',
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
                image: '/nuevas fotos/380fa89e-d61b-4d43-9859-9cc1b3630d41.png',
              },
              {
                time: '10:30 – 13:00',
                title: 'Sesión de Pádel Opcional — Padelin',
                image: '/nuevas fotos/b8d75113-9b1d-4f7f-8b3d-9c25366aa4d3.jpg',
              },
              {
                time: 'Desde 11:00',
                title: 'Check-Out & Traslados al Aeropuerto',
                image: '/imagenes/EM-4.jpg',
              },
            ],
          }
        ],
        faq: [
          { q: "¿Necesito experiencia en pádel?", a: "No. Nuestros retiros son para todos los niveles; el entrenamiento se adapta desde principiantes que buscan construir una base sólida, hasta jugadores avanzados que desean refinar su estrategia." },
          { q: "¿Está todo incluido?", a: "Sí. Todo lo descrito en el itinerario está incluido: alojamiento, todas las comidas, entrenamiento, partidos, transporte local y actividades. Los huéspedes pueden decidir no participar en alguna actividad si lo desean. Cualquier reserva fuera del itinerario corre por cuenta del huésped." },
          { q: "¿Están incluidos los vuelos y traslados al aeropuerto?", a: "Los traslados desde y hacia el Aeropuerto de Mahón están incluidos. Los vuelos no; nuestro concierge puede asesorarle sobre las mejores rutas u organizar un vuelo chárter privado si lo solicita." },
          { q: "¿Puede acompañarme un invitado que no juegue al pádel?", a: "Sí. Los acompañantes que no jueguen abonan el mismo precio del retiro, y su programa puede personalizarse según sus preferencias." },
          { q: "¿Tenemos en cuenta los requisitos dietéticos especiales?", a: "Sí, podemos atender todos los requisitos dietéticos en las comidas y experiencias gastronómicas del retiro. Solo indíquenos sus necesidades al reservar o antes de la llegada." },
          { q: "¿Cuántos invitados hay por retiro?", a: "Cada retiro abierto tiene un límite de participantes para preservar la exclusividad. Los retiros privados requieren un mínimo de 6 invitados." },
          { q: "¿Puedo extender mi estancia antes o después del retiro?", a: "Sí; podemos organizar noches adicionales en Barceló Nura previa solicitud." },
          { q: "¿Puedo reservar un retiro privado en otras fechas?", a: "Sí. Organizamos retiros privados completamente a medida en cualquier semana del año, con un mínimo de 6 invitados y al menos 2 meses de antelación." },
          { q: "¿Cuándo es el próximo retiro en Menorca?", a: "Del 30 de septiembre al 4 de octubre de 2026 (4 noches, 5 días). Las plazas son limitadas, por lo que se recomienda reservar con anticipación." },
          { q: "¿De cuánto es el depósito y cuándo se debe pagar el saldo restante?", a: "Un depósito del 40% asegura su plaza. El saldo restante debe abonarse 6 semanas antes de la fecha de inicio del retiro." },
          { q: "¿Cuál es la política de cancelación?", a: "Las cancelaciones realizadas con más de 8 semanas de antelación al inicio del retiro son elegibles para un reembolso completo del depósito. Si se cancela a menos de 8 semanas de la fecha de inicio, el depósito del 40% no será reembolsable." }
        ],
        rooms: {
          sectionTag: "Alojamiento",
          title: "Opciones de reserva",
          subtitle: "Conecta, juega y descansa en nuestras suites privadas.",
          priceLabel: "Precio Total del Retiro",
          whatsIncluded: "Qué incluye",
          securePlace: "Asegurar mi Plaza",
          talkToConcierge: "Más información",
          talkToConciergeMessage: "Necesito más información sobre el retiro de Menorca",
          openRetreat: {
            name: "Open Retreat",
            tag: "Solo o con amigos",
            priceFrom: "",
            priceShared: "desde £1,850 (habitación doble)",
            priceSingle: "desde £2,400 (uso individual)",
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
        title: "Elige tus fechas",
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
        items: [
          {
            name: "Jean Bonnavion",
            role: "Partner - Palamon Capital",
            text: "Toda la experiencia estuvo increíblemente bien pensada de principio a fin. El entrenamiento de pádel fue excelente y adaptado a distintos niveles, mientras que las actividades fuera de la pista nos permitieron conocer Menorca más allá de la cancha. El alojamiento, los restaurantes y el transporte privado fueron de primera clase, lo que hizo el viaje completamente libre de estrés.",
            initials: "J",
            image: "/imagenes/testimonio-jean.jpg"
          },
          {
            name: "Nicolas Maurer",
            role: "CEO - Team Vitality",
            text: "Lo que más destacó fue la atención al detalle. Todo estuvo organizado a la perfección, desde los traslados al aeropuerto hasta las reservas en restaurantes y las actividades diarias. El equilibrio entre sesiones de pádel de calidad y tiempo para disfrutar de la tranquilidad de la isla fue perfecto. Se sintió como una experiencia premium sin resultar nunca demasiado estructurada.",
            initials: "N",
            image: "/imagenes/testimonio-nicolas.jpg"
          },
          {
            name: "Anatole Levy",
            role: "Founder - Bizentis",
            text: "La combinación de un gran entrenamiento, un entorno precioso y una hospitalidad excepcional hizo de este un viaje memorable. Cada aspecto del retiro estuvo cuidadosamente seleccionado, desde el alojamiento y las experiencias gastronómicas locales hasta la excursión en barco y el transporte privado. Fue la mezcla ideal de deporte, relax y descubrir Menorca.",
            initials: "A",
            image: "/imagenes/testimonio-jean.jpg"
          }
        ]
      },
      legalNotice: {
        notice: "Este documento está disponible solo en inglés."
      },
      bookNow: {
        eyebrow: "Plazas limitadas cada temporada",
        title: "Reservar",
        subtitle: "Asegura tu plaza para una mezcla seleccionada de pádel, lujo y estilo de vida mediterráneo.",
        labelDestination: "Destino",
        valueDestination: "Menorca, Islas Baleares, España",
        labelDates: "Fechas del Retiro Abierto",
        labelAccommodation: "Alojamiento",
        valueAccommodation: "Barceló Nura",
        cta: "Asegurar mi Plaza →",
        talkToConcierge: "Más información",
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
        valueFrom: "1.850 £",
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
        agendaTitle: "Itinéraire",
        itineraryEyebrow: "Programme",
        itineraryTitle: "Itinéraire",
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
              tag: "Hébergement",
              title: "Votre Séjour au Barceló Nura",
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
                "Naviguez le long de la côte spectaculaire de Minorque lors d'une croisière privée, entre criques secrètes et eaux turquoise",
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
                image: '/nuevas fotos/arrival.jpg',
              },
              {
                time: '17:00 – 18:30',
                title: 'Session de Padel d\'Échauffement',
                image: '/imagenes/EM-38.jpg',
              },
              {
                time: '20:00',
                title: 'Dîner de Bienvenue en Groupe',
                image: '/imagenes/IMG_2448.JPG',
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
                image: '/nuevas fotos/breakfast day 2.jpg',
              },
              {
                time: '10:00 – 12:00',
                title: 'Coaching Padel & Matchs',
                image: '/imagenes-nuevas/d3-coaching-tecnico-padel.webp',
              },
              {
                time: '13:45 – 17:30',
                title: 'Déjeuner & Tour en Bateau',
                image: '/nuevas fotos/lunchu y boar.jpg',
              },
              {
                time: '20:00',
                title: 'Dîner — Hôtel / Soirée Libre',
                image: '/nuevas fotos/dinner dia 2.jpg',
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
                image: '/nuevas fotos/day 3 desayuno.jpg',
              },
              {
                time: '10:00 – 12:00',
                title: 'Coaching Padel & Matchs',
                image: '/nuevas fotos/day 3.jpg',
              },
              {
                time: '13:30 – 16:30',
                title: 'Visite du Vignoble & Déjeuner',
                image: '/Menorca Retreat Pics/DAY 3/EM-41.jpg',
              },
              {
                time: '20:00',
                title: 'Dîner de Groupe',
                image: '/Menorca Retreat Pics/DAY 3/EM-48.jpg',
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
                image: '/nuevas fotos/adab4f92-0e60-46c3-a43a-d37ced1b5d42.png',
              },
              {
                time: '09:00 – 13:00',
                title: 'Tournoi de Padel',
                image: '/imagenes/EM-22.jpg',
              },
              {
                time: '13:00 – 14:30',
                title: 'Déjeuner du Tournoi & Remise des Prix',
                image: '/Menorca Retreat Pics/DAY 1/IMG_1460 2 copy.JPG',
              },
              {
                time: '17:00 – 19:00',
                title: "Coucher de Soleil & Tapas — Cova d'en Xoroi",
                image: '/posibles imagenes/cova de xorio.jpg',
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
                image: '/nuevas fotos/380fa89e-d61b-4d43-9859-9cc1b3630d41.png',
              },
              {
                time: '10:30 – 13:00',
                title: 'Session de Padel Optionnelle — Padelin',
                image: '/nuevas fotos/b8d75113-9b1d-4f7f-8b3d-9c25366aa4d3.jpg',
              },
              {
                time: 'Dès 11:00',
                title: 'Check-Out & Transferts vers l\'Aéroport',
                image: '/imagenes/EM-4.jpg',
              },
            ],
          }
        ],
        faq: [
          { q: "Ai-je besoin d'expérience en padel ?", a: "Non. Nos séjours accueillent tous les niveaux — le coaching est adapté des débutants construisant les bases aux joueurs avancés affinant leur stratégie." },
          { q: "Tout est-il inclus ?", a: "Oui. Tout ce qui figure dans l'itinéraire est inclus — hébergement, tous les repas, coaching, matchs, transport local et activités. Les participants peuvent décider de ne pas participer à une activité. Tout ce qui est réservé en dehors de l'itinéraire est à la charge du participant." },
          { q: "Les vols et transferts aéroport sont-ils inclus ?", a: "Les transferts depuis et vers l'Aéroport de Mahón sont inclus. Les vols ne le sont pas — notre concierge peut conseiller sur les meilleures routes ou organiser un charter privé sur demande." },
          { q: "Un partenaire non-joueur peut-il m'accompagner ?", a: "Oui. Les partenaires non-joueurs paient le même prix du séjour, et leur programme peut être personnalisé selon leurs préférences." },
          { q: "Qu'en est-il des régimes alimentaires particuliers ?", a: "Oui — nous pouvons répondre à tous les régimes alimentaires lors des repas et des expériences culinaires du séjour. Indiquez-nous simplement vos besoins lors de la réservation ou avant votre arrivée." },
          { q: "Combien de participants par séjour ?", a: "Chaque séjour ouvert est plafonné pour préserver l'exclusivité. Les séjours privés requièrent un minimum de 6 participants." },
          { q: "Puis-je prolonger mon séjour avant ou après le retreat ?", a: "Oui — nous pouvons organiser des nuits supplémentaires au Barceló Nura sur demande." },
          { q: "Puis-je réserver un séjour privé à d'autres dates ?", a: "Oui. Nous organisons des séjours privés entièrement sur mesure n'importe quelle semaine de l'année, avec un minimum de 6 participants et 2 mois de préavis." },
          { q: "Quand aura lieu le prochain séjour à Minorque ?", a: "Du 30 septembre au 4 octobre 2026 (4 nuits, 5 jours). Les places sont limitées — une réservation anticipée est conseillée." },
          { q: "Quel est le montant de l'acompte et quand le solde est-il dû ?", a: "Un acompte de 40 % assure votre place. Le solde restant est dû 6 semaines avant la date de début du séjour." },
          { q: "Quelle est la politique d'annulation ?", a: "Les annulations effectuées plus de 8 semaines avant la date de début du séjour donnent droit au remboursement intégral de l'acompte. Dans les 8 semaines précédant la date de début, l'acompte de 40 % est non remboursable." }
        ],
        rooms: {
          sectionTag: "Hébergement",
          title: "Options de réservation",
          subtitle: "Connectez-vous, jouez et détendez-vous dans nos suites privées.",
          priceLabel: "Prix Total du Séjour",
          whatsIncluded: "Ce qui est inclus",
          securePlace: "Réserver ma Place",
          talkToConcierge: "En savoir plus",
          talkToConciergeMessage: "J'ai besoin de plus d'informations sur le séjour à Minorque",
          openRetreat: {
            name: "Séjour Ouvert",
            tag: "Solo ou entre Amis",
            priceFrom: "",
            priceShared: "à partir de £1 850 (occupation double)",
            priceSingle: "à partir de £2 400 (occupation individuelle)",
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
        title: "Choisissez vos dates",
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
        items: [
          {
            name: "Jean Bonnavion",
            role: "Partner - Palamon Capital",
            text: "L'ensemble de l'expérience était incroyablement bien pensé du début à la fin. Le coaching padel était excellent et adapté aux différents niveaux, tandis que les activités hors court nous ont permis de découvrir Minorque au-delà du terrain. L'hébergement, les restaurants et le transport privé étaient tous de première classe, rendant le voyage totalement sans stress.",
            initials: "J",
            image: "/imagenes/testimonio-jean.jpg"
          },
          {
            name: "Nicolas Maurer",
            role: "CEO - Team Vitality",
            text: "Ce qui m'a le plus marqué, c'est l'attention aux détails. Tout était organisé de façon fluide, des transferts aéroport aux réservations de restaurants en passant par les activités quotidiennes. L'équilibre entre des sessions de padel de qualité et le temps pour profiter de la tranquillité de l'île était parfait. On avait l'impression d'une expérience premium sans jamais se sentir trop encadré.",
            initials: "N",
            image: "/imagenes/testimonio-nicolas.jpg"
          },
          {
            name: "Anatole Levy",
            role: "Founder - Bizentis",
            text: "La combinaison d'un excellent coaching, de cadres magnifiques et d'une hospitalité exceptionnelle a fait de ce séjour un voyage mémorable. Chaque aspect du retreat était soigneusement sélectionné, de l'hébergement et les expériences gastronomiques locales à l'excursion en bateau et au transport privé. C'était le mix idéal entre sport, détente et découverte de Minorque.",
            initials: "A",
            image: "/imagenes/testimonio-jean.jpg"
          }
        ]
      },
      legalNotice: {
        notice: "Ce document est uniquement disponible en anglais."
      },
      bookNow: {
        eyebrow: "Places limitées chaque saison",
        title: "Réserver",
        subtitle: "Réservez votre place pour un mélange soigné de padel, luxe et art de vivre méditerranéen.",
        labelDestination: "Destination",
        valueDestination: "Minorque, Îles Baléares, Espagne",
        labelDates: "Dates du Séjour Ouvert",
        labelAccommodation: "Hébergement",
        valueAccommodation: "Barceló Nura",
        cta: "Réserver ma Place →",
        talkToConcierge: "En savoir plus",
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
        valueFrom: "1 850 £",
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
