import Link from 'next/link';

export const metadata = {
  title: 'Nutley NJ Condos For Sale | Jose Fernandez Remax',
  description:
    'Search nutley NJ Condos for sale, information pulled directly from MLS.',
};

export default function ForRentPage() {
  return (
    <section id='for-rent'>
      <h1>Nutley NJ houses or apartments for rent</h1>
      <p>
        Search for rentals in Nutley, NJ{' '}
        <Link
          href='https://jose-fernandez.remax.com/index.php?advanced=1&display=Nutley+Twp.+NJ&min=0&max=100000000&beds=0&baths=0&types%5B%5D=6&minfootage=0&maxfootage=30000&minacres=0&maxacres=0&yearbuilt=0&maxyearbuilt=0&walkscore=0&keywords=&areas%5B%5D=area%3Anutley+twp.%3Anj&sortby=listings.visits+DESC&rtype=grid#rslt'
          target='_blank'>
          here
        </Link>
      </p>
    </section>
  );
}
