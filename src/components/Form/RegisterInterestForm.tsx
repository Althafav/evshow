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

  const labelCls = "text-[12px] font-medium text-slate-200/90";
  const inputCls =
    "w-full h-10 rounded-md bg-white px-3 text-[13px] text-slate-900 placeholder:text-slate-400 outline-none ring-0 focus:ring-2 focus:ring-emerald-400/40";
  const selectCls =
    "w-full h-10 rounded-md bg-white px-3 text-[13px] text-slate-900 outline-none ring-0 focus:ring-2 focus:ring-emerald-400/40";

  return (
    <section className="w-full ">
      {/* background like screenshot */}
      <div className="">
        <div className="rounded-2xl bg-[#061219] p-6 sm:p-8 ev-gradient-stroke shadow-[0_0_0_1px_rgba(52,211,153,0.15),0_0_30px_rgba(16,185,129,0.12)]">
          <form
            method="POST"
            action="https://strategic31677.activehosted.com/proc.php"
            id="_form_520_"
            className="_form _form_520 _inline-form  _dark"
            noValidate
            data-styles-version="5"
          >
            {/* Hidden fields remain unchanged */}
            <input type="hidden" name="u" value="520" />
            <input type="hidden" name="f" value="520" />
            <input type="hidden" name="s" />
            <input type="hidden" name="c" value="0" />
            <input type="hidden" name="m" value="0" />
            <input type="hidden" name="act" value="sub" />
            <input type="hidden" name="v" value="2" />
            <input
              type="hidden"
              name="or"
              value="796fc07e-6f47-4417-ad9d-0c66d2f950bc"
            />

            <input
              type="hidden"
              name="field[38]"
              value={`EV World 2026 - ${attendAs}  Register Interest`}
            />
            <input type="hidden" name="field[328]" value={mainsource} />
            <input type="hidden" name="field[329]" value={subsource} />
            <input type="hidden" name="leadType" value={"EV Show Lead"} />

            <div className="_form-content">
              {/* grid like screenshot */}
              <div className="grid gap-4 sm:gap-5 md:grid-cols-2 _form-content">
                {/* First Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="firstname" className={labelCls}>
                    First Name <span className="text-emerald-300">*</span>
                  </label>
                  <input
                    id="firstname"
                    name="firstname"
                    required
                    className={inputCls}
                  />
                </div>

                {/* Last Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="lastname" className={labelCls}>
                    Last Name <span className="text-emerald-300">*</span>
                  </label>
                  <input
                    id="lastname"
                    name="lastname"
                    required
                    className={inputCls}
                  />
                </div>

                {/* Email (full width in screenshot) */}
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label htmlFor="email" className={labelCls}>
                    Email <span className="text-emerald-300">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    required
                    className={inputCls}
                  />
                </div>

                {/* Mobile Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className={labelCls}>
                    Mobile Phone <span className="text-emerald-300">*</span>
                  </label>
                  <div className="flex gap-2">
                    {/* <select
                      name="phoneCode"
                      required
                      className={`${selectCls} w-42.5`}
                    >
                      <option value="">Select Country Code</option>
                      {CountriesCode.map((c, i) => (
                        <option key={i} value={c.value}>
                          {c.label}
                        </option>
                      ))}
                    </select> */}

                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      required
                      placeholder=""
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Organization Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="customer_account" className={labelCls}>
                    Organization Name{" "}
                    <span className="text-emerald-300">*</span>
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
                    Nature Of Business{" "}
                    <span className="text-emerald-300">*</span>
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
              </div>

              <div className="mt-6 flex flex-col items-center gap-4">
                <div
                  className="g-recaptcha"
                  data-sitekey="6LcwIw8TAAAAACP1ysM08EhCgzd6q5JAOUR1a0Go"
                  data-callback="onCaptcha"
                  data-expired-callback="onCaptchaExpired"
                />

                <button
                  disabled={!captchaOk}
                  id="_form_520_submit"
                  type="submit"
                  className="h-10 px-8 rounded-md bg-white text-slate-900 text-sm font-medium shadow-sm
                           disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-95"
                >
                  Register Now
                </button>

                <div
                  className="_form-thank-you"
                  style={{ display: "none" }}
                ></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
