import React from "react";
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-5 py-5 rounded-[20px]  md:mr-10 sm:mr-5 mr-0  feedback-card">
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[42px] h-[27px] object-contain"
    />
    <p className="font-poppins font-normal text-[14px] leading-[24px] text-slate-600 my-10">
      {content}
    </p>
    <div className="flex flex-row items-center">
      <img src={img} alt={name} className="w-[32px] h-[32px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[15px] leading-[32px] text-slate-900">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[14px] leading-[24px] text-slate-600">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
