/*
  Get the token information based on the id.
*/

// EDIT THIS WITH THE TOKEN ID YOU WANT TO LOOK UP
const TOKENID =
  "5ac5d80be15ff0aaaf04735b43df1f8c2629d1b5d563a78e5b739d73bd1e51ca" //Kheyzeyzey's K800cc token

// Set NETWORK to either testnet or mainnet
const NETWORK = `mainnet`

const SLPSDK = require("../../lib/SLP")

// Instantiate SLP based on the network.
let SLP
if (NETWORK === `mainnet`)
  SLP = new SLPSDK({ restURL: `https://rest.zslp.org/v2/` })
else SLP = new SLPSDK({ restURL: `https://trest.zslp.org/v2/` })

async function lookupToken() {
  try {
    const properties = await SLP.Utils.list(TOKENID)
    console.log(properties)
  } catch (err) {
    console.error(`Error in getTokenInfo: `, err)
    throw err
  }
}
lookupToken()
