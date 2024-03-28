import './App.css';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

function App() {
  return (
    <div className="App">
      <MantineProvider forceColorScheme="light" theme={{}}>
        <Header />
        <Main />
        <Footer />
      </MantineProvider>
    </div>
  );
}

export default App;
