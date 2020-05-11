import { List, Card, Tag } from "antd";
import React from 'react';
import Meta from "antd/lib/card/Meta";

const CardsList: React.FC<any> = ({ data }: any) => {

  const businessCategories: Record<number, string> = {
    1:  "Services",
    2:  "Products",
  };
    
  return (
    <List
    grid={{
      gutter: 6,
      xs: 1,
      sm: 1,
      md: 1,
      lg: 2,
      xl: 2,
      xxl: 3,
    }}
    dataSource={data}
    renderItem={(item:any) => (
      <List.Item>
        <Card
            hoverable
            style={{ width: 300, marginTop: 16 }} 
            title={item.name}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            extra={
              <span>
                <Tag>{businessCategories[item.category]}</Tag>
              </span>
            }
        >
          <Meta
            description={item.description}
          />          
        </Card>
      </List.Item>
    )}
  />
  )
}

export default CardsList;
