import { ReactNode, ComponentType } from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';
import LayoutComponentProps from '../types/layout'

interface AppProps {
  LayoutComponent: ComponentType<LayoutComponentProps>;
}

const App: React.FC<AppProps> = ({LayoutComponent}) => {
  return (
    <LayoutComponent>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </LayoutComponent>
  );
}

export default App;
