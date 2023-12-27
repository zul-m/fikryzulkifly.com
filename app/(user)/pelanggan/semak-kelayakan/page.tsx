"use client";
import ButtonCalculator from "@/components/ButtonCalculator";
import SlideUp from "@/components/SlideUp";
import TextField from "@/components/TextField";
import { InitialFormState } from "@/types";
import { formatCurrency, toNumber } from "@/utils";
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
    <div className="mx-auto max-w-7xl py-16 sm:py-24 px-4">
      <div className="pt-10">
        <h1 className="font-playfair font-bold text-center text-4xl sm:text-5xl mb-10 lg:mb-20">
          SEMAK KELAYAKAN
        </h1>
      </div>
      <SlideUp offset="-300px 0px -300px 0px">
        <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 lg:flex-row mx-auto gap-8">
          {/* Left Section */}
          <div className="mb-auto border lg:w-2/5 rounded-md py-8 px-8 sm:px-6 shadow-lg">
            <div className="mb-6">
              <TextField
                name="netSalary"
                placeholder="5000"
                value={netSalary}
                onChange={onChange}
                onBlur={onBlur}
                label="Pendapatan bersih bulanan"
                legend="Jumlah wang yang diterima dari pelbagai sumber termasuk gaji daripada pekerjaan, pendapatan bebas, bonus, atau pendapatan lain."
              />
            </div>
            <div className="mb-6">
              <TextField
                name="adImpressions"
                placeholder="1000"
                value={adImpressions}
                onChange={onChange}
                onBlur={onBlur}
                label="Jumlah bayaran hutang bulanan"
                legend="Jumlah wang yang perlu dibayar untuk melunaskan segala hutang atau tanggungan kewangan termasuk bayaran pinjaman perumahan, bayaran pinjaman kereta, kad kredit, atau sebarang hutang lain."
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
              <div className="mt-8 p-4 rounded-md bg-teal-800 text-center">
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
          <div className="font-inter lg:w-3/5 px-4 leading-relaxed">
            <p className="mb-5 text-base">
              Membeli rumah melibatkan pertimbangan kewangan yang penting.
              Pengiraan bayaran bulanan pinjaman perumahan boleh dilakukan
              dengan menggunakan dua kaedah utama:{" "}
              <span className="font-semibold text-teal-600">
                Debt Service Ratio (DSR)
              </span>{" "}
              dan{" "}
              <span className="font-semibold text-teal-600">Rule of 200</span>.
            </p>
            <p className="mb-5 text-base">
              Jika bayaran bulanan perumahan melepasi had yang disyorkan oleh{" "}
              <span className="font-semibold text-teal-600">Rule of 200</span>,
              jumlah pinjaman perlu dipertimbangkan semula atau cari
              penyelesaian alternatif. Sebelum membuat keputusan, disarankan
              untuk mendapatkan nasihat daripada pakar kewangan atau penasihat
              perumahan untuk pemahaman yang lebih baik.
            </p>
            <p className="text-base mb-5 italic font-semibold">
              Formula = ( Pendapatan Bersih Bulanan - Jumlah Bayaran Hutang
              Bulanan) x (DSR = 60%) x 200
            </p>
            <article className="mb-10">
              <h4 className="text-teal-600 mb-2 text-2xl font-medium">
                Debt Service Ratio (DSR)
              </h4>
              <p className="text-base mb-5">
                DSR digunakan untuk mengukur tahap kemampuan membuat bayaran
                bulanan berdasarkan pendapatan. Bagi memudahkan pengiraan, kami
                menetapkan nilai DSR sebanyak 60%.
              </p>
              <p className="text-base mb-5 italic font-semibold">
                DSR = ( Pendapatan Bersih Bulanan / Jumlah Bayaran Bulanan
                Hutang ) x 100
              </p>
            </article>
            <article className="mb-10">
              <h4 className="text-teal-600 mb-2 text-2xl font-medium">
                Rule of 200
              </h4>
              <p className="text-base mb-5">
                "Rule of 200" digunakan untuk menetapkan jumlah bayaran bulanan
                hutang agar tidak melebihi 30% daripada pendapatan bulanan, dan
                bayaran bulanan perumahan tidak melebihi 20% daripada pendapatan
                bulanan.
              </p>
              <p className="text-base mb-5 italic font-semibold">
                (Jumlah Bayaran Bulanan Hutang) ≤ 30% x (Pendapatan Bersih
                Bulanan)
              </p>
              <p className="text-base italic font-semibold">
                (Jumlah Bayaran Bulanan Perumahan) ≤ 20% x (Pendapatan Bersih
                Bulanan)
              </p>
            </article>
          </div>
        </div>
      </SlideUp>
    </div>
  );
}
