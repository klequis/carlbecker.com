import iTVC from "../assets/tvc.jpg";

export const TVC = () => {
  return (
    <section>
      <div class="text-container">
        <h2>TriValley Coders</h2>
        <h3>Founder</h3>
        <p>
          TriValley Coders was founded in 2016 as a community of software
          developers helping each other learn to code. Over the past 2.5 years
          it has evolved into a class-like format with mentors helping attendees
          to learn specific MERN Stack skills. Since inception, TriValley Coders
          has held more than 160 events.
        </p>
      </div>
      <div class="image-container">
        <img
          src={iTVC}
          class="image"
          alt="people in conference room working on laptops with a big TV on the wall."
        />
      </div>
    </section>
  );
};
