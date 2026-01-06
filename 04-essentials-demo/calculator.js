"use strict";
// data :
// initial amount
// annual contribution
// expected return
// duration
Object.defineProperty(exports, "__esModule", { value: true });
function calculateInvestment(data) {
    const { intialAmount, annualContribution, expectedReturn, duration } = data;
    if (intialAmount < 0)
        return "Initial investment amount must be at least zero. ";
    if (duration <= 0)
        return "No valid amount of years provided.";
    if (expectedReturn < 0)
        return "Expected return must be at least zero.";
    let total = intialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;
    const annualResults = [];
    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - intialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;
        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInterestEarned,
            totalContributions,
        });
    }
    return annualResults;
} // results []
function printResult(results) {
    // print (output) the result data
    if (typeof results === "string") {
        // kind of type guards.for union
        console.log(results);
        return;
    }
    for (const yearEndResult of results) {
        console.log(yearEndResult.year);
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contribuations: ${yearEndResult.totalContributions.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndResult.totalContributions.toFixed(0)}`);
        console.log("--------------------------------");
    }
}
const results = calculateInvestment({
    intialAmount: 10000,
    annualContribution: 2,
    expectedReturn: 300,
    duration: 4,
});
printResult(results);
//# sourceMappingURL=calculator.js.map