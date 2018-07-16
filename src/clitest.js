
// connect_chain
// load_contract_abi
// deploy_contract AElf.Contracts.Token 0 0x0489da3cad42c556cddf672d6719c8add3ac

// get_tx_result 0x0439283049d3825d546edb7a86f96bf31eeb85bc4f6a7ea67768aa1d686d1c5a
// return你的合约地址 比如这次是：0xdb458e5db5db1b0ecad3408acc344c96794c
// load_contract_abi 0xdb458e5db5db1b0ecad3408acc344c96794c

// broadcast_tx {"from":"0x0489da3cad42c556cddf672d6719c8add3ac","to":"0x9166975b55b7c67572a2e6623795168f4430","method":"Initialize","incr":"3","params":["s","100",1000000,10]}
// txid: 0x6dc2d050a9c140f9bea8bb59a06fea01a6f59c055afbd3f9ae596cc038feaa80

// 0x167257973f84576ef759c9c2db60840ae07fb7e52b4d016006d22f323844d9d3    increment: 3


// broadcast_tx {"from":"0x0489da3cad42c556cddf672d6719c8add3ac","to":"0x9166975b55b7c67572a2e6623795168f4430","method":"TotalSupply","incr":"2"}
// txid: 0x7f96442d6c74ad14ec6d91c27eb947a80e24c12ffedd6dd019e0a49c5762726f
let contract_abi = {
    "Name": "AElf.Contracts.Token.SimpleToken",
    "Methods": [
    {
        "Name": "Symbol",
        "Params": null,
        "ReturnType": "string",
        "IsAsync": false
    },
    {
        "Name": "TokenName",
        "Params": null,
        "ReturnType": "string",
        "IsAsync": false
    },
    {
        "Name": "TotalSupply",
        "Params": null,
        "ReturnType": "ulong",
        "IsAsync": false
    },
    {
        "Name": "Decimals",
        "Params": null,
        "ReturnType": "uint",
        "IsAsync": false
    },
    {
        "Name": "BalanceOf",
        "Params": [
            {
                "Type": "AElf.Kernel.Hash",
                "Name": "owner"
            }
        ],
        "ReturnType": "ulong",
        "IsAsync": false
    },
    {
        "Name": "Allowance",
        "Params": [
            {
                "Type": "AElf.Kernel.Hash",
                "Name": "owner"
            },
            {
                "Type": "AElf.Kernel.Hash",
                "Name": "spender"
            }
        ],
        "ReturnType": "ulong",
        "IsAsync": false
    },
    {
        "Name": "Long",
        "Params": null,
        "ReturnType": "long",
        "IsAsync": false
    },
    {
        "Name": "Int",
        "Params": null,
        "ReturnType": "int",
        "IsAsync": false
    },
    {
        "Name": "Bool",
        "Params": null,
        "ReturnType": "bool",
        "IsAsync": false
    },
    {
        "Name": "Initialize",
        "Params": [
            {
                "Type": "string",
                "Name": "symbol"
            },
            {
                "Type": "string",
                "Name": "tokenName"
            },
            {
                "Type": "ulong",
                "Name": "totalSupply"
            },
            {
                "Type": "uint",
                "Name": "decimals"
            }
        ],
        "ReturnType": "void",
        "IsAsync": false
    },
    {
        "Name": "Transfer",
        "Params": [
            {
                "Type": "AElf.Kernel.Hash",
                "Name": "to"
            },
            {
                "Type": "ulong",
                "Name": "amount"
            }
        ],
        "ReturnType": "void",
        "IsAsync": false
    },
    {
        "Name": "TransferFrom",
        "Params": [
            {
                "Type": "AElf.Kernel.Hash",
                "Name": "from"
            },
            {
                "Type": "AElf.Kernel.Hash",
                "Name": "to"
            },
            {
                "Type": "ulong",
                "Name": "amount"
            }
        ],
        "ReturnType": "void",
        "IsAsync": false
    },
    {
        "Name": "Approve",
        "Params": [
            {
                "Type": "AElf.Kernel.Hash",
                "Name": "spender"
            },
            {
                "Type": "ulong",
                "Name": "amount"
            }
        ],
        "ReturnType": "void",
        "IsAsync": false
    },
    {
        "Name": "UnApprove",
        "Params": [
            {
                "Type": "AElf.Kernel.Hash",
                "Name": "spender"
            },
            {
                "Type": "ulong",
                "Name": "amount"
            }
        ],
        "ReturnType": "void",
        "IsAsync": false
    }
],
    "Events": [
    {
        "Name": "AElf.Contracts.Token.Transfered",
        "Indexed": null,
        "NonIndexed": [
            {
                "Type": "AElf.Kernel.Hash",
                "Name": "From"
            },
            {
                "Type": "AElf.Kernel.Hash",
                "Name": "To"
            },
            {
                "Type": "ulong",
                "Name": "Amount"
            }
        ]
    },
    {
        "Name": "AElf.Contracts.Token.Approved",
        "Indexed": null,
        "NonIndexed": [
            {
                "Type": "AElf.Kernel.Hash",
                "Name": "Owner"
            },
            {
                "Type": "AElf.Kernel.Hash",
                "Name": "Spender"
            },
            {
                "Type": "ulong",
                "Name": "Amount"
            }
        ]
    },
    {
        "Name": "AElf.Contracts.Token.UnApproved",
        "Indexed": null,
        "NonIndexed": [
            {
                "Type": "AElf.Kernel.Hash",
                "Name": "Owner"
            },
            {
                "Type": "AElf.Kernel.Hash",
                "Name": "Spender"
            },
            {
                "Type": "ulong",
                "Name": "Amount"
            }
        ]
    }
],
    "Types": null
}
