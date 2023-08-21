const { ethers } = require("ethers");
const progress = require("progress-string");
const { ThirdwebStorage } = require("@thirdweb-dev/storage");

// Polygon (Matic) RPC URL
const rpcUrl = "https://polygon-rpc.com";

// Replace with your contract ABI
const contractABI = require("./YourContractABI.json"); // Replace with your ABI file path

// Replace with your contract address
const contractAddress = "0x000000000000000000000000000000000000";

// Owner's address
const ownerAddress = "0x0000029c000008967868689689769669769";

// Instantiate the Thirdweb IPFS storage
const storage = new ThirdwebStorage({
  secretKey: "replace_with_YOUR_secret_Key_HERE", // Replace with your secret key
  clientId: "replace_with_YOUR_clientID_HERE", // Replace with your client ID
});

async function refreshMetadata(tokenId) {
  try {
    const provider = new ethers.JsonRpcProvider(rpcUrl);
    const contract = new ethers.Contract(contractAddress, contractABI, provider);
    const tokenURI = await contract.tokenURI(tokenId);

    console.log(`Token ID ${tokenId} URI: ${tokenURI}`);

    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Refreshing metadata for Token ID ${tokenId}`);

    // Fetch content from IPFS using Thirdweb's storage service
    const metadata = await storage.downloadJSON(tokenURI);

    // You can process the metadata here, update it, or save it as needed

    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Metadata refreshed for Token ID ${tokenId}\n`);
  } catch (error) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Error refreshing metadata for Token ID ${tokenId}: ${error.message}\n`);
  }
}

// Refresh metadata for all NFTs (assuming there are 10,000 NFTs , change this number for your number of NFTs in your collection)
async function refreshAllMetadata() {
  const progressBar = progress({ length: 50, total: 10000 });

  for (let tokenId = 1; tokenId <= 10000; tokenId++) {
    await refreshMetadata(tokenId);

    // Update the progress bar
    const progressPercentage = (tokenId / 10000) * 100;
    process.stdout.cursorTo(0);
    process.stdout.write(`Progress: ${progressBar(progressPercentage)} ${progressPercentage.toFixed(2)}%`);
  }

  process.stdout.write("\n");
}

// Refresh metadata for all NFTs
refreshAllMetadata()
  .then(() => {
    console.log("Metadata refresh completed.");
  })
  .catch((error) => {
    console.error(`Metadata refresh failed: ${error.message}`);
  });
