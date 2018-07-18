
// connect_chain
// load_contract_abi
// deploy_contract AElf.Contracts.Token 0 0x0489da3cad42c556cddf672d6719c8add3ac

// get_tx_result 0x0439283049d3825d546edb7a86f96bf31eeb85bc4f6a7ea67768aa1d686d1c5a
// return你的合约地址 比如这次是：0xdb458e5db5db1b0ecad3408acc344c96794c
// load_contract_abi 0xdb458e5db5db1b0ecad3408acc344c96794c

var broadcast_tx =
    {"from":"0x0489da3cad42c556cddf672d6719c8add3ac","to":"0xac7b36d46f7c2950aaeb5140f40e6263b2ae","method":"Initialize","incr":"16","params":["s","100",100,10]}
// txid: 0x6dc2d050a9c140f9bea8bb59a06fea01a6f59c055afbd3f9ae596cc038feaa80

// 0x167257973f84576ef759c9c2db60840ae07fb7e52b4d016006d22f323844d9d3    increment: 3


// broadcast_tx {"from":"0x0489da3cad42c556cddf672d6719c8add3ac","to":"0xdb458e5db5db1b0ecad3408acc344c96794c","method":"TotalSupply","incr":"10"}
// txid: 0x7f96442d6c74ad14ec6d91c27eb947a80e24c12ffedd6dd019e0a49c5762726f

// Transfer
let Transfer = {"from":"0x0489da3cad42c556cddf672d6719c8add3ac","to":"0xdb458e5db5db1b0ecad3408acc344c96794c","method":"Transfer","incr":"10","params":["0x04bb9c6c297ea90b1bc3e6af2c87d416583e",10000]}
