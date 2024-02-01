import './styles.css'
import React from "react";

interface VideoBgProps {
  width: number;
  height: number;
  aspectRatio: string;
  className?: string;
}
const VideoBg = (props: VideoBgProps) => {
  const {width, height, aspectRatio, className} = props;
  
  const [ratioW, ratioH] = aspectRatio.split(':').map(r => parseInt(r))
  const style = {
    width: `${100 * ratioW / ratioH}vh`, /* e.g.: 100 * 16:9 */
    minHeight: `${100 * ratioH / ratioW}vw` /*e.g.: 100 * 9:16 */
  }

  return (
    <div className={`video-container ` + (className || '')}>
      <video width={width} height={height} style={style} muted={true} loop={true} playsInline={true} autoPlay={true}>
        <source src="/vid/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-filter"/>
    </div>
  )
};

export default VideoBg;