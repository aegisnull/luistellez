import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';
import SEO from '../components/SEO/SEO';

function ContactPage() {
  return (
    <div className='App'>
      <SEO
        title='Contact'
        description='Get in touch with Luis Tellez about new opportunities, collaborations, or project ideas.'
        path='/contact'
      />
      <Header />
      <Contact />
      <Footer />
    </div>
  );
}

export default ContactPage;
