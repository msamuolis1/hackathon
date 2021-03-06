import React, { Component } from 'react';
import { Icon, Row, Col } from 'antd';
import CustomIcons from './CustomIcons';
import Title from './Title';

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, data } = this.props;

    return (
      <div className='List'>
        <Title width={"100%"} title={title} classes="underlined" />
        <div className="ListItem">
        {data.map((d, index) => 
          <Row key={index} gutter={16} style={{width: "100%", paddingBottom: 10}} className="ListRow">
            <Col span={3} >
              <Icon component={CustomIcons[d.icon]} color="#FFBBFF" style={{ color: d.icon === 'Battery' ? '#2C8693' : '#F5A623'}} />
            </Col>
            <Col span={17} ><a href="/">{d.info}</a></Col>
            <Col span={4} ><span style={{float: "right"}}>{d.kiekis}</span></Col>
          </Row>  
        )}
        </div>
      </div>
    );
  }
}

export default List;
