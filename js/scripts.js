//Backend Logic
function AllAccounts() {
  this.accounts = []
}

AllAccounts.prototype.addAccount = function(account) {
  this.accounts.push(account);
}

AllAccounts.prototype.getBankAccount = function() {
  alert(this.accounts.bankAccount)
}

function BankAccount(name, currentBalance) {
  this.name = name;
  this.currentBalance = currentBalance;
}


BankAccount.prototype.deposit = function(deposit) {
  this.currentBalance += deposit;
  return this.currentBalance;
}

BankAccount.prototype.withdrawl = function(withdrawl) {
  this.currentBalance -= withdrawl;
}

//User Interface Logic
var allAccounts = new AllAccounts();



$(document).ready(function(){
  $("form#create-account").submit(function(event){
    event.preventDefault();
    var inputtedName = $("#name").val();
    var initialAmount = parseFloat($("#initial-deposit").val()).toFixed(2);
    var bankAccount = new BankAccount(inputtedName, initialAmount);
    allAccounts.addAccount(bankAccount);
    $("#account-info").append(bankAccount.name + "<br>" + bankAccount.currentBalance);
  });
  $("form#deposit-withdrawl").submit(function(event){
    event.preventDefault();
    var inputtedDeposit = parseFloat($("#deposit").val()).toFixed(2);
    var inputtedWithdrawl = parseFloat($("#withdrawl").val()).toFixed(2);
    allAccounts.getBankAccount();
  });
});
