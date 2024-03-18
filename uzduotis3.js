let h = Number(process.argv[2]);
let m = Number(process.argv[3]);
let s = Number(process.argv[4]);

const poSekundes = function pridedamSekunde(h, m, s) {
    s++;

    if (s >= 60) {
        s = 0;
        m++;

    } if (m >= 60) {
        m = 0;
        h++;

    } if (h >= 24)
        h = 0;

    let rezultatas = `${h}:${m}:${s}`;
    return [rezultatas];
}
console.log(poSekundes(h, m, s));
