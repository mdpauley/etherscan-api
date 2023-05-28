const MAIN_API_URL = 'https://api.polyscanscan.com';
const OTHER_API_URL_MAP = {
  mumbai: 'https://api-testnet.etherscan.com',
};

/**
 * gets  the correct urls of the backend 
 * @param {string} chain 
 * @returns Url of backend
 */
function pickChainUrl(chain) {
    if (!chain || !OTHER_API_URL_MAP[chain]) {
      return MAIN_API_URL;
    }
    return OTHER_API_URL_MAP[chain];
}


  module.exports = pickChainUrl;
