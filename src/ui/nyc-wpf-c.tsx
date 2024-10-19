import iSilverlight from '../assets/logos/silverlight-smaller.png'
import iWPF from '../assets/logos/wpf-smaller.png'

export const NYCWPFC = () => {
  return (
    <section>
      <h2>New York City WPF & Silverlight Meetup</h2>
      <h3>Co-organizer</h3>
      <p>
        Co-organized and frequently presented at this Microsoft sponsored
        Meetup.
      </p>
      <img src={iWPF} class="logoWPF" alt='microsoft windows presentation foundation logo' />
      <img src={iSilverlight} class="logoSilverlight" alt='microsoft silverlight logo' />
    </section>
  );
};
