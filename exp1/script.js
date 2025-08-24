let balance = 1000;

function updateBalance(){
    const balanceElement = document.getElementById('balance-display');
    balanceElement.textContent = `Current Balance: $${balance}`;
}



function deposit() {
  const amount = Number(document.getElementById('amount').value);
  if (amount > 0) {
    balance += amount;
   updateBalance();
  }
}
 updateBalance();

function withdraw() {
  const amount = Number(document.getElementById('amount').value);
  if (amount > 0 && amount <= balance) {
    balance -= amount;
     updateBalance();
  } else {
    document.getElementById('message').textContent = 'Invalid withdrawal amount!';
  }
}