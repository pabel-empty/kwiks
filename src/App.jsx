import './App.css';
import MainComponent from './components/MainComponent';
import Header from "./layouts/Header.jsx";
import Sidebar from './layouts/Sidebar.jsx';

function App() {

  return (
    <>
      <Header />
      <section className='container mx-auto'>
        <div className="flex">

          <Sidebar />

          <MainComponent />

          <div className='flex-1 text-right'>
            <div className="right_side_bar">
              Right Sidebar
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default App;
