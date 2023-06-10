import './App.css';
import MainComponent from './components/MainComponent';
import Header from "./layouts/Header.jsx";
import SideMenu from './layouts/SideMenu';
import Sidebar from './layouts/Sidebar.jsx';
import SmallDeviceSidebar from './layouts/SmallDeviceSidebar';

function App() {

  return (
    <>
      <Header />
      <section className='container mx-auto'>
        <div className="flex">

          <SideMenu />
          <SmallDeviceSidebar />

          <Sidebar />

          <MainComponent />

        </div>
      </section>
    </>
  );
}

export default App;
