import { features } from "../constants";
import styles, { layout } from "../style";


const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="Service" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Our Services to <br className="sm:block hidden" /> Shape Your Career
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      we offer powerful tools and resources to help students find their ideal career path. From deep assessments to practical skill tests, everything is designed to provide clarity and confidence in choosing the right future. Whether you're just exploring or ready to commit, we’ve got you covered.
      </p>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
