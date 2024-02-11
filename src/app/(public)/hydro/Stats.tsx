'use client';

import React, { useEffect, useState } from "react";
import Console from '@/components/Console/component';

interface StatsProps {
  logs: number;
  bans: number;
}
const Stats = ({ className }: { className?: string }) => {
  const [stats, setStats] = useState<StatsProps>({ logs: 0, bans: 0 });

  useEffect(() => {
    const fetchData = () => {
      fetch('https://hydro.pinkcloud.studio/service/stats')
        .then(res => res.json())
        .then(data => {setStats(data); console.log(data)})
    };
    fetchData();

    const id = setInterval(fetchData, 1000 * 60 * 5);
    return () => clearInterval(id);
  }, []);

  return (
    <Console className={`m-0 flex flex-col items-center gap-4 p-4 ${className || ''}`}>
      <div className="col-xxl-10 offset-xxl-1 stats-box text-center whitespace-nowrap">
        <div className="text-pink-gradient stats">
          <h1 className="text-pink-gradient stats">
              Our Statistics
          </h1>
        </div>
        <p>
          Updated every 5 hours
        </p>
      </div>

      <div className="col-xxl-10 offset-xxl-1 stats-box text-neutral">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="stat">
            <h3>
              Total Logs
            </h3>
            <p className="text-base-content">
              {abbreviate(stats.logs, 2, 2)}
            </p>
          </div>
          <div className="stat">
            <h3>
              Total Bans
            </h3>
            <p className="text-base-content">
              {abbreviate(stats.bans, 2, 2)}
            </p>
          </div>
        </div>
      </div>
    </Console>
  );
}
export default Stats;


// I have JavaScript, like, wtf is this??
// Not even gonna bother lol, cba
// I'm just gonna use the code from the original answer and hope it works lol
// https://stackoverflow.com/questions/18151877/javascript-shorten-large-numbers-force-decimal-places-and-choose-to-represent
function abbreviate(number: number, maxPlaces: number, forcePlaces?: any, forceLetter?: boolean) {
  number = Number(number)
  forceLetter = forceLetter || false
  if(forceLetter !== false) {
    return annotate(number, maxPlaces, forcePlaces, forceLetter)
  }
  var abbr
  if(number >= 1e12) {
    abbr = 'T'
  }
  else if(number >= 1e9) {
    abbr = 'B'
  }
  else if(number >= 1e6) {
    abbr = 'M'
  }
  else if(number >= 1e3) {
    abbr = 'K'
  }
  else {
    abbr = ''
  }
  return annotate(number, maxPlaces, forcePlaces, abbr)
}

function annotate(number: number, maxPlaces: number | boolean | undefined, forcePlaces: number | boolean | undefined, abbr: string | number | boolean) {
  // set places to false to not round
  var rounded = 0
  switch(abbr) {
    case 'T':
      rounded = number / 1e12
      break
    case 'B':
      rounded = number / 1e9
      break
    case 'M':
      rounded = number / 1e6
      break
    case 'K':
      rounded = number / 1e3
      break
    case '':
      rounded = number
      break
  }
  if(maxPlaces !== false) {
    var test = new RegExp('\\.\\d{' + (maxPlaces! as number + 1) + ',}$')
    if(test.test(('' + rounded))) {
      rounded = rounded.toFixed(maxPlaces as number) as any as number
    }
  }
  if(forcePlaces !== false) {
    rounded = Number(rounded).toFixed(forcePlaces as number) as any as number
  }
  return rounded + (abbr as string)
}