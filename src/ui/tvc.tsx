import iTVC from "../assets/tvc01.jpg";

export const TVC = () => {
  return (
    <section>
      <div class="text-container">
        <h2>TriValley Coders</h2>
        <h3>Founder</h3>
        <p>
          TriValley Coders was founded in 2016 as a community of software
          developers helping each other learn to code. It evolved into a
          class-like format with mentors helping attendees learning full-stack
          developer skills. From 2016 to 2019 we held over 200 meetings.
          Many of our attendees went on to find full-time employment as web
          developers. I loved meeting so many people aspiring to make their lives
          better!
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
