import { useState, useCallback } from 'react';
import { calculateMortgage, formatPrice } from '@/shared/utils';
import { MORTGAGE_CONFIG } from '@/constants';
import { MortgageCalculatorInputs } from '@/types';

export function MortgageCalculator() {
  const [inputs, setInputs] = useState<MortgageCalculatorInputs>({
    price: MORTGAGE_CONFIG.defaultPrice,
    downPercent: MORTGAGE_CONFIG.defaultDownPercent,
    termYears: MORTGAGE_CONFIG.defaultTermYears,
  });

  const result = calculateMortgage(inputs);

  const handlePriceChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, price: parseInt(e.target.value) || 0 }));
  }, []);

  const handleDownPercentChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, downPercent: parseInt(e.target.value) || 0 }));
  }, []);

  const handleTermYearsChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, termYears: parseInt(e.target.value) || 0 }));
  }, []);

  return (
    <section id="ipoteka" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block bg-white/10 px-4 py-2 rounded-full text-sm font-bold uppercase mb-6">
              Ipoteka kalkulyatori
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ipoteka va oylik to'lovlarni oson hisoblang
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Yangi uy xarid qilish orzuingizni amalga oshiring. Oylik to'lovlarni hisoblang va
              o'zingizga mos rejani tanlang.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur p-6 rounded-2xl border border-white/20">
                <div className="text-3xl font-black mb-2">{MORTGAGE_CONFIG.annualRate}%</div>
                <div className="text-sm text-blue-100">Yillik foiz stavkasi</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-2xl border border-white/20">
                <div className="text-3xl font-black mb-2">{MORTGAGE_CONFIG.maxTermYears} yil</div>
                <div className="text-sm text-blue-100">Maksimal muddat</div>
              </div>
            </div>
          </div>

          <div className="bg-white text-gray-900 rounded-3xl p-8 shadow-2xl">
            {/* Price Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="font-bold text-gray-600">Uy narxi</label>
                <span className="text-2xl font-black text-blue-600">
                  {formatPrice(inputs.price)}
                </span>
              </div>
              <input
                type="range"
                min={MORTGAGE_CONFIG.defaultPrice / 10}
                max={2000000000}
                step={10000000}
                value={inputs.price}
                onChange={handlePriceChange}
                className="w-full"
                aria-label="Uy narxi"
              />
            </div>

            {/* Down Payment */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="font-bold text-gray-600">Boshlang'ich to'lov (%)</label>
                <span className="text-2xl font-black text-blue-600">
                  {inputs.downPercent}%
                </span>
              </div>
              <input
                type="range"
                min={MORTGAGE_CONFIG.minDownPercent}
                max={MORTGAGE_CONFIG.maxDownPercent}
                value={inputs.downPercent}
                onChange={handleDownPercentChange}
                className="w-full"
                aria-label="Boshlang'ich to'lov foizi"
              />
            </div>

            {/* Term */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-3">
                <label className="font-bold text-gray-600">Kredit muddati</label>
                <span className="text-2xl font-black text-blue-600">
                  {inputs.termYears} yil
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={MORTGAGE_CONFIG.maxTermYears}
                value={inputs.termYears}
                onChange={handleTermYearsChange}
                className="w-full"
                aria-label="Kredit muddati"
              />
            </div>

            {/* Result */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center border-2 border-blue-200">
              <div className="text-sm font-bold text-gray-600 uppercase mb-2">Oylik to'lov</div>
              <div className="text-4xl font-black text-blue-600">
                {formatPrice(result.monthlyPayment)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

