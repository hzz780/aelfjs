var Aelf = require('./lib/aelf.js');
var aelf = new Aelf(new Aelf.providers.HttpProvider("http://localhost:1234"));

// var tokenc = aelf.chain.getContractAbi('0x75b19ac4415c072512d011634ac86a9c58cf');
aelf.chain.connectChain();

// var tokenc = aelf.chain.contractAt('0x75b19ac4415c072512d011634ac86a9c58cf');
var tokenc = aelf.chain.contractAt('0xdb458e5db5db1b0ecad3408acc344c96794c');
aelf.chain.getIncrement('0x04bb9c6c297ea90b1bc3e6af2c87d416583e');
let totalSupply = tokenc.TotalSupply();
console.log('totalSupply: ', JSON.stringify(totalSupply));

// tokenc.Initialize('test','hzz',10000,1);


// aelf.chain.sendTransaction({"from":"0x0489da3cad42c556cddf672d6719c8add3ac","to":"0x75b19ac4415c072512d011634ac86a9c58cf","method":"TotalSupply","incr":"2"});
//
// aelf.chain.sendTransaction({"from":"0x0489da3cad42c556cddf672d6719c8add3ac","to":"0x582b198dd8251d2125c8cbbc114c5864d616","method":"TotalSupply","incr":"3"});
// console.log(aelf);
// console.log(tokenc);



// var err = {
//     "rawtx": {
//     "from": "0x0489da3cad42c556cddf672d6719c8add3ac",
//         "to": "0x75b19ac4415c072512d011634ac86a9c58cf",
//         "method": "TotalSupply",
//         "incr": "2"
// };
//
// var right = {
//     "rawtx": "0x0a140a120489da3cad42c556cddf672d6719c8add3ac12140a1275b19ac4415c072512d011634ac86a9c58cf1802220b546f74616c537570706c793a210083650166497fee8ee2c1c7b896fa9b12ed967df9a42017f6beb255d753171c8e42204da7a22fd7c450414911a80631ed89a769efc08c407149fb8b44b649eba173454a410489da3cad42c556cddf672d6719c8add3ac020ef0ada8cfff52bf71a5d7c875ba6c2e79e214b52caff0e54b7c75b2f6b6fe843cbeaf6b643c80887849ddbd1d11"
// };