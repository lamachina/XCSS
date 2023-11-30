data = Buffer.from("be4ffcd4793e7bbca27e6813d98cf842e4e4248e4b32cbc7bcb1409c468b808000000000", "hex");

Array.prototype.map.call(new Uint8Array(data),
    x => ('00' + x.toString(16)).slice(-2))
    .join('').match(/[a-fA-F0-9]{2}/g).reverse().join('');

console.log(data);
console.log(data.toString("latin1"));
