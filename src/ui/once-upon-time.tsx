import iRiding from '../assets/ridingXL.jpg'

// this was done with a PictureElement see other project

// it is a complex element and I may want to look for an alternative
// i may not understand how it works
// slapping a max size on it for now

export const OnceUponATime = () => {
  return (
    <section>
      <p>Once Upon A Time</p>
      <h2>Dressage Trainer & Instructor</h2>
      <p>I fell in love with horses when I was 10 years old.</p>
      
      <img src={iRiding} style="max-width: 500px" alt="Carl riding a dappled grey horse trotting" />
    </section>
  )
}