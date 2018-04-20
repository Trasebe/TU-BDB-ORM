/**
 * @file bdbService.js
 * @author:
 *   Maurice Dalderup <Maurice_Dalderup@hotmail.com>
 * @date 2018
 */

import bip39 from "bip39";

import Orm from "bigchaindb-orm";
import * as ErrorMessages from "../utils/ErrorMessages";


export default class BdbService {
  /**
   * Generates a keypair
   * @param {string} seed
   * @returns {_Ed25519Keypair3.default}
   */
  createKeypair = seed => {};
  /**
   * Constructor - initializing the service with or without a BigchainDB Connection
   * @param bdbUri
   * @param bdbId
   * @param bdbKey
   */
  constructor(bdbUri = null, bdbId = null, bdbKey = null) {
    // bdbId && bdbKey may be null
    if (bdbUri) {
      this.orm = null // Create connection here
    } else {
      // Warn the user that no connection is established and actions cannot be executed without it
      console.warn(ErrorMessages.NoConnectionPassed); // eslint-disable-line
    }
  }

  /**
   * Generate a random identity (public and private key) based on a seed (Passphrase)
   * @param {string} seed
   * @returns {*}
   */
  generateKeypair = seed => this.createKeypair(seed);


  /**
   * Executing a create transaction
   * @param {String} modelName
   * @param {Object} asset
   * @param {Object} metaData
   * @param {Ed25519Keypair} fromKeypair
   * @returns {Promise<void>}
   */
  createTransaction = async (modelName, asset, metaData, fromKeypair) => {

  };


  /**
   * Executing a transfer transaction
   * @param {Object} asset
   * @param {string} reason
   * @param {Ed25519Keypair} from
   * @param {Ed25519Keypair} to
   * @returns {Promise<void>}
   */
  transferTransaction = async (asset, reason, from, to) => {

  };

  /**
   * Executing a burn/transfer transaction
   * @param {Object} asset
   * @param {Ed25519Keypair} from
   * @returns {Promise<void>}
   */
  burnTransaction = async (asset, from) => {

  };
}
