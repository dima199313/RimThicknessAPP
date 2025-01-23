import { Layout, Divider,} from 'antd';
import Title from './Title'

import InputSection from './InputSection';
const contentStyle = {
  textAlign: 'center',
  height: '100%',
  overflow: 'auto',
  backgroundColor: '#fff',
};


export default function Content() {

 
  return (
    <Layout.Content style={contentStyle}>
      <Title/>
      <Divider style={{ borderColor: '#7cb305' }}>dima.kirshchin.71@gmail.com</Divider>
      <InputSection />
    </Layout.Content>
  );
}
