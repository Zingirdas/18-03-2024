let armstrongoNumeriai = [];

for (let skaicius = 100; skaicius < 999; skaicius++) {
    let sumaKubu = 0;
    let laikinasSkaicius = skaicius;
    while (laikinasSkaicius > 0) {
        let digit = laikinasSkaicius % 10;
        sumaKubu += Math.pow(digit, 3);
        laikinasSkaicius = Math.floor(laikinasSkaicius / 10);
    }
    if (sumaKubu === skaicius) {
        armstrongoNumeriai.push(skaicius);
    }
}
console.log(armstrongoNumeriai);

