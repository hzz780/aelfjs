var sha256 = require('js-sha256').sha256;
var elliptic = require('elliptic');
var proto = require('./proto.js');
var ec = new elliptic.ec('secp256k1');
var keyPair = ec.keyFromPrivate("8879cf1dc1744f0062ca9681df82613a63d647f1d34a6f7a440c2b8c8193826e");
var privKey = keyPair.getPrivate("hex");
var pubKey = keyPair.getPublic();

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
};
