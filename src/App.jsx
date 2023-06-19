import { useEffect, useState } from 'react';
import './App.css';
import MainComponent from './components/MainComponent';
import Header from "./layouts/Header.jsx";
import SideMenu from './layouts/SideMenu';
import Sidebar from './layouts/Sidebar.jsx';
import SmallDeviceSidebar from './layouts/SmallDeviceSidebar';

function App() {


  const [ open, setOpen ] = useState( null );

  const formOpen = () => {
    setOpen( true );
  };

  const formClose = ( event ) => {
    setOpen( event );
  };

  return (
    <>
      <Header opened={ open } formClose={ ( event ) => formClose( event ) } />
      <div className="spacer"></div>
      <section className='container mx-auto main_container_v2'>
        <div className="flex">

          <SideMenu />

          <SmallDeviceSidebar />

          <Sidebar openLoginForm={ formOpen } />

          <MainComponent openHeaderLogin={ formOpen } />

        </div>
      </section>
    </>
  );
}

export default App;
