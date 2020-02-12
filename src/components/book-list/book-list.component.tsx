import React from 'react';
import { graphqlOperation } from 'aws-amplify';
import { Avatar, List, Skeleton } from 'antd';
import { Connect } from 'aws-amplify-react';

import * as queries from '../../graphql/queries';

const BookListItems: React.FC<{ items: any[] }> = ({ items }) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={items}
      renderItem={(item: any) => (
        <List.Item key={item.id} actions={[]} extra={<Avatar src={item.owner.picture} />}>
          <List.Item.Meta
            avatar={<img width={60} alt="logo" src={item.thumbnailUrl} />}
            title={<a href={'/'}>{item.title} ({item.author})</a>}
            description={item.about}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
};

const BookList: React.FC = () => (
  <Connect query={graphqlOperation(queries.listBooks)}>
    {({ data: { listBooks }, loading }: any) => (
      <>
        {(loading || !listBooks) && <Skeleton />}
        {listBooks && <BookListItems items={listBooks.items || []} />}
      </>
    )}
  </Connect>
);

export default BookList;
