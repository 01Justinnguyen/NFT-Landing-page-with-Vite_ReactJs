import BannerLayout from './layouts/BannerLayout';
import Collections from './layouts/Collections';
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
    </div>
  );
}

export default App;
