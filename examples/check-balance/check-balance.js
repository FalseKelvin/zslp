// Set NETWORK to either testnet or mainnet
const NETWORK = `mainnet`

// Instantiate bitbox.
const bitboxLib = "../../../../lib/BITBOX"
const BITBOX = require(bitboxLib).BITBOX

// Instantiate Bitbox based on the network.
let bitbox
if (NETWORK === `mainnet`)
  bitbox = new BITBOX({ restURL: `https://rest.zslp.org/v2/` })
else bitbox = new BITBOX({ restURL: `https://trest.zslp.org/v2/` })

// Get the balance of the wallet.
async function getBalance() {
  try {
    // first get BCH balance
    const balance = await bitbox.Address.details('ENTER YOUR ZCL ADDRESS HERE')

    console.log(`ZSLP Balance information:`)
    console.log(balance)
  } catch (err) {
    console.error(`Error in getBalance: `, err)
    throw err
  }
}
getBalance()
