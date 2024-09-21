import { Layout } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';

// import { CraftEditor } from '@ui-puzzles/editor';
import { TopMenus } from './components/TopMenus';
import { AVAILABLE_MENUS } from './constants';
import { Outlet } from 'react-router-dom';

const Header = Layout.Header;

const Content = Layout.Content;

function App() {
  return (
    <Layout
      style={{
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
      }}
    >
      <Header
        style={{
          backgroundColor: '#f5f5f5',
          borderBottom: '1px solid #eee',
        }}
      >
        <TopMenus menus={AVAILABLE_MENUS} />
      </Header>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
}

export default App;
