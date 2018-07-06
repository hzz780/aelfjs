/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file eth.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @author Fabian Vogelsteller <fabian@ethdev.com>
 * @date 2015
 */

"use strict";

var formatters = require('../formatters');
var Method = require('../method');
var c = require('../../utils/config');

// var blockCall = function (args) {
//     return (utils.isString(args[0]) && args[0].indexOf('0x') === 0) ? "eth_getBlockByHash" : "eth_getBlockByNumber";
// };

// var transactionFromBlockCall = function (args) {
//     return (utils.isString(args[0]) && args[0].indexOf('0x') === 0) ? 'eth_getTransactionByBlockHashAndIndex' : 'eth_getTransactionByBlockNumberAndIndex';
// };

// var uncleCall = function (args) {
//     return (utils.isString(args[0]) && args[0].indexOf('0x') === 0) ? 'eth_getUncleByBlockHashAndIndex' : 'eth_getUncleByBlockNumberAndIndex';
// };

// var getBlockTransactionCountCall = function (args) {
//     return (utils.isString(args[0]) && args[0].indexOf('0x') === 0) ? 'eth_getBlockTransactionCountByHash' : 'eth_getBlockTransactionCountByNumber';
// };

// var uncleCountCall = function (args) {
//     return (utils.isString(args[0]) && args[0].indexOf('0x') === 0) ? 'eth_getUncleCountByBlockHash' : 'eth_getUncleCountByBlockNumber';
// };

function Chain(aelf) {
    this._requestManager = aelf._requestManager;

    var self = this;

    methods().forEach(function(method) {
        method.attachToObject(self);
        method.setRequestManager(self._requestManager);
    });

    properties().forEach(function(p) {
        p.attachToObject(self);
        p.setRequestManager(self._requestManager);
    });
}

Object.defineProperty(Chain.prototype, 'defaultAccount', {
    get: function () {
        return c.defaultAccount;
    },
    set: function (val) {
        c.defaultAccount = val;
        return val;
    }
});

var methods = function () {
    var getCommands = new Method({
        name: 'getCommands',
        call: 'get_commands',
        params: 0,
    });

    var connectChain = new Method({
        name: 'connectChain',
        call: 'connect_chain',
        params: 0,
    });

    var getContractAbi = new Method({
        name: 'getContractAbi',
        call: 'get_contract_abi',
        params: 1,
        inputFormatter: [formatters.inputAddressFormatter],
        outputFormatter: formatters.outputAbiFormatter
    });

    return [
        getCommands,
        connectChain,
        getContractAbi
    ];
};


var properties = function () {
    // TODO: implement
    return [
        // new Property({
        //     name: 'coinbase',
        //     getter: 'eth_coinbase'
        // })
    ];
};

// Eth.prototype.contract = function (abi) {
//     var factory = new Contract(this, abi);
//     return factory;
// };

module.exports = Chain;
