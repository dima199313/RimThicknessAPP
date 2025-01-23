import {} from 'antd';
import { Button, Form, Input, Space, Flex } from 'antd';
import { calcTO } from '../utils';
import Counter from './Counter';
import { useState } from 'react';
import Card from './Card';


export default function InputSection() {
  const [dataArr, setDataArr] = useState([]);
  const [counter, setCounter] = useState(0);

  const [form] = Form.useForm();
  const formHandler = data => {
    setDataArr([
      ...dataArr,
      calcTO(data.firstDiameter, data.secondDiameter, data.rimThickness),
    ]);

    setCounter(dataArr.length + 1);

  };
  console.log(dataArr);

  const onclickHandler = e => {
    
  };
  const onClearInput = () => {
    form.resetFields();
  };
  const onReset = () => {
    setDataArr([])
    setCounter(0)
  };

  return (
    <Flex vertical gap="small" justify="center" align="center" wrap>
      <Counter counterValue={counter} />
      <Form
        form={form}
        name="basic"
        style={{
          maxWidth: 600,
        }}
        onFinish={formHandler}
      >
        <Form.Item
          name="firstDiameter"
          rules={[
            {
              required: true,
              message: 'Введите начальный диаметр',
            },
          ]}
        >
          <Input
            maxLength={3}
            placeholder="Начальный диаметр"
            type="number"
            style={{ height: 30, fontSize: 20 }}
          />
        </Form.Item>
        <Form.Item
          name="secondDiameter"
          rules={[
            {
              required: true,
              message: 'Введите конечный диаметр',
            },
          ]}
        >
          <Input
            maxLength={3}
            placeholder="Конечный диаметр"
            type="number"
            style={{ height: 30, fontSize: 20 }}
          />
        </Form.Item>
        <Form.Item
          name="rimThickness"
          rules={[
            {
              required: true,
              message: 'Введите толщину обода',
            },
          ]}
        >
          <Input
            maxLength={2}
            placeholder="Толщина обода"
            type="number"
            style={{ height: 30, fontSize: 20 }}
          />
        </Form.Item>

        <Form.Item>
          <Space>
            <Button type="primary" onClick={onclickHandler} htmlType="submit">
              Добавить
            </Button>
            <Button htmlType="button" onClick={onClearInput}>
              Очистить поля
            </Button>
            <Button color="danger" variant="outlined" onClick={onReset}>
              Сбросить
            </Button>
          </Space>
        </Form.Item>
      </Form>
      <div>
        {dataArr.map((item, i) => {
          return (
            <Card
              firstDiameter={item.firstDiameter}
              secondDiameter={item.secondDiameter}
              originalRimThickness={item.originalRimThickness}
              rimThickness={item.rimThickness}
              allowance={item.allowance}
              id={i}
              key={i}
            />
          );
        })}
      </div>
    </Flex>
  );
}
