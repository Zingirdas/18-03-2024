let metai = Number(process.argv[2]);

if (metai >= 1896 && (metai - 1896) % 4 === 0) {
    let numeris = Math.floor((metai - 1896) / 4) + 1;
    console.log(metai + " metai buvo olimpiniai, numeris: " + numeris + ".");
} else {
    console.log("Metai nebuvo olimpiniai.");
}
