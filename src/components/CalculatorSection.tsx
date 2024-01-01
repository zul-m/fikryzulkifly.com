"use client";
import ButtonCalculator from "@/src/components/ButtonCalculator";
import SlideUp from "@/src/components/SlideUp";
import TextField from "@/src/components/TextField";
import { InitialFormState } from "@/src/types";
import { formatCurrency, toNumber } from "@/src/utils";
import { ChangeEvent, FocusEvent, useState } from "react";

export default function EasyCalculator() {
  const [form, setForm] = useState(InitialFormState);
  const { netSalary, adImpressions, cpmRate } = form;
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // On focus lost, toNumber will format to value of textfield to validate the numbers.
    setForm({
      ...form,
      [name]: toNumber(value),
    });
  };
  const onCalculate = () => {
    if (!netSalary || !adImpressions) return;
    setForm({
      ...form,
      cpmRate: (netSalary - adImpressions) * 0.6 * 200,
    });
  };
  const onReset = () => {
    setForm(InitialFormState);
  };
  return (
    <section id="loan-calculator" className="max-w-4xl px-4 mx-auto py-14">
      <h1 className="mb-10 text-4xl font-bold text-center font-playfair sm:text-5xl lg:mb-20">
        SEMAK KELAYAKAN
      </h1>
      <SlideUp offset="-300px 0px -300px 0px">
        <div className="flex flex-col mx-auto border rounded-md shadow-md animate-slideUpCubiBezier animation-delay-2 bg-neutral-100 lg:flex-row">
          {/* Left Section */}
          <div className="px-6 py-6 rounded-md g:w-2/5">
            <div className="mb-4">
              <TextField
                name="netSalary"
                placeholder="5000"
                value={netSalary}
                onChange={onChange}
                onBlur={onBlur}
                label="Pendapatan bersih bulanan"
              />
            </div>
            <div className="mb-4">
              <TextField
                name="adImpressions"
                placeholder="1000"
                value={adImpressions}
                onChange={onChange}
                onBlur={onBlur}
                label="Jumlah bayaran hutang bulanan"
              />
            </div>
            <div className="space-y-2">
              <ButtonCalculator
                className="tracking-wide bg-teal-600 font-inter text-neutral-100 hover:bg-teal-700"
                onClick={onCalculate}
              >
                Semak Kelayakan
              </ButtonCalculator>
              {cpmRate && (
                <ButtonCalculator
                  className="tracking-wide font-inter text-neutral-100 bg-neutral-600 hover:bg-neutral-700"
                  onClick={onReset}
                >
                  Kira Semula
                </ButtonCalculator>
              )}
            </div>
            {cpmRate && (
              <div className="p-4 mt-5 text-center bg-teal-800 rounded-md">
                <h2 className="text-xl font-extrabold font-inter lg:text-2xl text-neutral-100">
                  Harga rumah layak dibeli:{" "}
                  <span className="text-yellow-500">
                    {formatCurrency(cpmRate)}
                  </span>
                </h2>
              </div>
            )}
          </div>
          {/* Right Section */}
          <div className="px-4 my-auto leading-relaxed font-inter lg:w-3/5">
            <p className="mb-4 text-base">
              Semak harga rumah yang layak dibeli dengan mengisi pendapatan
              bersih dan jumlah bayaran hutang bulanan anda.
            </p>
            <p className="mb-4 text-base">
              Bagi memudahkan pengiraan, kami telah menetapkan{" "}
              <span className="font-semibold text-teal-600">
                nilai DSR sebanyak 60%
              </span>
              , dan menggunakan formula berikut:
            </p>
            <p className="mb-4 text-base italic font-semibold">
              Formula = (Pendapatan Bersih Bulanan - Jumlah Bayaran Hutang
              Bulanan) x (DSR = 60%) x 200
            </p>
          </div>
        </div>
      </SlideUp>
    </section>
  );
}
