export const metadata = {
  title: 'Nutley NJ Houses For Sale - Jose Fernandez Remax',
  descrition: 'Search for Nutley NJ Houses For Sale',
};

export default function NutleyHousesPage() {
  return (
    <section>
      <h1>Nutley Houses For Sale</h1>
      <div className='ratio ratio-16X9'>
        <iframe
          style={{ width: '960px', height: '300px' }}
          src='https://jose-fernandez.remax.com/wide.php'
          allowtransparency='true'
          frameBorder='0'>
          {' '}
        </iframe>
      </div>
    </section>
  );
}
