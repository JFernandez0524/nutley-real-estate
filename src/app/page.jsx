import Image from 'next/image';
import Sidebar from './components/sidebar/Sidebar';

export const metadata = {
  title: 'Nutley NJ homes for sale',
};

export default function HomePage() {
  return (
    <section className='hero' id='hero'>
      <div className='row'>
        <div className='col-sm-8'>Left</div>
        <div className='col-sm-4'>
          Right<Sidebar></Sidebar>
        </div>
      </div>
      <div className='row-md-4'>Bottom</div>

      <h1>home page</h1>
      <p></p>
    </section>
  );
}
