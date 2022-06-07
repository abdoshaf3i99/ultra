import React, { Component } from 'react';
import {
  WorkSection,
  WorkTitle,
  WorkPart,
  Icon,
  ParTitle,
  Line,
  PartDesc,
  Span,
} from './style.js';
import axios from 'axios';
class Work extends Component {
  state = {
    works: [],
  };

  componentDidMount() {
    axios
      .get('js/data.json')
      .then((res) => this.setState({ works: res.data.works }));
  }
  render() {
    const { works } = this.state;
    const workslist = works.map((workItem) => {
      return (
        <WorkPart first={workItem.id} key={workItem.id}>
          <Icon className={workItem.icon_name}></Icon>
          <ParTitle>{workItem.title}</ParTitle>
          <Line />
          <PartDesc>{workItem.body}</PartDesc>
        </WorkPart>
      );
    });
    return (
      <WorkSection>
        <div class="container">
          <WorkTitle>
            <Span>My</Span> Work
          </WorkTitle>
          {workslist}
        </div>
      </WorkSection>
    );
  }
}

export default Work;
