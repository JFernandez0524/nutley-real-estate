export const metadata = {
  title: 'Open Houses in Nutley NJ | Jose Fernandez Remax',
  description:
    'Find Open houses in nutley NJ, information pulled directly from MLS.',
};

export default function OpenHousesPage() {
  return (
    <section className='open-houses'>
      <div class='ratio ratio-16x9'>
        <iframe
          src='https://jose-fernandez.remax.com/index?advanced=1&display=Nutley+Twp.&areas%5B%5D=city:Nutley+Twp.:nj&beds=0&baths=0&min=0&max=100000000&minacres=0&maxacres=3000&minfootage=0&maxfootage=30000&walkscore=&yearbuilt=0&options%5B%5D=openhouses&types%5B%5D=14&types%5B%5D=9&types%5B%5D=43&types%5B%5D=57&types%5B%5D=4&types%5B%5D=2&types%5B%5D=56&types%5B%5D=12&types%5B%5D=15&types%5B%5D=5&types%5B%5D=3&types%5B%5D=55&types%5B%5D=6&types%5B%5D=1&types%5B%5D=31&sortby=listings.listingdate+DESC&ppc=nutley+niche+site&agency_photos=4&view_timing=2'
          allowfullscreen></iframe>
      </div>
      <h1>Nutley NJ houses or apartments for rent</h1>
    </section>
  );
}
