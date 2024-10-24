import iRiding from "../assets/ridingXL.jpg";

export const OnceUponATime = () => {
  return (
    <section class="section-light-blue">
      <div class="text-container">
        <h3>Once Upon A Time</h3>
        <h2>Dressage Trainer & Instructor</h2>
        <p class="italic-para">
          I fell in love with horses when I was 10 years old.
        </p>
      </div>
      <div class="image-container">
        <img
          src={iRiding}
          class="image"
          alt="Carl riding a dappled grey horse trotting"
        />
      </div>
    </section>
  );
};
