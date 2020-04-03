let validSerials = [];

for (let i = 0; i < 10000; i++) {
    const a = i.toString();
    const c = a.padStart(4, '0').split("").reverse().join("");
    const b = ((parseInt(c) * 7) % 10000).toString();
    const d = (10000 - (parseInt(a) + parseInt(b) + parseInt(c)) % 10000).toString();
    const serial = a.padStart(4, '0') + '-' + b.padStart(4, '0') + '-' + c + '-' + d.padStart(4, '0');
    if (checkSerial(serial) && validSerials.indexOf(serial) === -1) {
        validSerials.push(serial);
    }
}