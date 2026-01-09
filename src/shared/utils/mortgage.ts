import { MortgageCalculatorInputs, MortgageCalculatorResult } from '@/types';
import { MORTGAGE_CONFIG } from '@/constants';

export function calculateMortgage(
  inputs: MortgageCalculatorInputs
): MortgageCalculatorResult {
  const { price, downPercent, termYears } = inputs;
  const annualRate = MORTGAGE_CONFIG.annualRate;

  const downPayment = price * (downPercent / 100);
  const loanAmount = price - downPayment;
  const monthlyRate = annualRate / 100 / 12;
  const numberOfPayments = termYears * 12;

  let monthlyPayment = 0;
  if (loanAmount > 0 && numberOfPayments > 0) {
    monthlyPayment =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  }

  return {
    monthlyPayment: Math.round(monthlyPayment),
    loanAmount: Math.round(loanAmount),
    downPayment: Math.round(downPayment),
  };
}

export function formatPrice(price: number, currency: 'uzs' | 'usd' = 'uzs'): string {
  if (currency === 'usd') {
    return `$${price.toLocaleString('uz-UZ')}`;
  }
  return `${price.toLocaleString('uz-UZ')} so'm`;
}

