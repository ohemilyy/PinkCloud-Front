'use client';
import React from "react";
import { InView } from "react-intersection-observer";

const FAQ = () =>
<section id="faq" className="w-full flex flex-col items-center justify-center gap-7 text-center pt-10 pb-20 lg:pt-0 px-8 sm:px-16 md:px-28 lg:px-36 xl:px-40">
  <h3 className="text-primary font-bold mb-3">Frequently Asked Questions</h3>

  <div className="w-full max-w-3xl flex flex-col items-center justify-center gap-2">
    <Question
      question="Question that is soooo frequently asked..."
      answer="Answer that is soooo frequently said...."></Question>
    <Question
      question="Question that is soooo frequently asked..."
      answer="Answer that is soooo frequently said...."></Question>
    <Question
      question="Question that is soooo frequently asked..."
      answer="Answer that is soooo frequently said...."></Question>
    <Question
      question="Question that is soooo frequently asked..."
      answer="Answer that is soooo frequently said...."></Question>
  </div>
</section>;
export default FAQ;

const Question = (props: { question: string; answer: string; }) => (
  <div className="relative w-full">
    <InView as="div" className="absolute top-0 left-0 h-full w-full" threshold={.67} initialInView={true} fallbackInView={true}
      onChange={(inView, event) => event.target?.parentElement?.children[1]?.classList.toggle('in-view', inView)}></InView>
    
    <div className="collapse collapse-arrow bg-base-300 bg-opacity-65 rounded-lg in-view">
      <input type="checkbox"/>
      <h6 className="flex items-center collapse-title">
        {props.question}
      </h6>
      <div className="collapse-content flex items-start"> 
        <small>{props.answer}</small>
      </div>
    </div>
  </div>
);