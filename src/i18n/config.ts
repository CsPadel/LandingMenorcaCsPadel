import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home"
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
                image: '/imagenes/IMG_2914.webp',
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
                image: '/imagenes/EM-4.webp',
              },
              {
                time: '20:00',
                title: 'Welcome Dinner',
                desc: 'Opening dinner at Ses Forquilles restaurant in Mahón. Group reservation confirmed.',
                image: '/imagenes/bambu.webp',
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
                image: '/imagenes/bambu.webp',
              },
              {
                time: '10:00 – 12:00',
                title: 'Padel Coaching & Matchplay',
                desc: 'Court sessions at Padelin with coach-led drills and competitive matchplay.',
                image: '/imagenes/EM-22.webp',
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
                image: '/imagenes/2313 copy.webp',
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
                image: '/imagenes/bambu.webp',
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
                image: '/imagenes/2313 copy.webp',
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
                image: '/imagenes/bambu.webp',
              },
              {
                time: '09:00 – 13:00',
                title: 'Padel Tournament — Padelin',
                desc: 'Mixed doubles round-robin tournament at Padelin. Trophy and prizes confirmed with venue.',
                image: '/imagenes/JOPS-1071.webp',
              },
              {
                time: '13:00 – 14:30',
                title: 'Tournament Lunch & Awards',
                desc: 'On-site lunch at Padelin followed by the awards and trophy presentation ceremony.',
                image: '/imagenes/2808 copy.webp',
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
                image: '/imagenes/bambu.webp',
              },
              {
                time: '10:30 – 13:00',
                title: 'Optional Padel Session — Padelin',
                desc: 'Casual open-court session for those whose flights allow. Entirely optional.',
                image: '/imagenes/EM-81.webp',
              },
              {
                time: 'From 11:00',
                title: 'Check-Out & Transfers to Airport',
                desc: 'Private transfers per individual flight time. Late checkout available on request.',
                image: '/imagenes/IMG_2914.webp',
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
            image: "/imagenes/IMG_2167.webp"
          },
          {
            name: "Ana Martínez",
            role: "CEO, Madrid",
            text: "The attention to detail is unreal. From the airport transfer to the farewell dinner, every moment felt tailored. This is how a padel retreat should be.",
            initials: "A",
            image: "/imagenes/JOPS-721.webp"
          },
          {
            name: "James Whitfield",
            role: "Managing Partner, Edinburgh",
            text: "I came for the padel and stayed for the experience. The vineyard lunch, the tournament day, the sunset at Cova d'en Xoroi — every single day was extraordinary.",
            initials: "J",
            image: "/imagenes/Cala en porter.webp"
          }
        ]
      }
    }
  },
  es: {
    translation: {
      navbar: {
        home: "Inicio"
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
                image: '/imagenes/IMG_2914.webp',
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
                image: '/imagenes/EM-4.webp',
              },
              {
                time: '20:00',
                title: 'Cena de Bienvenida',
                desc: 'Cena de apertura en el restaurante Ses Forquilles en Mahón. Reserva de grupo confirmada.',
                image: '/imagenes/bambu.webp',
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
                image: '/imagenes/bambu.webp',
              },
              {
                time: '10:00 – 12:00',
                title: 'Pádel (Entrenamiento y Partidos)',
                desc: 'Sesiones en Padelin dirigidas por entrenadores y partidos competitivos.',
                image: '/imagenes/EM-22.webp',
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
                image: '/imagenes/2313 copy.webp',
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
                image: '/imagenes/bambu.webp',
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
                image: '/imagenes/2313 copy.webp',
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
                image: '/imagenes/bambu.webp',
              },
              {
                time: '09:00 – 13:00',
                title: 'Torneo de Pádel — Padelin',
                desc: 'Torneo round-robin de dobles mixtos en Padelin. Trofeo y premios confirmados.',
                image: '/imagenes/JOPS-1071.webp',
              },
              {
                time: '13:00 – 14:30',
                title: 'Almuerzo & Entrega de Premios',
                desc: 'Almuerzo en las instalaciones de Padelin seguido de la ceremonia de trofeos.',
                image: '/imagenes/2808 copy.webp',
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
                image: '/imagenes/bambu.webp',
              },
              {
                time: '10:30 – 13:00',
                title: 'Sesión de Pádel Opcional — Padelin',
                desc: 'Sesión informal en pista abierta para quienes sus vuelos lo permitan. Opcional.',
                image: '/imagenes/EM-81.webp',
              },
              {
                time: 'Desde 11:00',
                title: 'Check-Out & Traslados al Aeropuerto',
                desc: 'Traslados privados según horario de vuelo. Late checkout bajo petición.',
                image: '/imagenes/IMG_2914.webp',
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
            image: "/imagenes/IMG_2167.webp"
          },
          {
            name: "Ana Martínez",
            role: "CEO, Madrid",
            text: "La atención al detalle es irreal. Desde el traslado al aeropuerto hasta la cena de despedida, cada momento se sintió hecho a medida. Así es como debe ser un retiro de pádel.",
            initials: "A",
            image: "/imagenes/JOPS-721.webp"
          },
          {
            name: "James Whitfield",
            role: "Socio Director, Edimburgo",
            text: "Vine por el pádel y me quedé por la experiencia. El almuerzo en el viñedo, el día del torneo, el atardecer en Cova d'en Xoroi — cada uno de los días fue extraordinario.",
            initials: "J",
            image: "/imagenes/Cala en porter.webp"
          }
        ]
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "es",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
