// Type definitions for fabric-shim-crypto-crypto 1.1.1
// Project: https://github.com/hyperledger/fabric-chaincode-node
// Definitions by: TheLedger <https://github.com/wearetheledger>

/// <reference types="node" />

/* tslint:disable */
declare module 'fabric-shim-crypto' {

    namespace ShimCrypto {
        /*~ Write your module's methods and properties in this class */

        /*~ If you want to expose types from your module as well, you can
        *~ place them in this block.
        */
        export class ShimCryptoClass {
            constructor(stub: Object);

            ENCRYPT_KEY: string;
            SIGN_KEY: string;
            INIT_VECTOR: string;

            encrypt(plaintext: string): Buffer;

            decrypt(ciphertext: string): Buffer;

            sign(message: string): Buffer;

            verify(signature: Buffer, message: string): ShimCrypto.VerifyResponse;

        }

        export interface VerifyResponse {
            ok: boolean;
            error?: Error;
        }
    }

    export = ShimCrypto;
}


