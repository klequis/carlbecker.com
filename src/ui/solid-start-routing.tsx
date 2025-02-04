import iTitlePage from "../assets/title_page.png";

export const LatestActivities = () => {
  return (
    <section class="section-white">
      <div class="text-container">
        <h2>SolidStart Routing</h2>
        <h3>File-based Routing with SolidStart</h3>
        <p>
          A hands-on guide to learning client-side routing with SolidStart and
          Solid Router, covering file-based routing, static and dynamic routes,
          navigation, nested layouts, and more. SolidStart is a high-performance
          meta-framework for full-stack development with options for client-side
          rendering (CSR), server-side rendering (SSR), or static site
          generation (SSG).
        </p>
      </div>
      <div class="image-container">
        <a href="https://leanpub.com/solidstart-routing-book">
          <img
            src={iTitlePage}
            class="image book-image"
            alt="book: SolidStart Routing"
          />
        </a>
      </div>
    </section>
  );
};
