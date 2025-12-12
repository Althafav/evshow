import { useEffect, useCallback, useState } from "react";
import { businessTypes } from "@/constants/NatureOfBusiness";
import JsLoader from "@/modules/JsLoader";

type Country = { label: string; value: string };

export default function RegisterInterestForm({
  pageData,
  CountriesData,
  CountriesCode,
  attendAs,
  mainsource,
  subsource,
}: {
  pageData: any;
  CountriesData: Country[];
  CountriesCode: Country[];
  attendAs: string;
  mainsource: string;
  subsource: string;
}) {
  const [captchaOk, setCaptchaOk] = useState(false);

  useEffect(() => {
    JsLoader.loadFile(`/assets/js/registerInterest.js`);
  }, []);

  useEffect(() => {
    (window as any).onCaptcha = () => setCaptchaOk(true);
    (window as any).onCaptchaExpired = () => setCaptchaOk(false);
  }, []);

  const handleCheck = useCallback(
    (checkboxId: string, yesFieldId: string, noFieldId: string) => {
      const checkbox = document.getElementById(
        checkboxId
      ) as HTMLInputElement | null;
      const yesInput = document.getElementById(
        yesFieldId
      ) as HTMLInputElement | null;
      const noInput = document.getElementById(
        noFieldId
      ) as HTMLInputElement | null;

      if (!checkbox || !yesInput || !noInput) return;

      const checked = !!checkbox.checked;
      yesInput.checked = checked;
      noInput.checked = !checked;
    },
    []
  );

  useEffect(() => {
    if (!attendAs) return;
    const target = attendAs.toLowerCase();
    const ids = [
      "field_228_Speaker",
      "field_228_Sponsor",
      "field_228_Supporting Partner",
      "field_228_Media Partner",
      "field_228_Conference/Workshop Delegate",
    ];

    ids.forEach((id) => {
      const el = document.getElementById(id) as HTMLInputElement | null;
      if (!el) return;
      const val = (el.value || "").toLowerCase();
      el.checked =
        val === target || (target === "delegate" && val.includes("delegate"));
    });
  }, [attendAs]);

  const labelCls = "text-[12px] font-medium text-slate-200/90";
  const inputCls =
    "w-full h-10 rounded-md bg-white px-3 text-[13px] text-slate-900 placeholder:text-slate-400 outline-none ring-0 focus:ring-2 focus:ring-emerald-400/40";
  const selectCls =
    "w-full h-10 rounded-md bg-white px-3 text-[13px] text-slate-900 outline-none ring-0 focus:ring-2 focus:ring-emerald-400/40";

  return (
    <section className="w-full py-8 sm:py-12">
      {/* background like screenshot */}
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-2xl bg-[#061219] p-6 sm:p-8 border border-emerald-400/40 shadow-[0_0_0_1px_rgba(52,211,153,0.15),0_0_30px_rgba(16,185,129,0.12)]">
          <form
            method="POST"
            action="https://strategic31677.activehosted.com/proc.php"
            id="_form_514_"
            noValidate
          >
            {/* Hidden fields remain unchanged */}
            <input type="hidden" name="u" value="514" />
            <input type="hidden" name="f" value="514" />
            <input type="hidden" name="act" value="sub" />
            <input type="hidden" name="v" value="2" />
            <input
              type="hidden"
              name="field[38]"
              value={`AIM 2026 - ${attendAs}  Register Interest`}
            />
            <input type="hidden" name="field[328]" value={mainsource} />
            <input type="hidden" name="field[329]" value={subsource} />
            <input
              type="hidden"
              name="leadType"
              value={attendAs === "Speaker" ? "Conference Leads" : "AIM Lead"}
            />

            {/* grid like screenshot */}
            <div className="grid gap-4 sm:gap-5 md:grid-cols-2 _form-content">
              {/* First Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="firstname" className={labelCls}>
                  First Name <span className="text-emerald-300">*</span>
                </label>
                <input id="firstname" name="firstname" required className={inputCls} />
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="lastname" className={labelCls}>
                  Last Name <span className="text-emerald-300">*</span>
                </label>
                <input id="lastname" name="lastname" required className={inputCls} />
              </div>

              {/* Email (full width in screenshot) */}
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label htmlFor="email" className={labelCls}>
                  Email <span className="text-emerald-300">*</span>
                </label>
                <input id="email" name="email" required className={inputCls} />
              </div>

              {/* Mobile Phone */}
              <div className="flex flex-col gap-1.5">
                <label className={labelCls}>
                  Mobile Phone <span className="text-emerald-300">*</span>
                </label>
                <div className="flex gap-2">
                  <select name="phoneCode" required className={`${selectCls} w-[170px]`}>
                    <option value="">Select Country Code</option>
                    {CountriesCode.map((c, i) => (
                      <option key={i} value={c.value}>
                        {c.label}
                      </option>
                    ))}
                  </select>

                  <input
                    name="field[12]"
                    required
                    placeholder=""
                    className={inputCls}
                  />
                </div>
              </div>

              {/* Organization Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="customer_account" className={labelCls}>
                  Organization Name <span className="text-emerald-300">*</span>
                </label>
                <input
                  id="customer_account"
                  name="customer_account"
                  required
                  className={inputCls}
                />
              </div>

              {/* Country */}
              <div className="flex flex-col gap-1.5">
                <label className={labelCls}>
                  Country <span className="text-emerald-300">*</span>
                </label>
                <select name="field[3]" required className={selectCls}>
                  <option value="">Select Country</option>
                  {CountriesData.map((c, i) => (
                    <option key={i} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Designation (your screenshot says Designation) */}
              <div className="flex flex-col gap-1.5">
                <label className={labelCls}>
                  Designation <span className="text-emerald-300">*</span>
                </label>
                <input name="field[23]" required className={inputCls} />
              </div>

              {/* Nature of Business (full width) */}
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className={labelCls}>
                  Nature Of Business <span className="text-emerald-300">*</span>
                </label>
                <select name="field[4]" required className={selectCls}>
                  <option value="">Select</option>
                  {businessTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* (Optional) If you still need Nationality, keep it but it won't match screenshot layout.
                 If you want, I can place it as a modal/second step to keep the UI identical. */}
              <div className="_form-thank-you" style={{ display: "none" }} />
            </div>

            {/* captcha + centered button like screenshot */}
            <div className="mt-6 flex flex-col items-center gap-4">
              <div
                className="g-recaptcha"
                data-sitekey="6LcwIw8TAAAAACP1ysM08EhCgzd6q5JAOUR1a0Go"
                data-callback="onCaptcha"
                data-expired-callback="onCaptchaExpired"
              />

              <button
                disabled={!captchaOk}
                id="_form_514_submit"
                type="submit"
                className="h-10 px-8 rounded-md bg-white text-slate-900 text-sm font-medium shadow-sm
                           disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-95"
              >
                Register Now
              </button>
            </div>

            {/* Interested to Attend As - left as-is, but it will break the exact screenshot look */}
            {!attendAs && (
              <div className="mt-6 rounded-xl border border-emerald-400/20 bg-white/5 p-4">
                <p className="text-sm font-medium text-slate-200">
                  Interested to attend as <span className="text-emerald-300">*</span>
                </p>

                <div className="mt-3 flex flex-wrap gap-3">
                  {[
                    "Exhibitor",
                    "Sponsor",
                    "Supporting Partner",
                    "Media Partner",
                    "Investment Destination Presenter",
                    "Conference/Workshop Delegate",
                    "Startups",
                  ].map((v) => (
                    <label
                      key={v}
                      className="flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-white/5 px-3 py-2 text-slate-200 hover:border-emerald-400/40 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        name="field[228][]"
                        value={v}
                        className="h-4 w-4 accent-emerald-400"
                      />
                      <span className="text-sm">{v}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
