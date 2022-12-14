import React from "react";
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-5 py-5 rounded-[20px] max-w-[390px] md:mr-10 sm:mr-5 mr-0  feedback-card">
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[42px] h-[27px] object-contain"
    />
    <p className="font-inter font-normal text-[16px] leading-[32px] text-slate-900 my-10">
      {content}
    </p>
    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-inter font-semibold text-[18px] leading-[32px] text-slate-900">
          {name}
        </h4>
        <p className="font-inter font-normal text-[16px] leading-[24px] text-slate-700 my-5">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
