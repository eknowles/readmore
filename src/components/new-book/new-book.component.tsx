import React from 'react';
import { Drawer, Form, Button, Col, Row, Input, Icon } from 'antd';

class DrawerForm extends React.Component<any, any> {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          <Icon type="plus" /> Add a new book
        </Button>
        <Drawer
          title="Add a new book"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Title">
                  {getFieldDecorator('title', {
                    rules: [{ required: true, message: 'Please enter the books title' }],
                  })(<Input placeholder="Please enter the books title" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Author">
                  {getFieldDecorator('author', {
                    rules: [{ required: true, message: 'Please enter the books author' }],
                  })(<Input placeholder="Please enter the books author" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="Thumbnail">
                  {getFieldDecorator('thumbnailUrl', {
                    rules: [{ required: true, message: 'Please enter the thumbnail url' }],
                  })(<Input placeholder="Please enter the thumbnail url" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="Description">
                  {getFieldDecorator('description', {
                    rules: [
                      {
                        required: true,
                        message: 'please enter a description',
                      },
                    ],
                  })(<Input.TextArea rows={4} placeholder="please enter a description" />)}
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <div
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right',
            }}
          >
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={this.onClose} type="primary">
              Submit
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Form.create()(DrawerForm);
