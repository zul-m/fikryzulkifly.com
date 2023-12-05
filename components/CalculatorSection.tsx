"use client";
import { InitialFormState } from "@/types";
import { formatCurrency, toNumber } from "@/utils";
import Link from "next/link";
import { ChangeEvent, FocusEvent, useState } from "react";
import ButtonCalculator from "./ButtonCalculator";
import SlideUp from "./SlideUp";
import TextField from "./TextField";

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
    <section id="loan-calculator" className="mx-auto max-w-4xl py-14 px-4">
      <h1 className="font-playfair font-bold text-center text-4xl sm:text-5xl mb-10 lg:mb-20">
        SEMAK KELAYAKAN
      </h1>
      <SlideUp offset="-300px 0px -300px 0px">
        <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 bg-neutral-100 border shadow-md rounded-md lg:flex-row mx-auto">
          {/* Left Section */}
          <div className="g:w-2/5 rounded-md py-6 px-6">
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
                className="font-inter tracking-wide text-neutral-100 bg-teal-600 hover:bg-teal-700"
                onClick={onCalculate}
              >
                Semak Kelayakan
              </ButtonCalculator>
              {cpmRate && (
                <ButtonCalculator
                  className="font-inter tracking-wide text-neutral-100 bg-neutral-600 hover:bg-neutral-700"
                  onClick={onReset}
                >
                  Kira Semula
                </ButtonCalculator>
              )}
            </div>
            {cpmRate && (
              <div className="mt-5 p-4 rounded-md bg-teal-800 text-center">
                <h2 className="font-inter text-xl lg:text-2xl font-extrabold text-neutral-100">
                  Harga rumah layak dibeli:{" "}
                  <span className="text-yellow-500">
                    {formatCurrency(cpmRate)}
                  </span>
                </h2>
              </div>
            )}
          </div>
          {/* Right Section */}
          <div className="font-inter my-auto lg:w-3/5 px-4 leading-relaxed">
            <p className="mb-4 text-base">
              Semak harga rumah yang layak dibeli dengan mengisi pendapatan
              bersih dan jumlah bayaran hutang bulanan anda.
            </p>
            <p className="mb-4 text-base">
              Bagi memudahkan pengiraan, kami telah menetapkan{" "}
              <span className="text-teal-600 font-semibold">
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
