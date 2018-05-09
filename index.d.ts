// Type definitions for fabric-shim-crypto-crypto 1.1.1
// Project: https://github.com/hyperledger/fabric-chaincode-node
// Definitions by: TheLedger <https://github.com/wearetheledger>

/// <reference types="node" />

/* tslint:disable */

declare module 'fabric-shim-crypto' {

    import { Logger } from 'log4js';
    import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';

    export const ENCRYPT_KEY = 'encrypt-key';
    export const INIT_VECTOR = 'iv';
    export const SIGN_KEY = 'sign-key';
    export const ALGORITHM = 'aes-256-cbc';

    export function encrypt(plaintext: string): Buffer;
    export function decrypt(ciphertext: string): Buffer;

    export function sign(message: string): Buffer;
    export function verify(signature: Buffer, message: string): VerifyResponse;

    interface VerifyResponse {
        ok: boolean;
        error?: Error;
    }

}
