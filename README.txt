
README for Decentralized Voting System

Project Overview
This is a Decentralized Voting System implemented using Ethereum blockchain technology. It allows users to:
1. Register as a voter.
2. Register as a candidate.
3. Cast votes for registered candidates.
4. View the election results.
5. View registered candidates and their vote counts.

The application leverages Web3.js for blockchain interactions, with a smart contract deployed on the Ethereum network.

---

Files Included
1. index.html  
   - Provides the user interface.
   - Includes input fields and buttons for all key operations (voter registration, candidate registration, voting, viewing results).
   - Links to style.css for styling and app.js for functionality.

2. style.css  
   - Defines the styles for the HTML elements.
   - Includes responsive design, animations, and styling for input fields, buttons, and messages.

3. app.js  
   - Contains the JavaScript logic to interact with the Ethereum blockchain.
   - Implements functions to:
     - Connect to MetaMask.
     - Interact with the smart contract for various operations like registering voters, candidates, and casting votes.
     - Fetch and display election data.

---

How to Use
Prerequisites
- MetaMask or another Ethereum wallet browser extension installed.
- Ether balance in the connected wallet for transaction costs.

Steps to Run the Application
1. Clone or download this project to your local machine.
2. Open index.html in a modern browser (e.g., Chrome, Brave).
3. Connect MetaMask to your browser.
4. Follow the below operations:
   - Register Voter: Enter Age, Aadhar Number, and Voter ID, then click Register Voter.
   - Register Candidate: Enter Candidate Name, Age, and Candidate ID, then click Register Candidate.
   - Vote: Enter the Candidate Name and click Vote.
   - Get Election Result: Click Get Election Result to view the winning candidate.
   - View Candidates: Click View Candidates to display all registered candidates.
   - View Vote Counts: Click View Vote Counts to display the vote tally for each candidate.

---

Key Features
- Smart Contract Interactions: Utilizes a deployed smart contract to handle all voting-related operations securely.
- Real-time Feedback: Success and error messages displayed dynamically on the interface.
- Responsive Design: User interface adapts to various screen sizes.

---

Smart Contract Functions
The smart contract includes the following key methods:
- registerVoter: Register a voter with their age, Aadhar number, and voter ID.
- registerAsCandidate: Register a candidate with their name, age, and candidate ID.
- vote: Cast a vote for a specified candidate.
- getElectionResult: Fetch the election winner and their vote count.
- getCandidates: Retrieve a list of all candidates.
- getVotes: Retrieve the vote counts for all candidates.

---

Technologies Used
- HTML5 for the user interface.
- CSS3 for styling and animations.
- JavaScript and Web3.js for blockchain interactions.
- Ethereum for decentralized voting.

---

Future Enhancements
- Add authentication using cryptographic signatures.
- Improve UI/UX for better user experience.
- Add real-time blockchain event listening for live updates.

---

Feel free to contribute or report issues.
