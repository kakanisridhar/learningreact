import "./DynaGrid.scss";
import React, { Component } from "react";
import { Grid } from "react-flexbox-grid";
import { ButtonGroup, Button } from "@blueprintjs/core";
import produce from "immer";

import AppRow from "./AppRow";

export default class DynaGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [1],
      selectedRow: 0,
    };
    this.addRow = this.addRow.bind(this);
    this.rowSelected = this.rowSelected.bind(this);
    this.addColumn = this.addColumn.bind(this);
  }

  rowSelected(r) {
    this.setState(
      produce(this.state, (draft) => {
        draft.selectedRow = r;
      })
    );
  }

  addRow(e) {
    this.setState(
      produce(this.state, (draft) => {
        draft.rows.push(1);
      })
    );
  }

  addColumn() {
    let { rows, selectedRow } = this.state;
    this.setState(
      produce(this.state, (draft) => {
        if (rows[selectedRow] < 4) {
          draft.rows[selectedRow] = rows[selectedRow] + 1;
        }
      })
    );
  }

  render() {
    let { rows, selectedRow } = this.state;
    let rowsRendered = rows.map((v, k) => {
      return (
        <AppRow
          key={k}
          cols={v}
          rid={k}
          selected={k === selectedRow}
          onRowSelect={this.rowSelected}
        ></AppRow>
      );
    });

    let addColsDisabled = rows[selectedRow] >= 4;

    return (
      <div>
        <ButtonGroup minimal={true}>
          <Button icon="add-row-bottom" onClick={this.addRow}>
            Add Row
          </Button>
          <Button
            icon="add-column-left"
            disabled={addColsDisabled}
            onClick={this.addColumn}
          >
            Add Column
          </Button>
        </ButtonGroup>
        <Grid fluid>{rowsRendered}</Grid>
      </div>
    );
  }
}
