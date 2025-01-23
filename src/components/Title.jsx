import { TrademarkCircleOutlined } from '@ant-design/icons';
import { Typography, Flex } from 'antd';
export default function Title () {
  return (
    <Flex gap="middle" justify="center" align="center" wrap>
      <TrademarkCircleOutlined style={{ fontSize: 40 }} />
      <Typography.Title style={{margin:'10px 0 0'}} level={2}>RimThicknessAPP</Typography.Title>
    </Flex>

  )
}