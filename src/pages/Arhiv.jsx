import Footer from "../components/Footer";

const events = [
    {
        date: " četrtek, 30. novembra 2023.",
        show: [
            { name: "", artist: " <strong>BOŠTJAN SIMON (SI) </strong> - tenorski saksofon, modularni sintetizator" },
            { name: "THE ELECTRICS (DE, SE, CA)", artist: "Axel Dörner — trobenta\n Sture Ericson — tenorski saksofon, klarinet, basovski klarinet\n Joe Williamson — kontrabas\n Raymond Strid — bobni, tolkala" }
        ]
    },
    {
        date: "ponedeljek, 27. novembra 2023. ",
        show: [
            { name: "", artist: "<strong>ELVIS HOMAN (SI)</strong> - bobni, elektrofonija" },
            { name: "BADRUTT / GROM / KOCHER / KUTIN (CH, SI)", artist: "Gaudenz Badrutt — elektrofonija\n Tomaž Grom — kontrabas, elektrofonija\n Jonas Kocher — harmonika\n Samo Kutin — hurdy gurdy" }
        ]
    },
    {
        date: "sreda, 6. septembra 2023.",
        show: [
            { name: "THE GATHERERS (SI, RS, HR, BR)", artist: "Luka Zabric — altovski saksofon\n Nikola Vuković — trobenta\n Tin Džaferović — kontrabas\n Luís Oliveira — bobni" },
            { name: "VOMITATRIX (US)", artist: "Gyna Bootleg — glas / besede\n Rick Eye — električna kitara\n Tim Dahl — električen bas, glas\n Weasel Walter — bobni" }
        ]
    },
    {
        date: "četrtek, 31. avgusta 2023.",
        show: [
            { name: "THE BALKAN EXPERIENCE OF SONG AND RITUAL (SI, MK, RS)", artist: "Jelena Soro — glas, oboa\n Brigita Marko — glas, tamburin\n Tea Vidmar — glas\n Dejan Jovanov — tolkala" },
            { name: "", artist: "<strong>MONO SCARVES (SI)</strong> - elektrofonija v živo" },
            { name: "RUINSZU (IT, JP)", artist: "Massimo Pupillo — električen bas\n Tatsuya Yoshida — bobni" }
        ]
    },
    {
        date: "četrtek, 27. julija 2023.",
        show: [
            { name: "SUBBURBEN (SI)", artist: "Andrej Kobal — elektrofonija\n Gal Furlan — bobni, tolkala" },
            { name: "CP UNIT (US, NL, NO, IT)", artist: "Chris Pitsiokos — altovski saksofon, kompozicija\n Jasper Stadhouders — električna kitara\n Dan Peter Sundland — električen bas\n Luca Marini — bobni" }
        ]
    },
    {
        date: "četrtek, 25. maja 2023.",
        show: [
            { name: "LOCKS & VANDERMARK (US)", artist: "Damon Locks — elektrofonija\n Ken Vandermark — tenorski saksofon, klarinet" },
            { name: "TEIS SEMEY QUINTET (DK / NL / GB / PT / KR)", artist: "Teis Semey — električna kitara\n Alistair Payne — trobenta\n José Soares — altovski saksofon\n Jort Terwijn — kontrabas\n Sun Mi Hong — bobni" }
        ]
    },
    {
        date: "četrtek, 13. aprila 2023.",
        show: [
            { name: "ANDREAS RØYSUM ENSEMBLE (NO)", artist: "Andreas Røysum — klarinet, basovski klarinet, flavta\n Marthe Lea — tenorski saksofon, flavta\n Emil Bø — trombon\n Øyvind Brække — trombon\n Hans P. Kjorstad — violina\n Christian Meaas Svendsen — kontrabas\n John Andrew Hannisdal — kontrabas\n Paal Nilssen-Love — bobni, tolkala\n Ivar Myrset Asheim — bobni, vibrafon, tolkala" }
        ]
    },
    {
        date: "ponedeljek, 6. marca 2023.",
        show: [
            { name: "beepblip / INA PUNTAR (SI)", artist: "beepblip — modularna sinteza in elektrofonija v živo\n Ina Puntar — glas" },
            { name: "LUÍS VICENTE 4TET (PT, US, NL)", artist: "Luís Vicente — trobenta\nJohn Dikeman — tenorski saksofon\n Luke Stewart — kontrabas\n Onno Govaert — bobni" }
        ]
    },
    {
        date: "ponedeljek, 6. februarja 2023. ",
        show: [
            { name: "BRANDLMAYR / KURZMANN (AT)", artist: "Martin Brandlmayr — bobni, elektrofonija \n Christof Kurzmann — laptop, glas, elektrofonija" },
            { name: "dieb13 / eRikm (AT, FR)", artist: "dieb13 — 3 x gramofoni, računalnik\n eRikm — laptop, elektrofonija" },
            { name: "BRANDMAYR / KURZMANN / DIEB13 / eRikm (AT, FR) - svetovna premiera!", artist: "Martin Brandlmayr — bobni, elektrofonija \nChristof Kurzmann — laptop, glas, elektrofonija\n dieb13 — 3 x gramofoni, računalnik\n eRikm — laptop, elektrofonija" }
        ]
    }
];

export default function Arhiv() {
    return (
        <>
            <div className="w-11/12 md:w-1/3 mx-auto mb-24">
                <div className="flex flex-col justify-center">
                    {events.map((event, index) => (
                        <Event key={index} date={event.date} show={event.show} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

const Event = ({ date, show }) => {
    show.forEach(event => {
        event.artist = event.artist.replace(/\n/g, "<br />");
    });

    return (
        <div className="mt-2 border-slate-200 border-2 p-2 rounded-lg">
            <h2>{date}</h2>
            <ul>
                {show.map((performer, index) => (
                    <li key={index}>
                        <strong>{performer.name}</strong> <br />
                        
                        <span dangerouslySetInnerHTML={{ __html: performer.artist }} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
