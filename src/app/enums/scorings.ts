import { Pipe, PipeTransform } from "@angular/core";

export enum Scorings {
    DNC,
    DNS,
    OCS,
    ZFP,
    UFD,
    BFD,
    SCP,
    DNF,
    RET,
    DSQ,
    DNE,
    RDG,
    DPI
}

const ScoringFullDescriptions = [
    'Nicht gestartet; nicht ins Startgebiet gekommen',
    'Nicht gestartet (aber nicht DNC oder OCS)',
    'Nicht gestartet (Fehlstart oder 30.1 verletzt)',
    '20%-Strafe nach Regel 30.2',
    'Nach Regel 30.3 disqualifiziert',
    'Nach Regel 30.4 disqualifiziert',
    'Wertungsstrafe angewandt',
    'Nicht durchs Ziel gegangen',
    'Aufgegeben',
    'Disqualifikation',
    'Disqualifikation, die nicht gestrichen werden kann',
    'Wiedergutmachung gewährt',
    'Ermessensstrafe verhängt'
]

@Pipe({
    name: 'scoring',
    pure: false
})
export class ScoringPipe implements PipeTransform {
    transform(scoringNumber: number, fullDescription: Boolean): any {
        if(!fullDescription) return Scorings[scoringNumber]
        else return ScoringFullDescriptions[scoringNumber]
    }
}