var sha256 = require('js-sha256').sha256;
var elliptic = require('elliptic');
var proto = require('./proto.js');
var ec = new elliptic.ec('secp256k1');
var keyPair = ec.keyFromPrivate("8879cf1dc1744f0062ca9681df82613a63d647f1d34a6f7a440c2b8c8193826e");
var privKey = keyPair.getPrivate("hex");
var pubKey = keyPair.getPublic();

// 引用Buffer库，保证browser端的使用。
var Buffer = require('buffer').Buffer;

// Todo 助记词及私钥生成，迁移比特币方案。

// 和C#保持同步
let getAddressFromPubKey = function (pubKey) {
    let pubKeyEncoded = pubKey.encode();
    pubKeyEncoded.length = 18;
    let address = '';
    pubKeyEncoded.map(item => {
        let hex = item.toString(16);
        if (hex.length <= 1) {
            hex = '0' + hex;
        }
        address+= hex;
    });
    address = '0x' + address;
    return address;
};

// let address = getAddressFromPubKey(pubKey);

var signTransaction = function(rawTxn){
    rawTxn.R = null;
    rawTxn.S = null;
    rawTxn.P = null;
    if(rawTxn.Params.length == 0){
        rawTxn.Params = null;
    }
    var ser = proto.Transaction.encode(rawTxn).finish();
    var msgHash = sha256(ser);
    var sigObj = ec.sign(Buffer.from(msgHash, "hex"), privKey, "hex", {canonical: true});
    rawTxn.R = sigObj.r.toBuffer();
    rawTxn.S = sigObj.s.toBuffer();
    rawTxn.P = new Buffer(pubKey.encode());
    return rawTxn;
}

module.exports = {
    signTransaction: signTransaction,
    getAddressFromPubKey: getAddressFromPubKey
};
