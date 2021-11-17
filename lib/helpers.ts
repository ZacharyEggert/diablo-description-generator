import { make } from "./options";
const safeCapitals = [
    ...make.map(x => x.toLowerCase()),
    'c',
    'd',
    'v',
    'u',
    'bb',
    'deluxe',
    'kluson',
    'abr-1',
    'tune-o-matic',
    'seymour',
    'duncan',
    'stratocaster',
    'strat',
    'tele',
    'telecaster',
    '498t',
    '498r',
    '490t',
    '490r',


];

export const fixCase = (paragraph:string) :string => {
    const words = paragraph.split(' ');
    const fixed = words.map(word => {
        if (safeCapitals.includes(word.toLowerCase())) {
            return word;
        }
        return word.toLowerCase();
    });

    return fixed.join(' ');
}