import BannerLayout from './layouts/BannerLayout';
import ChooseUs from './layouts/ChooseUs';
import Collections from './layouts/Collections';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import LiveAcution from './layouts/LiveAcution';
import OurCreater from './layouts/OurCreater';
import Story from './layouts/Story';

function App() {
  return (
    <div>
      <Header></Header>
      <BannerLayout></BannerLayout>
      <Story></Story>
      <Collections></Collections>
      <LiveAcution></LiveAcution>
      <OurCreater></OurCreater>
      <ChooseUs></ChooseUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
