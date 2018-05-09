// Type definitions for fabric-shim-crypto-crypto 1.1.1
// Project: https://github.com/hyperledger/fabric-chaincode-node
// Definitions by: TheLedger <https://github.com/wearetheledger>

/// <reference types="node" />

/* tslint:disable */

declare module 'fabric-shim-crypto' {
    export = ShimCrypto;
}

declare class ShimCrypto {
    constructor(stub: Object);

    ENCRYPT_KEY: string;
    SIGN_KEY: string;
    INIT_VECTOR: string;


    encrypt(plaintext: string): Buffer;
    decrypt(ciphertext: string): Buffer;

    sign(message: string): Buffer;
    verify(signature: Buffer, message: string): VerifyResponse;

}

interface VerifyResponse {
    ok: boolean;
    error?: Error;
}