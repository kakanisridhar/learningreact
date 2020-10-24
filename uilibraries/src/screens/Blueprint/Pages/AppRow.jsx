import React from "react";
import { Row, Col } from "react-flexbox-grid";
import classNames from "classnames";

export default class AppRow extends React.PureComponent {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    e.preventDefault();
    this.props.onRowSelect(parseInt(e.target.dataset.rid));
  }

  render() {
    let columns = [];
    for (var i = 0; i < this.props.cols; i++) {
      columns.push(
        <Col
          key={`${this.props.rid}-c-${i}`}
          className="dyna-col"
          xs
          data-rid={this.props.rid}
          onClick={this.clickHandler}
        >
          Drop a control from left menu
        </Col>
      );
    }
    var rowClass = classNames({
      "dyna-row--selected": this.props.selected,
      "dyna-row": !this.props.selected,
    });
    return <Row className={rowClass}>{columns}</Row>;
  }
}
