import React from 'react';
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

interface IBookCardProps {
  image: string;
  authorImage: string;
  title: string;
  author: string;
}

const BookCard: React.FC<IBookCardProps> = ({ image, authorImage, title, author }) => {
  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt="cover" src={image} />}
      actions={[
        <Icon type="book" key="setting" />,
      ]}
    >
      <Meta
        avatar={<Avatar src={authorImage} />}
        title={title}
        description={author}
      />
    </Card>
  )
};

export default BookCard;
