import { Flex, Typography, Tag } from 'antd';
import SlotCounter from 'react-slot-counter'
export default function Counter (props) {
  return (

      <Flex align='center' gap="middle">
      <Typography.Title style={{margin:0}} level={4}>Кол-во значений</Typography.Title>
      <Tag color="green">

      <SlotCounter  value={props.counterValue} />
      </Tag>
      {/* <SlotCounter value={123456} />
      <SlotCounter value={36.5} />
      <SlotCounter value="1,234,567" />
      <SlotCounter value={['1', '2', '3', '4', '5', '6']} />
      <SlotCounter value="??????" /> */}

      </Flex>

  );
}