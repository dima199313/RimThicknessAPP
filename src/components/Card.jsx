import { Typography, Flex, Tag } from 'antd';
export default function Card(props) {
  function tagColor(allowance) {
    if (allowance <= 7) {
      return 'green';
    } else if (allowance > 7 && allowance <= 14) {
      return 'orange';
    } else {
      return 'red';
    }
  }
  return (
    <div style={{ backgroundColor: '#fff', padding: 9 }}>
      <Flex gap="small" justify="center" align="center">
        <Typography.Title style={{ margin: 0 }} level={4}>
          #{props.id + 1}
          {'  '}[{props.originalRimThickness}
          {' / '}
          {props.rimThickness}]
        </Typography.Title>
        <Typography.Title style={{ margin: 0 }} level={5}>
          Снято
        </Typography.Title>
        <Tag color={tagColor(props.allowance)}>{props.allowance}мм</Tag>
        <Typography.Title style={{ margin: 0 }} level={5}>
          {props.firstDiameter}/{props.secondDiameter}/{props.rimThickness}
        </Typography.Title>
      </Flex>
    </div>
  );
}
