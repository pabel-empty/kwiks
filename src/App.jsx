import { useEffect, useState } from 'react';
import './App.css';
import MainComponent from './components/MainComponent';
import Header from "./layouts/Header.jsx";
import SideMenu from './layouts/SideMenu';
import Sidebar from './layouts/Sidebar.jsx';
import SmallDeviceSidebar from './layouts/SmallDeviceSidebar';

function App() {

  const [ play, setPlay ] = useState( false );

  useEffect( () => {
    setTimeout( () => {
      setPlay( true );
    }, 2000 );
  }, [] );

  return (
    <>
      <Header />
      <section className='container mx-auto'>
        <div className="flex">

          <SideMenu />
          <SmallDeviceSidebar />

          <Sidebar />


          {
            play ? <MainComponent /> : <h3>Loading</h3>
          }

        </div>
      </section>
    </>
  );
}

export default App;
