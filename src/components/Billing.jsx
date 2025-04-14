import {  bill } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="About Us" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[80%] h-[90%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Discover Your Career  <br className="sm:block hidden" /> Path with Confidence
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      At Pathfinder, we guide students toward a brighter future through personalized assessments. Take skill-based tests, fun quizzes, and IQ challenges to uncover your strengths and understand where you can grow. Get customized insights to choose the right path and improve where it matter most.
      </p>

    </div>
  </section>
);

export default Billing;
