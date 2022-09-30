import LogoTitle from '../../assets/images/logo-l.png';

const Home = () => {
    return (
    <div className="container home-page">
        <div className="text-zone">
            <h1>Hi, <br/> I'm
            <img src={LogoTitle} alt="developer" />
            Luis Tellez
            <br/>
            web developer
            </h1>
            <h2>Frontend Developer / UI/UX Enthusiast</h2>
        </div>
    </div>
  );
}

export default Home;