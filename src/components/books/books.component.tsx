import React from 'react';
import { PageHeader, Card, Row, Col } from 'antd';

import BookList from '../book-list';
import NewBook from '../new-book';

const Books: React.FC = () => {
  return (
    <div>
      <PageHeader
        style={{
          marginBottom: '24px'
        }}
        ghost={true}
        onBack={() => window.history.back()}
        title="Books"
        subTitle="View all books in the library"
        avatar={{
          icon: 'book'
        }}
        extra={[
          <NewBook key={'1'} />,
        ]}
      >
      </PageHeader>

      <Row gutter={[24, 24]}>
        <Col span={12}>
          <Card title={'Latest Books'}>
            <BookList />
          </Card>
        </Col>
        <Col span={12}>
          <Card title={'My Books'}>
            <BookList />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Books;
