require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom nasty flip spot chat crater remain minor gloom enrich orange giggle'; 
let testAccounts = [
"0xc0bab765aa079925116f75d378844f29d45af8a919bfb9c502d19bea6beea9fa",
"0xf636f134c6e0eb8699368e11ede0f093aaa8b939d6879b10cd97822fcd647176",
"0xa4ed6461714b63d9fe8514c38d7cf899fa395747eeafccbb93af7dfd8271f7d7",
"0x6605c27d8e5997dcf9b8410b53ef41736e09821e7b98322d9506c5a8290e9cb5",
"0x7e5871e5c2ee36790228daa70a89baef84afbfa14e390b11270aacb8a2605bd0",
"0x0e293a8e0abc10b19c5d35df6589ca77fcb4b1b205d74115ebf450ddaca7a5aa",
"0x3e5b76e233934b87563bfc3953305d264325d0858d2117bf4c96660818923dc5",
"0xb1fb5cb2822225aa77dc5dc02b00ffee9ad6ce63f6d605beb75e3eee1f0be7a7",
"0x7a657ba9990ed3facb6082500a24cb72019d279567021cb313ddaeb4e4c8677f",
"0x04dca0ee0dd088c68aa01c801697c571146f23c9a3c7e6a168b10409bb3ff5dd"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


