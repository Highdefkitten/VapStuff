import Note$Tone from './Note$Tone.js';
export default interface Note {
    flattened(): Note;
    getId(): number;
    getOctave(): number;
    getTone(): Note$Tone;
    isSharped(): boolean;
    sharped(): Note;
}
export default class Note {
    static get $javaClass(): any;
    constructor(note: number);
    constructor(octave: number, tone: Note$Tone, sharped: boolean);
    static flat(octave: number, tone: Note$Tone): Note;
    static natural(octave: number, tone: Note$Tone): Note;
    static sharp(octave: number, tone: Note$Tone): Note;
}
