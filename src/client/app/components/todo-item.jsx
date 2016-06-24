import React from 'react';
import * as PropTypes from "react/lib/ReactPropTypes";

class TodoItem extends React.Component {

  render() {
    return (<tr>
      <td>{this.props.itemId}</td>
      <td>{this.props.itemTask}</td>
      <td>{this.props.itemDue.toString()}</td>
      <td>{this.props.itemComplete.toString()}</td>
    </tr>);
  };
}
export default TodoItem;
