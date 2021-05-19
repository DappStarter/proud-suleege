require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nature tail sign strong rival ranch protect guess civil army gesture'; 
let testAccounts = [
"0xdfd125e23f0500034a7b95dc7e927042987f02398cae8d52c8e95e2f6d92dd22",
"0x163430d49561c45e3c113af77982d82201c3aaff5b86d68707de402d1ea151a6",
"0x5521818ed3264359bcd59209612f0935ed2e8fe41220b5dfee082f5614c8e926",
"0x3fc480cf628a896b8eac5014eb8b50d209b598f1c77c787519542f25681b38c6",
"0x5e53cfc1970c2bb63c86dad455fb5f0dc2e295c07b998fb8d2d74f9f1551d0c6",
"0x3f7a0ca16172a21cccfa17444f437f79bfbabb13d1d4968c229cb66aba437941",
"0x4b5a2df314b21b6c3e20fb5960aa9399c317a870d4fbb8dea5792ff212267b22",
"0x513046433ef25f9d6a5a70a845401de194380163d50f9f66bc3aceb0949023a3",
"0x5352a9fc892fad4006541b3576a5fcde91c950f9d031e7847679a0a93d94f781",
"0xd629147757cd98a1981d8842b6f059bd0091064f7bf0a37ae9ba822dcee5aea5"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
