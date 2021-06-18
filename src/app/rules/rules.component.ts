import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {

  ruleParts = [
    {
      title: 'Teil 1',
      description: 'Grundregeln',
      sections: [{
        id: '1',
        title: 'Sicherheit',
        rules: [{
          id: '1.1',
          title: 'Hilfeleistung bei Gefahr',
          content: 'Ein Boot oder ein Teilnehmer muss allen in Gefahr befindlichen Personen oder Fahrzeugen jede mögliche Hilfe leisten.'
        },{
          id: '1.2',
          title: 'Rettungsausrüstung und persönliche Auftriebsmittel',
          content: 'Ein Boot muss ausreichende Rettungsmittel für alle Personen an Bord mitführen, einschließlich eines für den sofortigen Gebrauch, wenn nicht die Klassenregeln etwas anderes vorschreiben. Jeder Teilnehmer ist für das Tragen eines den Bedingungen angemessenen persönlichen Auftriebsmittels selbst verantwortlich.'
        }]
      },{
        id: '2',
        title: 'Faires Segeln',
        rules: [],
        content: 'Ein Boot und sein Eigner müssen die anerkannten Grundsätze für sportliches Verhalten und Fair Play einhalten. Ein Boot darf nach dieser Regel nur bestraft werden, wenn eindeutig festgestellt wird, dass diese Grundsätze verletzt wurden. Eine Strafe muss entweder eine Disqualifikation oder eine nicht streichbare Disqualifikation sein.'
      },{
        id: '3',
        title: 'Anerkennung der Regeln',
        rules: [{
          id: '3.1',
          title: '',
          content: '(a) Indem er an einer Wettfahrt, die nach diesen Regeln durchgeführt wird, teilnimmt oder beabsichtigt teilzunehmen, stimmt jeder Teilnehmer und jeder Bootseigner zu, diese Regeln anzuerkennen \n\n(b) Eine unterstützende Person, indem sie Unterstützung leistet, oder ein Elternteil oder eine Aufsichtsperson, indem sie ihrem Kind erlauben, an einer Wettfahrt teilzunehmen, stimmt zu, diese Regeln anzuerkennen.'
        },{
          id: '3.2',
          title: '',
          content: 'Jeder Teilnehmer und Bootseigner stimmt im Namen seiner unterstützenden Person zu, dass solche unterstützenden Personen an diese Regeln gebunden sind.'
        },{
          id: '3.3',
          title: '',
          content: 'Die Anerkennung der Regeln schließt die Zustimmung ein \n\n(a) sich diesen Regeln zu unterwerfen; \n\n(b) die nach diesen Regeln auferlegten Strafen und sonstigen Maßnahmen als endgültige Entscheidung sich aus diesen Regeln ergebenden Angelegenheit zu akzeptieren, vorbehaltlich der in diesen Regeln vorgesehenen Berufungs- und Überprüfungsverfahren; \n\n(c) in Anerkennung jeder solchen Entscheidung kein in den Regeln nicht vorgesehene, ordentliches Gericht oder anderes Tribunal anzurufen; und \n\n(d) für jeden Teilnehmer und Bootseigner sicherzustellen, dass ihre unterstützenden Personen sich der Regeln bewusst sind.'
        },{
          id: '3.4',
          title: '',
          content: 'Der verantwortliche Schiffsführer jedes Bootes muss sicherstellen, dass alle Mannschaftsmitglieder und der Bootseigner sich ihrer Verantwortlichkeiten nach dieser Regel bewusst sind.'
        },{
          id: '3.5',
          title: '',
          content: 'Diese Regel kann durch die Vorschrift des Nationalen Verbandes des Veranstaltungsortes geändert werden.'
        }]
      },{
        id: '4',
        title: 'Entscheidung zur Teilnahme an einer Wettfahrt',
        rules: [],
        content: 'Die Verantwortung für die Entscheidung eines Bootes, an einer Wettfahrt teilzunehmen oder sie fortzusetzen, liegt allein bei ihm.'
      },{
        id: '5',
        title: 'Anti-Doping',
        rules: [],
        content: 'Ein Teilnehmer muss den World Anti-Doping-Kodex, die Regeln der World Anti-Doping-Agency und die World Sailing Verordnung 21, Anti-Doping-Kodex, einhalten. Ein behaupteter oder tatsächlicher Verstoß gegen diese Regel muss nach Verordnung 21 behandelt werden. Der Verstoß darf nicht Grund für einen Protest sein und Regel 63.1 gilt nicht.'
      },{
        id: '6',
        title: 'Wetten und Anti-Korruption',
        rules: [],
        content: 'Jeder Teilnehmer, Bootseigner und jede unterstützende Person muss die World Sailing Verordnung 37, Wetten- und Anti-Korruptions-Kodex, einhalten. Ein behaupteter oder tatsächlicher Verstoß gegen diese Regel muss gemäß Verordnung 37 behandelt werden. Er darf nicht Grund für einen Protest sein und Regel 63.1 gilt nicht.'
      },{
        id: '7',
        title: 'Disziplinar-Kodex',
        rules: [],
        content: 'Jeder Teilnehmer, Bootseigner und jede unterstützende Person muss die World Sailing Verordnung 35, Disziplinar-, Berufungs-, und Revisions-Kodex (an anderer Stelle als Disziplinar-Kodex bezeichnet) einhalten. Ein behaupteter oder tatsächlicher Verstoß gegen diese Regel muss gemäß Verordnung 35 behandelt werden. Er darf nicht Grund für einen Potest sein und Regel 63.1 gilt nicht.'
      }]
    }, {
      title: 'Teil 2',
      description: 'Begegnungen von Booten',
      sections: [{
        id: '10',
        title: 'Auf entgegengesetztem Schlag',
        rules: [],
        content: 'Bei Booten auf entgegengesetzem Schlag muss sich ein Boot auf Backbordschlag (Wind von Backbord) von einem Boot auf Steuerbordschlag (Wind von Steuerbord) freihalten.'
      },{
        id: '11',
        title: 'Auf gleichem Schlag mit Überlappung',
        rules: [],
        content: 'Bei Booten auf gleichem Schlag, die überlappen, muss sich ein Luvboot von einem Leeboot freihalten.'
      },{
        id: '12',
        title: 'Auf gleichem Schlag ohne Überlappung',
        rules: [],
        content: 'Bei Booten auf gleichem Schlag, die nicht überlappen, muss sich ein Boot klar achteraus von einem Boot klar voraus freihalten.'
      },{
        id: '13',
        title: 'Während des Wendens',
        rules: [],
        content: 'Nachdem ein Boot durch den Wind gegangen ist, muss es sich von anderen Booten freihalten, bis es auf einen Am-Wind-Kurs abgefallen ist. Während dieser Zeit gelten die Regeln 10, 11 und 12 nicht. Fallen zur gleichen Zeit zwei Boote unter diese Regel, muss sich das auf der Backbordseite des anderen oder das achteraus befindliche Boot freihalten.'
      },{
        id: '14',
        title: 'Berührung vermeiden',
        rules: [],
        content: 'Wenn es vernünftigerweise möglich ist, muss ein Boot eine Berührung mit einem anderen Boot vermeiden. Jedoch ein Boot, das Wegerecht, Anspruch auf Raum oder Bahnmarken-Raum hat,\n\n(a) braucht nichts zu tun, um eine Berührung zu vermeiden, bis klar ist, dass das andere Boot sich nicht freihält oder keinen Raum oder Bahnmarken-Raum gibt, und\n\n(b) muss entlastet werden, wenn es gegen diese Regel verstößt und die Berührung keinen Schaden oder keine Verletzung verursacht.'
      },{
        id: '15',
        title: 'Wegerecht erlangen',
        rules: [],
        content: 'Erlangt ein Boot Wegerecht, muss es anfangs dem anderen Boot Raum zum Freihalten geben, sofern es nicht das Wegerecht durch Handlungen des anderen Bootes erhält.'
      },{
        id: '16',
        title: 'Kurs ändern',
        rules: [{
          id: '16.1',
          title: '',
          content: 'Ändert ein Boot mit Wegerecht den Kurs, muss es dem anderen Boot Raum zum Freihalten geben'
        }, {
          id: '16.2',
          title: '',
          content: 'Außerdem gilt: Wenn nach dem Startsignal ein Boot auf Backbordschlag (Wind von Backbord) sich dadurch freihält, dass es ein Boot auf Steuerbordschlag (Wind von Steuerbord) achteraus passieren will, darf das Boot auf Steuerbordschlag (Wind von Steuerbord) seinen Kurs nicht ändern, wenn dadurch das Boot auf Backbordschlag (Wind von Backbord) seinen Kurs sofort ändern müsste, um sich weiterhin freizuhalten.'
        }]
      },{
        id: '17',
        title: 'Auf gleichem Schlag; richtiger Kurs',
        rules: [],
        content: 'Wenn ein zuvor klar achteraus liegendes Boot mit einem Boot auf gleichem Schlag innerhalb eines Abstandes von zwei seiner Rumplängen in Lee überlappt, darf es nicht höher als seinen richtigen Kurs segeln, solange die Boote auf gleichem Schlag und innerhalb dieses Abstands überlappt bleiben, es sei denn, es fällt dadurch unverzüglich achteraus des anderen Bootes. Diese Regel gilt nicht, wenn die Überlappung beginnt, während das Luvboot verpflichtet ist, sich nach Regel 13 freizuhalten.'
      },{
        id: '18',
        title: 'Bahnmarken-Raum',
        rules: [{
          id: '18.1',
          title: 'Geltungsbereich der Regel 18',
          content: 'Regel 18 gilt zwischen Booten, wenn sie eine Bahnmarke an der gleichen Seite lassen müssen und mindestens eines von ihnen in der Zone ist. Sie gilt jedoch nicht\n\n(a) zwischen Booten auf entgegengesetztem Schlag auf einer Kreuz nach Luv,\n\n(b) zwischen Booten auf entgegengesetzem Schlag, wenn der richtige Kurs an der Bahnmarke für eines von ihnen, aber nicht für beide eine Wende erfordert,\n\n(c) zwischen einem Boot, das sich der Bahnmarke nähert, und einem, das sich von dieser entfernt, oder\n\n(d) wenn die Bahnmarke ein ausgedehntes Hindernis ist; in diesem Fall gilt Regel 19'
        }, {
          id: '18.2',
          title: 'Bahnmarken-Raum geben',
          content: `(a) Überlappen Boote, muss das außen liegende Boot dem innen liegenden Boot Bahnmarken-Raum geben, sofern nicht Regel 18.2(b) gilt.\n
(b) Überlappen Boote, wenn das erste von ihnen die Zone erreicht, muss das zu diesem Zeitpunkt außen liegende Boot anschließend dem innen liegenden Boot Bahnmarken-Raum geben. Ist ein Boot klar voraus, wenn es die Zone erreicht, muss das zu diesem Zeitpunkt klar achteraus liegende Boot anschließend Bahnmarken-Raum geben.\n
(c) Wenn ein Boot nach Regel 18.2(b) verpflichtet ist, Bahnmarken-Raum zu geben,\n
  (1) muss es dies weiterhin tun, auch wenn die Überlappung später gelöst wird oder es eine neue Überlappung erhält;\n
  (2) wenn es zu dem Boot mit Anrecht auf Bahnmarken-Raum eine innere Überlappung erhält, muss es diesem Boot auch Raum zum Segeln seines richtigen Kurses geben, solange die Überlappung besteht.
(d) Die Regeln 18.2(b) und (c) hören auf zu gelten, wenn dem Boot mit Anrecht auf Bahnmarken-Raum dieser Bahnmarken-Raum gegeben wurde oder wenn es mit dem Bug durch den Wind geht oder die Zone verlässt\n
(e) Gibt es berechtigten Zweifel, dass ein Boot eine Überlappung rechtzeitig erhalten oder gelöst hat, ist anzunehmen, dass es das nicht tat.\n
(f) Erhielt ein Boot von klar achteraus oder durch eine Wende auf der Luvseite des anderen Bootes eine innere Überlappung und ist ab dem Zeitpunkt des Erhalts der Überlappung das außen liegende Boot nicht in der Lage, Bahnmarken-Raum zu geben, so muss es diesen nicht geben.\n`
        }, {
          id: '18.3',
          title: 'Wenden in der Zone',
          content: 'Wenn ein Boot in der Zone einer Bahnmarke, die an Backbord zu lassen ist, mit dem Bug durch den Wind von Backbordschlag (Wind von Backbord) auf Steuerbordschlag (Wind von Steuerbord) geht und dann die Bahnmarke anliegen kann, darf es ein Boot, das seit Erreichen der Zone auf Steuerbordschlag (Wind von Steuerbord) war, nicht veranlassen, höher als am Wind zu segeln um eine Berührung zu vermeiden und muss diesem Boot Bahnmarken-Raum geben, wenn es eine innere Überlappung zu ihm erhält. Wenn diese Regel zwischen Booten gilt, gilt Regel 18.2 nicht zwischen ihnen.'
        }, {
          id: '18.4',
          title: 'Halsen',
          content: 'Muss ein innen überlappendes Boot mit Wegerecht an einer Bahnmarke halsen, um seinen richtigen Kurs zu segeln, darf es bis zum Halsen nicht weiter an der Bahnmarke vorbeisegeln, als es für das Segeln dieses Kurses notwendig ist. Regel 18.4 gilt nicht an einer Tor-Bahnmarke.'
        }]
      },{
        id: '19',
        title: 'Raum zum Passieren eines Hindernisses',
        rules: [{
          id: '19.1',
          title: 'Geltungsbereich der Regel 19',
          content: 'Regel 19 gilt zwischen zwei Booten an einem Hindernis, außer\n\n(a) wenn das Hindernis eine Bahnmarke ist, das die Boote an der gleichen Seite lassen müssen, oder\n\n(b) Wenn Regel 19 zwischen den Booten gilt und das Hindernis ist ein anderes Boot, das jedes von ihnen überlappt.\n\nAllerdings gilt an einem ausgedehnten Hindernis immer Regel 19 und nicht Regel 18.'
        }, {
          id: '19.2',
          title: 'Raum geben an einem Hindernis',
          content: '(a) Ein Boot mit Wegerecht kann wählen, auf welcher Seite es ein Hindernis passieren will.\n\n(b) Überlappen Boote, muss das außen liegende Boot dem innen liegenden Boot Raum zum Passieren zwischen ihm und dem Hindernis geben, außer es ist ab dem Zeitpunkt nach Erhalt der Überlappung dazu nicht in der Lage.\n\n(c) Passieren Boote ein ausgedehntes Hindernis und erhält ein Boot, das klar achteraus war uns sich freihalten musste, eine Überlappung zwischen dem anderen Boot und dem Hindernis und ist zum Zeitpunkt des Beginns der Überlappung kein Raum für es, um dazwischen zu passieren, hat es keinen Anspruch auf Raum nach Regel 19.2(b). Bleiben die Boote weiterhin überlappt, muss es sich freihalten und die Regeln 10 und 11 gelten nicht.'
        }]
      },{
        id: '20',
        title: 'Raum zum Wenden an einem Hindernis',
        rules: [{
          id: '20.1',
          title: 'Zuruf',
          content: 'Ein Boot kann durch Zurufen Raum verlangen um zu wenden und einem auf gleichem Schlag segelnden Boot auszuweichen. Es darf jedoch nur rufen wenn\n\n(a) es sich einem Hindernis nähert und es bald nötig sein wird eine wesentliche Kursänderung vorzunehmen, um ihm sicher auszuweichen und\n\n(b) es am Wind oder höher segelt.\n\n Zusätzlich darf es nicht rufen, wenn das Hindernis eine Bahnmarke ist und ein Boot, das die Bahnmarke anliegen kann, als Ergebnis des Zurufs gezwungen wäre, den Kurs zu ändern.'
        }, {
          id: '20.2',
          title: 'Reaktion',
          content: `(a) Nachdem ein Boot gerufen hat, muss es einem angerufenen Boot Zeit geben, um zu reagieren\n
(b) Ein angerufenes Boot muss auch dann reagieren, wenn der Zuruf gegen Regel 20.1 verstößt.\n
(c) Ein angerufenes Boot muss reagieren, indem es entweder so bald wie möglich wendet oder sofort antwortet: "Wenden Sie", und dann dem rufenden Boot den Raum gibt um zu wenden und ihm auszuweichen\n
(d) Wenn ein angerufenes Boot entsprechend reagiert, muss das rufende Boot sobald wie möglich wenden\n
(e) Von dem Zeitpunkt an dem ein Boot gerufen hat, bis zu dem Zeitpunkt, an dem es gewendet hat und dem angerufenen Boot ausgewichen ist, gilt Regel 18.2 nicht zwischen diesen Booten.`
        }, {
          id: '20.3',
          title: 'Weitergabe eines Zurufs an ein weiteres Boot',
          content: 'Wenn ein Boot angerufen wurde, um von ihm Raum zum Wenden zu verlangen, und es beabsichtigt durch eine Wende zu reagieren, darf es seinerseits von einem anderen Boot auf gleichem Schlag durch Zurufen Raum verlangen, um zu wenden und ihm auszuweichen. Es darf auch rufen, wenn sein Ruf die Bedingungen von Regel 20.1 nicht erfüllt. Regel 20.2 gilt zwischen ihm und einem angerufenen Boot.'
        }]
      },{
        id: '21',
        title: 'Entlastung',
        rules: [],
        content: 'Wenn ein Boot innerhalb des ihm zustehenden Raums oder Bahnmarken-Raums segelt, ist es zu entlasten, wenn bei einem Vorfall mit einem Boot, das verpflichtet ist, ihm diesen Raum oder Bahnmarken-Raum zu geben\n\n(a) es gegen eine Regel von Abschnitt A, Regel 15 oder Regel 16 verstößt, oder\n\n(b) es gezwungen wird, gegen Regel 31 zu verstoßen.'
      },{
        id: '22',
        title: 'Startfehler; Strafe ausführen; Segel backhalten',
        rules: [{
          id: '22.1',
          title: '',
          content: 'Ein Boot, das nach dem Startsignal auf die Vorstartseite der Startlinie oder eine ihrer Verlängerungen zusegelt, um zu starten oder um Regel 30.1 zu befolgen, muss sich von einem Boot freihalten, das dies nicht tut, bis es ganz auf der Vorstartseite ist.'
        }, {
          id: '22.2',
          title: '',
          content: 'Ein Boot, das eine Strafe ausführt, muss sich von einem Boot freihalten, das dies nicht tut.'
        }, {
          id: '22.3',
          title: '',
          content: 'Ein Boot, das sich durch Backhalten eines Segels rückwärts oder seitwärts nach Luv durchs Wasser bewegt, muss sich von einem Boot freihalten, das dies nicht tut.'
        }]
      },{
        id: '23',
        title: 'Gekentert, geankert oder auf Grund gelaufen; Hilfe leistend',
        rules: [],
        content: 'Wenn es dazu in der Lage ist, muss ein Boot einem anderen Boot ausweichen, das gekentert oder nach einer Kenterung noch nicht wieder unter Kontrolle ist, das ankert oder auf Grund gelaufen ist oder das versucht, einer Person oder einem Fahrzeug in Gefahr zu helfen. Ein Boot ist gekentert, wenn sich sein Masttopp im Wasser befindet.'
      },{
        id: '24',
        title: 'Behinderung anderer Boote',
        rules: [{
          id: '24.1',
          title: '',
          content: 'Wenn es vernünftigerweise möglich ist, darf ein nicht in einer Wettfahrt befindliches Boot ein in einer Wettfahrt befindliches Boot nicht behindern.'
        }, {
          id: '24.2',
          title: '',
          content: 'Wenn es vernünftigerweise möglich ist, darf ein Boot ein anderes Boot nicht behindern, das eine Strafe ausführt, sich auf einem Bahnschenkel befindet oder Regel 22.1 unterliegt. Diese Regel gilt jedoch nicht nach dem Startsignal, wenn das Boot seinen richtigen Kurs segelt.'
        }]
      }]
    }, {
      title: 'Teil 3',
      description: 'Durchführung einer Wettfahrt',
      sections: [{
        id: '25',
        title: 'Ausschreibung, Segelanweisungen und Signale',
        rules: [{
          id: '25.1',
          title: '',
          content: 'Die Ausschreibung und die Segelanweisungen müssen für jedes Boot vor Wettfahrtbeginn zur Verfügung stehen.'
        }, {
          id: '25.2',
          title: '',
          content: 'Die Bedeutungen der optischen Signale und der Schallsignale, die in "Wettfahrtsignale" definiert sind, dürfen nicht verändert werden, außer gemäß Regel 86.1(b). Die Bedeutungen anderer Signale, die benutzt werden können, müssen in der Ausschreibung oder den Segelanweisungen beschrieben sein.'
        }, {
          id: '25.3',
          title: '',
          content: 'Wenn das Zeigen einer Flagge als optisches Signal durch das Wettfahrtkomitee gefordert wird, kann es entweder eine Flagge oder ein anderes Objekt von ähnlichem Aussehen verwenden.'
        }]
      },{
        id: '26',
        title: 'Starten von Wettahrten',
        rules: [],
        content: `Wettfahrten müssen unter Verwendung der folgenden Signale gestartet werden. Die Zeitgebung erfolgt durch die optischen Signale. Das Ausbleiben eines Schallsignals ist nicht zu beachten.\n
Minuten vor Startsignal\tOptisches Signal                          \t\tSchallsignal\t\tBedeutung
5*                     \t\t\tKlassenflagge                       \t\t\tEins        \t\tAnkündigungssignal
4                      \t\t\tP, I, Z, Z+I, U oder schwarze Flagge  \t\tEins        \t\tVorbereitungssignal
1                      \t\t\tVorbereitungssignal entfernt          \t\tEin langes  \t\tEine Minute
0                      \t\t\tKlassenflagge entfernt                \t\tEins        \t\tStartsignale

*oder wie in den Segelanweisungen beschrieben

Das Ankündigungssignal für jede folgende Klasse muss mit oder nach dem Startsignal der vorangehenden Klasse gegeben werden.`
      },{
        id: '27',
        title: 'Weitere Maßnahmen des Wettfahrtkomitees vor dem Startsignal',
        rules: [{
          id: '27.1',
          title: '',
          content: 'Spätestens bis zum Ankündigungssignal muss das Wettfahrtkomitee die abzusegelnde Bahn signalisieren oder anderweitig bekannt geben, wenn die Segelanweisungen die Bahn nicht festgelegt haben und sie darf ein Bahnsignal durch ein anderes ersetzen und anzeigen, dass persönliche Auftriebsmittel anzulegen sind (Zeigen der Flagge Y mit einem Schallsignal).'
        }, {
          id: '27.2',
          title: '',
          content: 'Spätestens bis zum Vorbereitungssignal darf das Wettfahrtkomitee eine Start-Bahnmarke verlegen.'
        }, {
          id: '27.3',
          title: '',
          content: 'Vor dem Startsignal darf das Wettfahrtkomitee eine Wettfahrt aus beliebigen Gründen verschieben (Zeigen der Flagge AP, AP über H oder AP über A, mit zwei Schallsignalen) oder abbrechen (Zeigen der Flagge N über H oder N über A, mit drei Schallsignalen).'
        }]
      },{
        id: '28',
        title: 'Absegeln der Bahn',
        rules: [{
          id: '28.1',
          title: '',
          content: 'Ein Boot muss starten, die in den Segelanweisungen beschriebene Bahn segeln und durch das Ziel gehen. Während es das tut, darf es eine Bahnmarke auf beliebiger Seite lassen, die den Schenkel auf dem es segelt weder beginnt, begrenzt noch beendet. Nach dem Zieldurchgang muss es die Ziellinie nicht vollständig durchsegeln.'
        }, {
          id: '28.2',
          title: '',
          content: 'Eine Schnur, die die Spur eines Bootes von dem Zeitpunkt an darstellt, an dem es sich der Startlinie von der Vorstartseite nähert um zu starten, bis es durchs Ziel geht, muss, wenn diese straff gezogen wird,\n\n(a) jede Bahnmarke auf der richtigen Seite und in der richtigen Reihenfolge passieren,\n\n(b) alle zu rundenen Bahnmarken berühren, und\n\n(c) zwischen den Bahnmarken eines Tores, aus der Richtung der vorherigen Bahnmarke kommend, hindurchführen.\n\nEs kann jeden Fehler korrigieren, um dieser Regel zu entsprechen, sofern es noch nicht durchs Ziel gegangen ist.'
        }]
      },{
        id: '29',
        title: 'Rückrufe',
        rules: [{
          id: '29.1',
          title: 'Einzelrückruf',
          content: 'Befindet sich beim Startsignal eines Bootes irgendein Teil seines Bootskörpers, der Mannschaft oder der Ausrüstung auf der Bahnseite der Startlinie oder unterliegt es Regel 30.1, muss das Wettfahrtkomitee unverzüglich die Flagge X mit einem Schallsignal zeigen. Die Flagge muss gezeigt bleiben, bis alle betroffenen Boote vollständig auf die Vorstartseite der Startlinie oder einer ihrer Verlängerungen gesegelt sind und, falls nötig, ihren Verpflichtungen nach Regel 30.1 nachgekommen sind, aber nicht später als vier Minuten nach dem Startsignal oder eine Minute vor einem späteren Startsignal, je nachdem, was früher ist. Wenn Regel 30.3 oder 30.4 gilt, gilt diese Regel nicht.'
        }, {
          id: '29.2',
          title: 'Allgemeiner Rückruf',
          content: 'Wenn das Wettfahrtkomitee beim Startsignal Boote, die auf der Bahnseite der Startlinie sind oder für die Regel 30 gilt, nicht identifizieren kann oder wenn ein Fehler im Startverfahren vorgekommen ist, kann das Wettfahrtkomitee einen allgemeinen Rückruf anzeigen (Zeigen des Ersten Hilfsstanders mit zwei Schallsignalen). Das Ankündigungssignal für einen neuen Start der zurückgerufenen Klasse muss 1 Minute nach dem Niederholen des Ersten Hilfsstanders gegeben werden (1 Schallsignal), und die Starts für nachfolgende Klassen folgen diesem neuen Start.'
        }]
      },{
        id: '30',
        title: 'Startstrafen',
        rules: [{
          id: '30.1',
          title: 'I-Flaggen-Regel',
          content: 'War die Flagge I gezeigt, gilt: Befindet sich irgendein Teil des Bootskörpers, der Mannschaft oder der Ausrüstung des Bootes während der letzten Minute vor seinem Startsignal auf der Bahnseite der Startlinie oder einer ihrer Verlängerungen, muss das Boot über eine der Verlängerungen auf die Vorstartseite segeln, bevor es startet.'
        }, {
          id: '30.2',
          title: 'Z-Flaggen-Regel',
          content: 'War die Flagge Z gezeigt, darf ein Boot mit keinem Teil seines Rumpfes, der Besatzung oder der Ausrüstung während der letzten Minute vor seinem Startsignal in dem Dreieck sein, das aus den Enden der Startlinie und der ersten Bahnmarke gebildet wird. Verstößt ein Boot gegen diese Regel und wird es erkannt, muss es ohne Anhörung eine 20%-Wertungsstrafe, berechnet nach der Festlegung in Regel 44.3(c) erhalten.\n\nAuch wenn die Wettfahrt wieder gestartet oder wieder gesegelt wird, bleibt die Wertungsstrafe bestehen, jedoch nicht, wenn sie vor dem Startsignal verschoben oder abgebrochen wird. Wenn es in ähnlicher Weise bei einem folgenden Startversuch zur selben Wettfahrt erkannt wird, erhält es eine zusätzliche 20%-Wertungsstrafe.'
        }, {
          id: '30.3',
          title: 'U-Flaggen-Regel',
          content: 'War die Flagge U gezeigt, darf ein Boot mit keinem Teil seines Rumpfes, der Besatzung oder der Ausrüstung während der letzten Minute vor seinem Startsignal in dem Dreieck sein, das aus den Enden der Startlinie und der ersten Bahnmarke gebildet wird. Verstößt ein Boot gegen diese Regel und wird es erkannt, muss es ohne Anhörung disqualifiziert werden, nicht aber wenn die Wettfahrt wieder gestartet oder wieder gesegelt wird.'
        }, {
          id: '30.4',
          title: 'Schwarze-Flaggen-Regel',
          content: 'War eine schwarze Flagge gezeigt, darf ein Boot mit keinem Teil seines Rumpfes, der Besatzung oder Ausrüstung in der letzten Minute vor seinem Startsignal in dem Dreieck sein, das aus den Enden der Startlinie und der ersten Bahnmarke gebildet wird. Verstößt ein Boot gegen diese Regel und wird es erkannt, muss es ohne Anhörung disqualifiziert werden, auch wenn die Wettfahrt wieder gestartet oder wieder gesegelt wird, jedoch nicht, wenn sie vor dem Startsignal verschoben oder abgebrochen wird.\n\nWird ein allgemeiner Rückruf angezeigt oder die Wettfahrt nach dem Startsignal abgebrochen, muss das Wettfahrtkomitee seine Segelnummer vor dem nächsten Ankündigungssignal für diese Wettfahrt anzeigen. Wird die Wettfahrt wieder gestartet oder wieder gesegelt, darf es nicht daran teilnehmen. Wenn es trotzdem teilnimmt, darf seine Disqualifikation bei der Berechnung der Gesamtwertung nicht gestrichen werden.'
        }]
      },{
        id: '31',
        title: 'Berührung einer Bahnmarke',
        rules: [],
        content: 'In einer Wettfahrt darf ein Boot eine Start-Bahnmarke vor dem Starten und eine Bahnmarke, die den Schenkel der Bahn, auf dem es segelt, beginnt, begrenzt oder beendet, sowie eine Ziel-Bahnmarke nach dem Zieldurchgang nicht berühren.'
      },{
        id: '32',
        title: 'Abkürzung oder Abbruch nach dem Start',
        rules: [{
          id: '32.1',
          title: '',
          content: 'Das Wettfahrtkomitee kann nach dem Startsignal die Bahn abkürzen (Zeigen der Flagge S mit zwei Schallsignalen) oder die Wettfahrt abbrechen (Zeigen der Flagge N, N über H oder N über A, mit 3 Schallsignalen),\n\n(a) wegen schlechter Wetterbedingungen\n\n(b) wegen ungenügenden Windes, der es unwahrscheinlich macht, dass ein Boot innerhalb des Zeitlimits durchs Ziel geht,\n\n(c) weil eine Bahnmarke fehlt oder nicht an der richtigen Position liegt, oder\n\n(d) aus jedem anderen Grund, der unmittelbar die Sicherheit oder Fairness des Wettbewerbs beeinflusst.\n\nAußerdem kann das Wettfahrtkomitee die Bahn abkürzen, um weitere vorgesehene Wettfahrten segeln zu können oder die Wettfahrt wegen seines Fehlers im Startverfahren abbrechen. Wenn jedoch ein Boot die Bahn abgesegelt hat und innerhalb eines evtl. vorgegebenen Zeitlimits durch das Ziel gegangen ist, darf das Wettfahrtkomitee die Wettfahrt nicht abbrechen, ohne die Konsequenzen für alle Boote in dieser Wettfahrt oder Wettfahrtserie abzuwägen.'
        }, {
          id: '32.2',
          title: '',
          content: 'Wenn das Wettfahrtkomitee eine Abkürzung der Bahn anzeigt (Zeigen der Flagge S mit zwei Schallsignalen), muss die Ziellinie\n\n(a) an einer zu rundenden Bahnmarke die Linie zwischen der Bahnmarke und einer Stange mit der Flagge S sein, oder\n\n(b) an einer Linie, von der die Bahn verlangt, dass sie überquert werden muss; oder\n\n(c) an einem Tor die Linie zwischen den Tor-Bahnmarken.\n\nDie abgekürzte Bahn muss angezeigt werden, bevor das erste Boot die Ziellinie überquert.'
        }]
      },{
        id: '33',
        title: 'Änderung des nächsten Bahnschenkels',
        rules: [],
        content: 'Das Wettfahrtkomitee kann einen Bahnschenkel, der an einer zu rundenden Bahnmarke oder einem Tor beginnt, durch Verlegung der nächsten Bahnmarke (oder der Ziellinie) verändern und die Änderung allen Booten anzeigen, bevor sie den Schenkel abzusegeln beginnen. Die nächste Bahnmarke braucht zu diesem Zeitpunkt noch nicht auf Position zu liegen.\n\n(a) Wird die Richtung des Bahnschenkels geändert, ist das Signal dafür das Zeigen der Flagge C mit wiederholten Schallsignalen und einem oder beiden Zusatzsignalen\n\n\t(1) der neuen Kompasspeilung,\n\n\t eines grünen Dreiecks bei einer Verlegung nach Steuerbord oder eines roten Rechtecks bei einer Verlegung nach Backbord.\n\n(b) Wird die Länge des Bahnschenkels verändert, ist das Signal dafür das Zeigen der Flagge C mit wiederholten Schallsignalen und einem "-", wenn die Länge verkürzt wird, oder einem "+", wenn sie verlängert wird.\n\n(c) Zur Erhaltung der Form der Bahn können die folgenden Bahnschenkel ohne weitere Anzeige verändert werden.'
      },{
        id: '34',
        title: 'Fehlende Bahnmarke',
        rules: [],
        content: 'Wenn eine Bahnmarke entweder fehlt oder nicht auf Position liegt, muss das Wettfahrtkomitee sie, wenn möglich\n\n(a) auf ihre richtige Position zurückbringen oder durch eine neue von ähnlichem Aussehen ersetzen, oder\n\n(b) durch einen Genstand mit der Flagge M ersetzen und wiederholt Schallsignale geben.'
      },{
        id: '35',
        title: 'Zeitlimit und Wertung',
        rules: [],
        content: 'Wenn ein Boot die Bahn gemäß Regel 28 absegelt und innerhalb des evtl. vorgegebenen Zeitlimits durchs Ziel geht, müssen alle Boote, die durch das Ziel gehen, ihren Zieldurchgangsplätzen entsprechend gewertet werden, außer die Wettfahrt wird abgebrochen. Wenn kein Boot innerhalb des Zeitlimits durchs Ziel geht, muss das Wettfahrtkomitee die Wettfahrt abbrechen.'
      },{
        id: '36',
        title: 'Wieder gestartete oder wieder gesegelte Wettfahrten',
        rules: [],
        content: 'Wird eine Wettfahrt wieder gestartet oder wieder gesegelt, darf ein Verstoß gegen eine Regel in der ursprünglichen Wettfahrt, oder einer früheren Wiederholung eines Starts oder Segelns dieser Wettfahrt\n\n(a) ein Boot nicht an der Teilnahme hindern, außer es hat gegen Regel 30.4 verstoßen; oder\n\n(b) nicht Grund einer Bestrafung des Bootes, außer nach Regel 30.2, 30.4 oder 69 oder nach Regel 14, wenn es eine Verletzung oder einen erheblichen Schaden verursacht hat.'
      }]
    }, {
      title: 'Teil 4',
      description: 'Weitere Erfordernisse einer Wettfahrt',
      sections: [{
        id: '40',
        title: 'Persönliche Auftriebsmittel',
        rules: []
      },{
        id: '41',
        title: 'Hilfe von außen',
        rules: []
      },{
        id: '42',
        title: 'Vortrieb',
        rules: []
      },{
        id: '43',
        title: 'Kleidung und Ausrüstung der Teilnehmer',
        rules: []
      },{
        id: '44',
        title: 'Strafen zum Zeitpunkt eines Vorfalls',
        rules: []
      },{
        id: '45',
        title: 'Aus dem Wasser nehmen; Festmachen; Ankern',
        rules: []
      },{
        id: '46',
        title: 'Verantwortliche Person',
        rules: []
      },{
        id: '47',
        title: 'Einschränkungen bezüglich Ausrüstung und Besatzung',
        rules: []
      },{
        id: '48',
        title: 'Nebelsignale und Lichterführung; Verkehrstrennungsgebiete',
        rules: []
      },{
        id: '49',
        title: 'Position der Besatzung, Relingsdurchführung',
        rules: []
      },{
        id: '50',
        title: 'Segel setzen und Schotführung',
        rules: []
      },{
        id: '51',
        title: 'Beweglicher Ballast',
        rules: []
      },{
        id: '52',
        title: 'Handbetrieb',
        rules: []
      },{
        id: '53',
        title: 'Oberflächenreibung',
        rules: []
      },{
        id: '54',
        title: 'Vorstage und Vorsegelhälse',
        rules: []
      },{
        id: '55',
        title: 'Abfallbeseitigung',
        rules: []
      }]
    }, {
      title: 'Teil 5',
      description: 'Proteste, Wiedergutmachung, Anhörungen, Fehlverhalten und Berufungen',
      sections: []
    }, {
      title: 'Teil 6',
      description: 'Meldung und Qualifikation',
      sections: []
    }, {
      title: 'Teil 7',
      description: 'Veranstaltung von Wettfahrten',
      sections: []
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
