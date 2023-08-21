# RefreshMetadata NFT collection on the Polygon blockchain with Thirdweb 

This script automates the process of refreshing metadata for a collection of Non-Fungible Tokens (NFTs) hosted on the Polygon (Matic) network. It can efficiently update NFT metadata, whether stored on IPFS or hosted on regular URLs. Ideal for NFT creators and collectors looking to maintain accurate and up-to-date metadata for their tokens.


How It Works:

  1) - Install Dependencies: Begin by installing the necessary Node.js packages. Open your terminal and navigate to the script's directory, then   
  run the following command to install the required packages:
  
 
    npm install ethers
    npm install axios
    npm install progress-string
    npm install ThirdwebStorage
    
  This commands installs the essential libraries, including ethers, axios, and progress-string, which are used to interact with the Polygon   
    network, 
    fetch metadata, and display progress.

  2-)change your : "ABI file path"  (the one in this project is a example it will not work if its it dont match your metadata structure)
    change also your  ,"contract address" 
    change also your  ,"Owner's address", (and for Thirdweb.com users )add your "secretKey, clientId:".


  2-)Run the Script: After installing the dependencies, execute the script using Node.js:
  
    node refreshMetadata.js
  
  3)-Automatic Metadata Refresh: The script utilizes the Polygon (Matic) RPC URL to interact with the blockchain and fetch the token URIs for a   
     given 
     NFT collection.
  
  4)-URI Analysis: It then checks each token's URI to determine whether it points to IPFS or a regular URL.
  
  5-)Thirdweb Integration: If the URI is an IPFS link, it uses Thirdweb's storage service to access the metadata, ensuring proper authentication 
     using the provided secret key and client ID. 
     (i will do another similar scripts & repository for regular NFT deployers , and not ThirdWeb users,with the normal IPFS gateway)
  
  6-)Direct URL Fetch: If the URI is a regular URL, it directly fetches the metadata.
  
  7-)Progress Tracking: The script provides real-time progress updates, allowing users to monitor the refresh process as it proceeds through the   
     collection.

Key Features:

Automatic Metadata Refresh: The script automates the process of refreshing metadata for a large collection of NFTs, eliminating the need for manual updates on platforms like OpenSea.

Thirdweb Integration: It leverages Thirdweb's storage service to securely access metadata stored on IPFS, ensuring that the script works seamlessly with NFT collections created on the Thirdweb platform.

Who Should Use This Script:

NFT Creators: If you've created an NFT collection, this script can help ensure that your metadata remains accurate and accessible to collectors.
