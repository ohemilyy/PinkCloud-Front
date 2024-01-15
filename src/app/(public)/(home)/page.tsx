import './styles.css';
import Hero from './Hero';
import Who from './Who';
import Services from './Services';
import Portfolio from './Portfolio';
import Ready from './Ready';
import FAQ from './FAQ';

export default function Home() {
  return <>
    <Hero />
    <Services />
    <Who />
    {/* <Portfolio /> */}
    <Ready />
    <FAQ />
  </>;
}
