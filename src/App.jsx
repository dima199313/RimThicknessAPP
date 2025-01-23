import './App.css';
import { Flex, Layout } from 'antd';

import Content from './components/Content';

const layoutStyle = {
  overflow: 'hidden',
  width: '100%',
  height: '100vh',

};



function App() {
  return (
    <>
      <Flex gap="middle" wrap>
        <Layout style={layoutStyle}>
          <Content/>
        </Layout>
      </Flex>
    </>
  );
}

export default App;
