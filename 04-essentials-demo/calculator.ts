// data :
// initial amount
// annual contribution
// expected return
// duration

// we can chose individual function parameters as well but we would be ending up with lot of function params
// missing use of type alias ,
// better for more readbility.
type InvestmentData = {
  intialAmount: number;
  annualContribution: number;
  expectedReturn: number;
  duration: number;
};

type investmentResult = {
  year: string;
  totalAmount: number;
  totalContributions: number;
  totalInterestEarned: number;
};

type calcutorResults = investmentResult[] | string;

function calculateInvestment(data: InvestmentData): calcutorResults {
  const { intialAmount, annualContribution, expectedReturn, duration } = data;
  if (intialAmount < 0)
    return "Initial investment amount must be at least zero. ";

  if (duration <= 0) return "No valid amount of years provided.";

  if (expectedReturn < 0) return "Expected return must be at least zero.";

  let total = intialAmount;
  let totalContributions = 0;
  let totalInterestEarned = 0;

  const annualResults: investmentResult[] = [];

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

function printResult(results: calcutorResults) {
  // print (output) the result data
  if (typeof results === "string") {
    // kind of type guards for union types
    console.log(results);
    return;
  }

  for (const yearEndResult of results) {
    console.log(yearEndResult.year);
    console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
    console.log(
      `Total Contribuations: ${yearEndResult.totalContributions.toFixed(0)}`
    );
    console.log(
      `Total Interest Earned: ${yearEndResult.totalContributions.toFixed(0)}`
    );
    console.log("--------------------------------");
  }
}

const investmentData:InvestmentData = {
  intialAmount: 10000,
  annualContribution: 2,
  expectedReturn: 300,
  duration: 4,
}

const results = calculateInvestment(investmentData);
printResult(results);
