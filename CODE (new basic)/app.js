
// Initialize Web3 and contract
let web3;
let contract;
const contractAddress = "0xf5cC3FEb04423B07982E9594AaeeC2DcFdFD2bf9"; // contract's address
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_candidateID",
				"type": "uint256"
			}
		],
		"name": "registerAsCandidate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_aadharNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_voterID",
				"type": "string"
			}
		],
		"name": "registerVoter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "candidateCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidates",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "candidateID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "voteCount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "candidateAddress",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCandidates",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "age",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "candidateID",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "voteCount",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "candidateAddress",
						"type": "address"
					}
				],
				"internalType": "struct DecentralizedVoting.Candidate[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getElectionResult",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getVotes",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "isCandidate",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "voters",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "aadharNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "voterID",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isRegistered",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "hasVoted",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// Function to initialize Web3 and check MetaMask connection
async function init() {
    if (typeof window.ethereum !== 'undefined') {
        // Modern DApp browsers (MetaMask, Brave, etc.)
        try {
            web3 = new Web3(window.ethereum);
            await window.ethereum.request({ method: 'eth_requestAccounts' }); // Request account access

            // Initialize the contract
            contract = new web3.eth.Contract(contractABI, contractAddress);

            showMessage("MetaMask connected successfully!", "green");
        } catch (error) {
            showMessage("MetaMask connection failed: " + error.message, "red");
        }
    } else {
        showMessage("Please install MetaMask or another Ethereum wallet extension.", "red");
    }
}

// Register voter function
async function registerVoter() {
    const age = document.getElementById("voterAge").value;
    const aadhar = document.getElementById("voterAadhar").value;
    const voterID = document.getElementById("voterID").value;
    const accounts = await web3.eth.getAccounts();

    try {
        const tx = await contract.methods.registerVoter(age, aadhar, voterID).send({ from: accounts[0] });
        showMessage("Voter registered successfully!", "green");
    } catch (err) {
        showMessage("Error registering voter: " + err.message, "red");
    }
}

// Register candidate function
async function registerCandidate() {
    const name = document.getElementById("candidateName").value;
    const age = document.getElementById("candidateAge").value;
    const candidateID = document.getElementById("candidateID").value;
    const accounts = await web3.eth.getAccounts();

    try {
        const tx = await contract.methods.registerAsCandidate(name, age, candidateID).send({ from: accounts[0] });
        showMessage("Candidate registered successfully!", "green");
    } catch (err) {
        showMessage("Error registering candidate: " + err.message, "red");
    }
}

// Vote for a candidate
async function vote() {
    const candidateName = document.getElementById("candidateToVote").value;
    const accounts = await web3.eth.getAccounts();

    try {
        const tx = await contract.methods.vote(candidateName).send({ from: accounts[0] });
        showMessage("Vote casted successfully for " + candidateName, "green");
    } catch (err) {
        showMessage("Error voting: " + err.message, "red");
    }
}

// Get election result (who is the winner)
async function getElectionResult() {
    try {
        const result = await contract.methods.getElectionResult().call();
        const winnerName = result[0];
        const voteCount = result[1];
        showMessage(`Election Result: ${winnerName} with ${voteCount} votes`, "green");
    } catch (err) {
        showMessage("Error getting election result: " + err.message, "red");
    }
}

// Get all candidates
async function getCandidates() {
    try {
        const candidates = await contract.methods.getCandidates().call();
        let candidatesList = "Candidates:\n";
        candidates.forEach(candidate => {
            candidatesList += `${candidate.name} (ID: ${candidate.candidateID})\n`;
        });
        showMessage(candidatesList, "green");
    } catch (err) {
        showMessage("Error getting candidates: " + err.message, "red");
    }
}

// Get votes of all candidates// Get votes of all candidates
async function getVotes() {
    try {
        const result = await contract.methods.getVotes().call();
        
        // Log the returned result to check its structure
        console.log("Contract returned data: ", result);

        const names = result[0];  // Candidate names
        const votes = result[1];  // Vote counts

        let voteCountList = "Vote Counts:\n";
        
        // Iterate over the names and corresponding vote counts
        names.forEach((name, index) => {
            voteCountList += `${name}: ${votes[index]} votes\n`;
        });

        showMessage(voteCountList, "green");

    } catch (err) {
        showMessage("Error getting vote counts: " + err.message, "red");
    }
}



// Show custom message below function
function showMessage(message, color) {
    const messageBox = document.createElement("div");
    messageBox.classList.add("message-box");
    messageBox.style.backgroundColor = color;
    messageBox.textContent = message;
    document.getElementById("message-container").appendChild(messageBox);
    setTimeout(() => {
        messageBox.remove();
    }, 5000);
}

// Initialize when window loads
window.onload = () => {
    init(); // Initialize MetaMask and contract
};
