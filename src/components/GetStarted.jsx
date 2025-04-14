import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[120px] h-[120px] rounded-full bg-blue-gradient p-[2px] cursor-pointer shadow-[0_0_20px_5px_rgba(0,212,255,0.5)] transition duration-300 hover:shadow-[0_0_30px_10px_rgba(0,212,255,0.7)]`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Take</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain ml-1" />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Test</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
