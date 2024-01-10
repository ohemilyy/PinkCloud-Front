import './styles.css';
import Hero from './Hero';
import Services from './Services';
import Portfolio from './Portfolio';
import About from './About';
import FAQ from './FAQ';

export default function Home() {
  return <>
    <Hero />
    <Services />
    <Portfolio />
    <About />
    <FAQ />
  </>;
}
