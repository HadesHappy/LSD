import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ConnectWallet from './components/ConnectWallet';
import ModalWindow from './components/ModalWindow';
import PageHeader from './components/PageHeader';
import { Dapp } from './pages/dapp/Dapp';
import Home from './pages/home/Home';

function App() {
  const [isWalletWindowVisible, setIsWalletWindowVisible] = useState(false);

  const location = useLocation();

  return (
    <div className={`app ${location.pathname === '/dapp' ? 'app--black' : ''}`}>
      <PageHeader setIsWalletWindowVisible={setIsWalletWindowVisible} />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/dapp' element={<Dapp />} />
      </Routes>

      {
        isWalletWindowVisible &&
        <ModalWindow>
          <ConnectWallet setIsWalletWindowVisible={setIsWalletWindowVisible}/>
        </ModalWindow>
      }
    </div>
  );
}

export default App;
