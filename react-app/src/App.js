import Creations from './components/Creations';
import Header from './components/Header';
import Interactive from './components/Interactive';
import Showcase from './components/Showcase';
import data from "../src/data/mobile/mobile-data";
import Footer from './components/Footer';


const app = () => {
    return (
        <>
            <Header /> 
            <Showcase />
            <Interactive />
            <Creations cards={data} />
            <Footer />
        </>
    )
}

export default app
