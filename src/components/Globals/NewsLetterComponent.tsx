"use client";
import JsLoader from "@/modules/JsLoader";
import React, { useEffect } from "react";

export default function NewsLetterComponent() {
  useEffect(() => {
    JsLoader.loadFile(`/assets/js/newsLetter.js`);
  }, []);
  return (
    <div className="py-10">
      <form
        method="POST"
        action="https://strategic31677.activehosted.com/proc.php"
        id="_form_518_"
        className="_form _form_518 _inline-form  _dark m-b-30 w-full max-w-xl mx-auto "
        noValidate
      >
        <input type="hidden" name="u" value="518" />
        <input type="hidden" name="f" value="518" />
        <input type="hidden" name="s" />
        <input type="hidden" name="c" value="0" />
        <input type="hidden" name="m" value="0" />
        <input type="hidden" name="act" value="sub" />
        <input type="hidden" name="v" value="2" />
        <input
          type="hidden"
          name="or"
          value="28792ea5-56b6-4007-8bb8-eba997695912"
        />

        <div className="_form-content">
          <h2 className="mb-5 text-2xl md:text-4xl font-semibold tracking-tight text-white text-center">
            Subscribe to our Newsletter
          </h2>
          <div className="">
            <input
              type="text"
              className="form-control text-white newsletter-field mt-1 block w-full rounded-full newsletter-field border border-white bg-transparent px-4 py-2  placeholder-neutral-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-[#03BF2A] dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
              id="email"
              name="email"
              placeholder="Enter your mail"
              required
            />
          </div>

          <div className="my-3 flex justify-center">
            <div
              className="g-recaptcha"
              data-sitekey="6LcwIw8TAAAAACP1ysM08EhCgzd6q5JAOUR1a0Go"
            ></div>
          </div>

          <div className="flex justify-center">
            <input
              type="submit"
              id="_form_518_submit"
              className="newsletter-submit cursor-pointer items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition  focus:outline-none focus:ring-4 focus:ring-[#03BF2A] disabled:cursor-not-allowed disabled:opacity-60 dark:focus:ring-[#03BF2A]"
              value="Submit"
            />
          </div>
        </div>
        <div
          className="_form-thank-you text-white text-center w-full"
          style={{ display: "none" }}
        >Thank you</div>
      </form>
    </div>
  );
}
