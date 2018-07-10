
// connect_chain
// load_contract_abi
// deploy_contract AElf.Contracts.Token 0 0x0489da3cad42c556cddf672d6719c8add3ac
// get_tx_result return你的合约地址 比如这次是：0x75b19ac4415c072512d011634ac86a9c58cf
// load_contract_abi 0x75b19ac4415c072512d011634ac86a9c58cf

// broadcast_tx {"from":"0x0489da3cad42c556cddf672d6719c8add3ac","to":"0x75b19ac4415c072512d011634ac86a9c58cf","method":"Initialize","incr":"1","params":["s","100",1000000,10]}

// broadcast_tx {"from":"0x0489da3cad42c556cddf672d6719c8add3ac","to":"0x75b19ac4415c072512d011634ac86a9c58cf","method":"TotalSupply","incr":"2"}
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
