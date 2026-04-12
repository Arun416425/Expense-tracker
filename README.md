<h1>💰 Expense Tracker (Dark Mode)</h1>
<p>A sleek, responsive web application built with Vanilla JavaScript to help users track their finances. Whether you're adding your monthly paycheck or that overpriced coffee, this tracker keeps your balance updated in real-time.</p>

## ✨ Features
<li>Dual Transaction Types: Easily categorize entries as Income (+) or Expense (-).</li>

<li>Live Balance Updates: Automatically calculates your total balance and summarizes total income vs. total expenses.</li>

<li>Dark Theme UI: A modern, high-contrast dark interface designed for readability and eye comfort.</li>

<li>Fully Responsive: Optimized for desktops, tablets, and smartphones.</li>

<li>Data Persistence: Uses localStorage to keep your data safe even after a page refresh.</li>

## 🛠️ Tech Stack
<li>HTML5: Semantic structure.</li>

<li>CSS3: Custom styling with Flexbox/Grid and CSS Variables for the dark theme.</li>

<li>JavaScript (ES6): DOM manipulation, state management, and local storage logic.</li>

## 📸 Preview
<li>Desktop View: Features a centered dashboard with a scrollable transaction history.</li>
<li>Mobile View: Elements stack vertically for a seamless "App-like" experience.</li>

## 🚀 How to Use
<p>Clone the Repository:</p>

<p>Bash</p>
<pre>git clone https://github.com/your-username/expense-tracker.git</pre>
<p>Open the Project:</p>
<li>Simply open index.html in your favorite browser.</li>

<p>Manage Your Money:</p>

<li>Enter the name of the transaction.</li>

<li>Select Income to add to your balance.</li>

<li>Select Expense to subtract from your balance.</li>

<li>Delete transactions by clicking the "X" button next to any history item.</li>

## 🧠 Logic Breakdown
The core of the application relies on a simple mathematical principle:$$Total\ Balance = \sum Income - \sum Expenses$$Whenever a new transaction is added, the JavaScript array is updated, and the entire UI re-renders to ensure the Income (Green) and Expense (Red) displays remain accurate.📜 LicenseThis project is open-source and available under the MIT License. Feel free to fork it and add your own features (like charts or categories)!🙌 ContributingIf you have ideas for features like Pie Charts or Monthly Reports, feel free to open a Pull Request!
