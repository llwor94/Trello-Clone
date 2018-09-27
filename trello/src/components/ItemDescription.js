// import React, { Fragment } from 'react';
// import styled from 'styled-compenents';
// import EditDescription from './EditDescription';
// import descript from '../assets/description.svg';

// const Icon = styled.img`
//   height: 24px;
//   color: #999;
//   padding-right: 13px;
// `;

// const Description = styled.form`
//   width: 100%;
//   h3 {
//     font-size: 18px;
//     margin-bottom: 10px;
//     display: inline-block;
//     margin-right: 5px;
//   }
//   span {
//     text-decoration: underline;
//     color: #8c8c8c;
//     cursor: pointer;
//   }
// `;

// const ItemDescription = params => (
//   <Wrapper>
//     <Icon src={descript} />
//     <Description onSubmit={this.handleSubmit} />
//     <h3>Description</h3>
//     {!this.state.editDescription &&
//       this.state.description && <span onClick={this.handleFocus}>Edit</span>}
//     <EditDescription
//       inputRef={el => (this.inputRef = el)}
//       isDescription={this.state.isDescription}
//       handleFocus={this.handleFocus}
//       edit={this.state.editDescription}
//       description={this.state.description}
//       handleChange={e => this.setState({ description: e.target.value })}
//       handleClick={() => this.setState({ editDescription: false })}
//     />
//   </Wrapper>
// );

// export default ItemDescription;
