
const sbiBank ={
    bankName: "SBI Bank",
    location: "Kolhapur",
    accountNo: "099990",
    ifsc: "sbi01",
    interestRate: "6%",
    showDetails: function() {
        console.log(`Bank Name: '${this.bankName}', Location: '${this.location}', Account Number: '${this.accountNo}', IFSC: '${this.ifsc}', Interest Rate: '${this.interestRate}'`);
    }
}
sbiBank.showDetails();

const axisBank ={
    bankName: "Axis Bank",
    location: "Mumbai",
    accountNo: "088880",
    ifsc: "axis02",
    interestRate: "6.2%",
    showDetails: function() {
        console.log(`Bank Name: '${this.bankName}', Location: '${this.location}', Account Number: '${this.accountNo}', IFSC: '${this.ifsc}', Interest Rate: '${this.interestRate}'`);
    }
}
axisBank.showDetails();

const hdfcBank ={
    bankName: "HDFC Bank",
    location: "Pune",
    accountNo: "077770",
    ifsc: "hdfc03",
    interestRate: "6.4%",
    showDetails: function() {
        console.log(`Bank Name: '${this.bankName}', Location: '${this.location}', Account Number: '${this.accountNo}', IFSC: '${this.ifsc}', Interest Rate: '${this.interestRate}'`);
    }
}
hdfcBank.showDetails();

const yesBank ={
    bankName: "Yes Bank",
    location: "Satara",
    accountNo: "066660",
    ifsc: "yes04",
    interestRate: "6.6%",
    showDetails: function() {
        console.log(`Bank Name: '${this.bankName}', Location: '${this.location}', Account Number: '${this.accountNo}', IFSC: '${this.ifsc}', Interest Rate: '${this.interestRate}'`);
    }
}
yesBank.showDetails();
