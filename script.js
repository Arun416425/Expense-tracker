let all_transaction = JSON.parse(localStorage.getItem("transactions")) || [];

const transaction_form = document.getElementById("transactionForm");
const transaction_list = document.getElementById("transactionList");

const total_balance = document.getElementById("totalBalance");
const total_income = document.getElementById("totalIncome");
const total_expense = document.getElementById("totalExpense");

function updateList(type, amount, date, category) {
  const itemEl = document.createElement("li");
  const iconEl = document.createElement("div");
  const detailsEl = document.createElement("div");
  const nameEl = document.createElement("div");
  const dateEl = document.createElement("div");
  const amountEl = document.createElement("div");
  const deleteEl = document.createElement("button");

  itemEl.classList.add("transaction-item");
  iconEl.classList.add("transaction-icon");
  detailsEl.classList.add("transaction-details");
  nameEl.classList.add("transaction-name");
  dateEl.classList.add("transaction-date");
  amountEl.classList.add("transaction-amount");
  deleteEl.classList.add("transaction-delete");

  iconEl.innerText = type === "Income" ? "↑" : "↓";
  iconEl.classList.add(type === "Income" ? "income" : "expense");

  nameEl.innerText = category;
  dateEl.innerText = new Date(date).toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });

  amountEl.innerText = (type === "Income" ? "+" : "-") + "$" + amount;
  amountEl.classList.add(type === "Income" ? "income" : "expense");

  deleteEl.innerText = "x";
  deleteEl.addEventListener("click", deleteTransaction);

  detailsEl.appendChild(nameEl);
  detailsEl.appendChild(dateEl);
  itemEl.appendChild(iconEl);
  itemEl.appendChild(detailsEl);
  itemEl.appendChild(amountEl);
  itemEl.appendChild(deleteEl);

  transaction_list.prepend(itemEl);
}

function deleteTransaction(e) {
  const btn = e.currentTarget;
  const itemEl = btn.closest(".transaction-item");
  const index = Array.from(transaction_list.children).indexOf(itemEl);

  if (index > -1) {
    all_transaction.splice(index, 1);
    localStorage.setItem("transactions", JSON.stringify(all_transaction));
    itemEl.remove();
    updateBalance();
  }
}

function updateBalance() {
  let income = 0;
  let expense = 0;
  let balance = 0;

  all_transaction.forEach((transaction) => {
    const amount = parseFloat(transaction.amount) || 0;
    if (transaction.type === "Income") {
      income += amount;
      balance += amount;
    } else if (transaction.type === "Expense") {
      expense += amount;
      balance -= amount;
    }
  });

  total_balance.innerText = "$" + balance.toFixed(2);
  total_income.innerText = "$" + income.toFixed(2);
  total_expense.innerText = "$" + expense.toFixed(2);
}

transaction_form.addEventListener("submit", (e) => {
  e.preventDefault();

  const type = e.target.type.value.trim();
  const amount = e.target.amount.value.trim();
  const date = e.target.date.value.trim();
  const category = e.target.category.value.trim();

  // ✅ Prevent adding empty or invalid transactions
  if (!type || !amount || !date || !category || isNaN(amount)) {
    alert("Please fill all fields correctly before adding a transaction.");
    return;
  }

  const newTransaction = { type, amount, date, category };
  all_transaction.unshift(newTransaction);
  localStorage.setItem("transactions", JSON.stringify(all_transaction));

  updateList(type, amount, date, category);
  updateBalance();
  transaction_form.reset();
});

// ✅ Only render if valid transactions exist
if (Array.isArray(all_transaction) && all_transaction.length > 0) {
  all_transaction.forEach(({ type, amount, date, category }) => {
    if (type && amount && date && category) {
      updateList(type, amount, date, category);
    }
  });
  updateBalance();
}
