/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ShowtimeBakeSale,
  ShowtimeBakeSaleInterface,
} from "../ShowtimeBakeSale";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_showtimeMT",
        type: "address",
      },
      {
        internalType: "address",
        name: "_showtimeMarket",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "payees",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "shares_",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftContract",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "UnexpectedERC1155BatchTransfer",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "UnexpectedERC1155Transfer",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ERC20PaymentReleased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "PayeeAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PaymentReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PaymentReleased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "listingId",
        type: "uint256",
      },
    ],
    name: "cancelSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_quantity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_currency",
        type: "address",
      },
    ],
    name: "createSale",
    outputs: [
      {
        internalType: "uint256",
        name: "listingId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "payee",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "account",
        type: "address",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "released",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "released",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "shares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "showtimeMT",
    outputs: [
      {
        internalType: "contract IERC1155",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "showtimeMarket",
    outputs: [
      {
        internalType: "contract IShowtimeV1Market",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "totalReleased",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalReleased",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalShares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b5060405162001f0238038062001f028339810160408190526200003491620004ea565b8382828051825114620000a95760405162461bcd60e51b815260206004820152603260248201527f5061796d656e7453706c69747465723a2070617965657320616e6420736861726044820152710cae640d8cadccee8d040dad2e6dac2e8c6d60731b60648201526084015b60405180910390fd5b6000825111620000fc5760405162461bcd60e51b815260206004820152601a60248201527f5061796d656e7453706c69747465723a206e6f207061796565730000000000006044820152606401620000a0565b60005b82518110156200016857620001538382815181106200012257620001226200068f565b60200260200101518383815181106200013f576200013f6200068f565b60200260200101516200021560201b60201c565b806200015f816200065b565b915050620000ff565b50505060601b6001600160601b0319166080526200018d620001873390565b62000401565b6001600160601b0319606085811b821660a05284901b1660c05260405163a22cb46560e01b81526001600160a01b0380851660048301526001602483015285169063a22cb46590604401600060405180830381600087803b158015620001f257600080fd5b505af115801562000207573d6000803e3d6000fd5b5050505050505050620006bb565b6001600160a01b038216620002825760405162461bcd60e51b815260206004820152602c60248201527f5061796d656e7453706c69747465723a206163636f756e74206973207468652060448201526b7a65726f206164647265737360a01b6064820152608401620000a0565b60008111620002d45760405162461bcd60e51b815260206004820152601d60248201527f5061796d656e7453706c69747465723a207368617265732061726520300000006044820152606401620000a0565b6001600160a01b03821660009081526002602052604090205415620003505760405162461bcd60e51b815260206004820152602b60248201527f5061796d656e7453706c69747465723a206163636f756e7420616c726561647960448201526a206861732073686172657360a81b6064820152608401620000a0565b60048054600181019091557f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0180546001600160a01b0319166001600160a01b038416908117909155600090815260026020526040812082905554620003b890829062000640565b600055604080516001600160a01b0384168152602081018390527f40c340f65e17194d14ddddb073d3c9f888e3cb52b5aae0c6c7706b4fbc905fac910160405180910390a15050565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b80516001600160a01b03811681146200046b57600080fd5b919050565b600082601f8301126200048257600080fd5b815160206200049b62000495836200061a565b620005e7565b80838252828201915082860187848660051b8901011115620004bc57600080fd5b60005b85811015620004dd57815184529284019290840190600101620004bf565b5090979650505050505050565b600080600080608085870312156200050157600080fd5b6200050c8562000453565b935060206200051d81870162000453565b60408701519094506001600160401b03808211156200053b57600080fd5b818801915088601f8301126200055057600080fd5b81516200056162000495826200061a565b8082825285820191508585018c878560051b88010111156200058257600080fd5b600095505b83861015620005b0576200059b8162000453565b83526001959095019491860191860162000587565b5060608b01519097509450505080831115620005cb57600080fd5b5050620005db8782880162000470565b91505092959194509250565b604051601f8201601f191681016001600160401b0381118282101715620006125762000612620006a5565b604052919050565b60006001600160401b03821115620006365762000636620006a5565b5060051b60200190565b6000821982111562000656576200065662000679565b500190565b600060001982141562000672576200067262000679565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b60805160601c60a05160601c60c05160601c6117eb620007176000396000818161025801528181610bde0152610d690152600081816104cd0152818161056c0152610631015260008181610ca00152610ddd01526117eb6000f3fe6080604052600436106101625760003560e01c80638da5cb5b116100c0578063d79779b211610074578063f23a6e6111610059578063f23a6e611461047b578063f2fde38b1461049b578063f40dc537146104bb57600080fd5b8063d79779b214610430578063e33b7de31461046657600080fd5b8063bc197c81116100a5578063bc197c81146103a1578063bd94b005146103da578063ce7c2ac2146103fa57600080fd5b80638da5cb5b1461034d5780639852595c1461036b57600080fd5b8063406072a911610117578063715018a6116100fc578063715018a6146102f85780637c16e25f1461030d5780638b83209b1461032d57600080fd5b8063406072a91461029257806348b75044146102d857600080fd5b8063191655871161014857806319165587146102075780633a98ef39146102275780633abce0901461024657600080fd5b8062f714ce146101b057806301ffc9a7146101d257600080fd5b366101ab577f6ef95f06320e7a25a04a175ca677b7052bdd97131872c2192525a629f51be77033604080516001600160a01b0390921682523460208301520160405180910390a1005b600080fd5b3480156101bc57600080fd5b506101d06101cb3660046115e3565b6104ef565b005b3480156101de57600080fd5b506101f26101ed36600461154e565b610694565b60405190151581526020015b60405180910390f35b34801561021357600080fd5b506101d06102223660046113d4565b6106cb565b34801561023357600080fd5b506000545b6040519081526020016101fe565b34801561025257600080fd5b5061027a7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016101fe565b34801561029e57600080fd5b506102386102ad366004611578565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205490565b3480156102e457600080fd5b506101d06102f3366004611578565b61087c565b34801561030457600080fd5b506101d0610ae7565b34801561031957600080fd5b50610238610328366004611608565b610b4d565b34801561033957600080fd5b5061027a6103483660046115b1565b610c63565b34801561035957600080fd5b506007546001600160a01b031661027a565b34801561037757600080fd5b506102386103863660046113d4565b6001600160a01b031660009081526003602052604090205490565b3480156103ad57600080fd5b506103c16103bc3660046113f1565b610c93565b6040516001600160e01b031990911681526020016101fe565b3480156103e657600080fd5b506101d06103f53660046115b1565b610cf9565b34801561040657600080fd5b506102386104153660046113d4565b6001600160a01b031660009081526002602052604090205490565b34801561043c57600080fd5b5061023861044b3660046113d4565b6001600160a01b031660009081526005602052604090205490565b34801561047257600080fd5b50600154610238565b34801561048757600080fd5b506103c16104963660046114b0565b610dd0565b3480156104a757600080fd5b506101d06104b63660046113d4565b610e37565b3480156104c757600080fd5b5061027a7f000000000000000000000000000000000000000000000000000000000000000081565b6007546001600160a01b0316331461054e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b604051627eeac760e11b8152306004820152602481018390526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169062fdd58e9060440160206040518083038186803b1580156105b557600080fd5b505afa1580156105c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ed91906115ca565b604051637921219560e11b81523060048201526001600160a01b038481166024830152604482018690526064820183905260a06084830152600060a48301529192507f00000000000000000000000000000000000000000000000000000000000000009091169063f242432a9060c401600060405180830381600087803b15801561067757600080fd5b505af115801561068b573d6000803e3d6000fd5b50505050505050565b60006001600160e01b03198216630271189760e51b14806106c557506301ffc9a760e01b6001600160e01b03198316145b92915050565b6001600160a01b03811660009081526002602052604090205461073f5760405162461bcd60e51b815260206004820152602660248201527f5061796d656e7453706c69747465723a206163636f756e7420686173206e6f2060448201526573686172657360d01b6064820152608401610545565b600061074a60015490565b61075490476116fd565b90506000610781838361077c866001600160a01b031660009081526003602052604090205490565b610f19565b9050806107e45760405162461bcd60e51b815260206004820152602b60248201527f5061796d656e7453706c69747465723a206163636f756e74206973206e6f742060448201526a191d59481c185e5b595b9d60aa1b6064820152608401610545565b6001600160a01b0383166000908152600360205260408120805483929061080c9084906116fd565b92505081905550806001600082825461082591906116fd565b9091555061083590508382610f5e565b604080516001600160a01b0385168152602081018390527fdf20fd1e76bc69d672e4814fafb2c449bba3a5369d8359adf9e05e6fde87b056910160405180910390a1505050565b6001600160a01b0381166000908152600260205260409020546108f05760405162461bcd60e51b815260206004820152602660248201527f5061796d656e7453706c69747465723a206163636f756e7420686173206e6f2060448201526573686172657360d01b6064820152608401610545565b6001600160a01b0382166000908152600560205260408120546040516370a0823160e01b81523060048201526001600160a01b038516906370a082319060240160206040518083038186803b15801561094857600080fd5b505afa15801561095c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061098091906115ca565b61098a91906116fd565b905060006109c3838361077c87876001600160a01b03918216600090815260066020908152604080832093909416825291909152205490565b905080610a265760405162461bcd60e51b815260206004820152602b60248201527f5061796d656e7453706c69747465723a206163636f756e74206973206e6f742060448201526a191d59481c185e5b595b9d60aa1b6064820152608401610545565b6001600160a01b03808516600090815260066020908152604080832093871683529290529081208054839290610a5d9084906116fd565b90915550506001600160a01b03841660009081526005602052604081208054839290610a8a9084906116fd565b90915550610a9b905084848361107c565b604080516001600160a01b038581168252602082018490528616917f3be5b7a71e84ed12875d241991c70855ac5817d847039e17a9d895c1ceb0f18a910160405180910390a250505050565b6007546001600160a01b03163314610b415760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610545565b610b4b60006110e3565b565b6007546000906001600160a01b03163314610baa5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610545565b604051637c16e25f60e01b81526004810186905260248101859052604481018490526001600160a01b0383811660648301527f00000000000000000000000000000000000000000000000000000000000000001690637c16e25f90608401602060405180830381600087803b158015610c2257600080fd5b505af1158015610c36573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c5a91906115ca565b95945050505050565b600060048281548110610c7857610c786117b3565b6000918252602090912001546001600160a01b031692915050565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610ce45733878760405163ca6b346b60e01b815260040161054593929190611665565b5063bc197c8160e01b98975050505050505050565b6007546001600160a01b03163314610d535760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610545565b60405163bd94b00560e01b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063bd94b00590602401600060405180830381600087803b158015610db557600080fd5b505af1158015610dc9573d6000803e3d6000fd5b5050505050565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610e245760405163448a84cd60e11b815233600482015260248101869052604401610545565b5063f23a6e6160e01b9695505050505050565b6007546001600160a01b03163314610e915760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610545565b6001600160a01b038116610f0d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610545565b610f16816110e3565b50565b600080546001600160a01b038516825260026020526040822054839190610f409086611737565b610f4a9190611715565b610f549190611756565b90505b9392505050565b80471015610fae5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e63650000006044820152606401610545565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610ffb576040519150601f19603f3d011682016040523d82523d6000602084013e611000565b606091505b50509050806110775760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d617920686176652072657665727465640000000000006064820152608401610545565b505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1663a9059cbb60e01b17905261107790849061114d565b600780546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60006111a2826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166112329092919063ffffffff16565b80519091501561107757808060200190518101906111c0919061152c565b6110775760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610545565b6060610f548484600085856001600160a01b0385163b6112945760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610545565b600080866001600160a01b031685876040516112b09190611649565b60006040518083038185875af1925050503d80600081146112ed576040519150601f19603f3d011682016040523d82523d6000602084013e6112f2565b606091505b509150915061130282828661130d565b979650505050505050565b6060831561131c575081610f57565b82511561132c5782518084602001fd5b8160405162461bcd60e51b815260040161054591906116ca565b60008083601f84011261135857600080fd5b50813567ffffffffffffffff81111561137057600080fd5b6020830191508360208260051b850101111561138b57600080fd5b9250929050565b60008083601f8401126113a457600080fd5b50813567ffffffffffffffff8111156113bc57600080fd5b60208301915083602082850101111561138b57600080fd5b6000602082840312156113e657600080fd5b8135610f57816117c9565b60008060008060008060008060a0898b03121561140d57600080fd5b8835611418816117c9565b97506020890135611428816117c9565b9650604089013567ffffffffffffffff8082111561144557600080fd5b6114518c838d01611346565b909850965060608b013591508082111561146a57600080fd5b6114768c838d01611346565b909650945060808b013591508082111561148f57600080fd5b5061149c8b828c01611392565b999c989b5096995094979396929594505050565b60008060008060008060a087890312156114c957600080fd5b86356114d4816117c9565b955060208701356114e4816117c9565b94506040870135935060608701359250608087013567ffffffffffffffff81111561150e57600080fd5b61151a89828a01611392565b979a9699509497509295939492505050565b60006020828403121561153e57600080fd5b81518015158114610f5757600080fd5b60006020828403121561156057600080fd5b81356001600160e01b031981168114610f5757600080fd5b6000806040838503121561158b57600080fd5b8235611596816117c9565b915060208301356115a6816117c9565b809150509250929050565b6000602082840312156115c357600080fd5b5035919050565b6000602082840312156115dc57600080fd5b5051919050565b600080604083850312156115f657600080fd5b8235915060208301356115a6816117c9565b6000806000806080858703121561161e57600080fd5b843593506020850135925060408501359150606085013561163e816117c9565b939692955090935050565b6000825161165b81846020870161176d565b9190910192915050565b6001600160a01b03841681526040602082015281604082015260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8311156116ad57600080fd5b8260051b8085606085013760009201606001918252509392505050565b60208152600082518060208401526116e981604085016020870161176d565b601f01601f19169190910160400192915050565b600082198211156117105761171061179d565b500190565b60008261173257634e487b7160e01b600052601260045260246000fd5b500490565b60008160001904831182151516156117515761175161179d565b500290565b6000828210156117685761176861179d565b500390565b60005b83811015611788578181015183820152602001611770565b83811115611797576000848401525b50505050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6001600160a01b0381168114610f1657600080fdfea164736f6c6343000807000a";

type ShowtimeBakeSaleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ShowtimeBakeSaleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ShowtimeBakeSale__factory extends ContractFactory {
  constructor(...args: ShowtimeBakeSaleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ShowtimeBakeSale";
  }

  deploy(
    _showtimeMT: string,
    _showtimeMarket: string,
    payees: string[],
    shares_: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ShowtimeBakeSale> {
    return super.deploy(
      _showtimeMT,
      _showtimeMarket,
      payees,
      shares_,
      overrides || {}
    ) as Promise<ShowtimeBakeSale>;
  }
  getDeployTransaction(
    _showtimeMT: string,
    _showtimeMarket: string,
    payees: string[],
    shares_: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _showtimeMT,
      _showtimeMarket,
      payees,
      shares_,
      overrides || {}
    );
  }
  attach(address: string): ShowtimeBakeSale {
    return super.attach(address) as ShowtimeBakeSale;
  }
  connect(signer: Signer): ShowtimeBakeSale__factory {
    return super.connect(signer) as ShowtimeBakeSale__factory;
  }
  static readonly contractName: "ShowtimeBakeSale";
  public readonly contractName: "ShowtimeBakeSale";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ShowtimeBakeSaleInterface {
    return new utils.Interface(_abi) as ShowtimeBakeSaleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ShowtimeBakeSale {
    return new Contract(address, _abi, signerOrProvider) as ShowtimeBakeSale;
  }
}
