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
    <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24">
      <div className="pt-10">
        <h1 className="mb-10 text-4xl font-bold text-center font-playfair sm:text-5xl lg:mb-20">
          SEMAK KELAYAKAN
        </h1>
      </div>
      <SlideUp offset="-300px 0px -300px 0px">
        <div className="flex flex-col gap-8 mx-auto animate-slideUpCubiBezier animation-delay-2 lg:flex-row">
          {/* Left Section */}
          <div className="px-8 py-8 mb-auto border rounded-md shadow-lg lg:w-2/5 sm:px-6">
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
              <div className="p-4 mt-8 text-center bg-teal-800 rounded-md">
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
          <div className="px-4 leading-relaxed font-inter lg:w-3/5">
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
            <p className="mb-5 text-base italic font-semibold">
              Formula = ( Pendapatan Bersih Bulanan - Jumlah Bayaran Hutang
              Bulanan) x (DSR = 60%) x 200
            </p>
            <article className="mb-10">
              <h4 className="mb-2 text-2xl font-medium text-teal-600">
                Debt Service Ratio (DSR)
              </h4>
              <p className="mb-5 text-base">
                DSR digunakan untuk mengukur tahap kemampuan membuat bayaran
                bulanan berdasarkan pendapatan. Bagi memudahkan pengiraan, kami
                menetapkan nilai DSR sebanyak 60%.
              </p>
              <p className="mb-5 text-base italic font-semibold">
                DSR = ( Pendapatan Bersih Bulanan / Jumlah Bayaran Bulanan
                Hutang ) x 100
              </p>
            </article>
            <article className="mb-10">
              <h4 className="mb-2 text-2xl font-medium text-teal-600">
                Rule of 200
              </h4>
              <p className="mb-5 text-base">
                "Rule of 200" digunakan untuk menetapkan jumlah bayaran bulanan
                hutang agar tidak melebihi 30% daripada pendapatan bulanan, dan
                bayaran bulanan perumahan tidak melebihi 20% daripada pendapatan
                bulanan.
              </p>
              <p className="mb-5 text-base italic font-semibold">
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
