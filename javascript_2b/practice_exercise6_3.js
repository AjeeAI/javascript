function calculateCompoundInterest(principal, rate, years){
    let A = principal * ((1 + rate) ** years);
    return A;
}

console.log(calculateCompoundInterest(100, 2, 5));