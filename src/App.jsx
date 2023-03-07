import BannerLayout from './layouts/BannerLayout';
import Collections from './layouts/Collections';
import Header from './layouts/Header';
import Story from './layouts/Story';

function App() {
  return (
    <div>
      <Header></Header>
      <BannerLayout></BannerLayout>
      <Story></Story>
      <Collections></Collections>
    </div>
  );
}

export default App;
