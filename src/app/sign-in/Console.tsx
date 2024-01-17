import React from 'react';
import './styles.css'

const Console = (props: any) =>
  <div className="mockup-window w-full max-w-[60rem] pt-0 border-[1px] border-black m-0 sm:m-16">
    <div className="mockup-bar py-3 px-0 border-b border-slate-500 backdrop-filter backdrop-blur-lg backdrop-saturate-150"><div></div></div>
    <div className={`relative mockup-content z-[1] ${props.className}`}>
      <div className="absolute h-full w-full bg-black inset-0 z-[-1] console-filter"></div>
      {props.children}
    </div>
  </div>;

export default Console;