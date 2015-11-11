import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { Grid, Row, Col } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class Gamen2List1 extends Component {
  constructor(props, context) {
    super(props, context);
    if (this.props.employees == null) {
      this.props.employees = [];
    }
  }

  ageFormatter(cell, row){
    if (cell != undefined) {
    	return cell + '才';
    } else {
    	return '';
    }
  }

  onRowSelect(row, isSelected){
    console.log(row);
    console.log("selected: " + isSelected)
  }

  render() {
    var selectRowProp = {
      mode: "checkbox",
      clickToSelect: true,
      bgColor: "rgb(238, 193, 213)",
      onSelect: this.onRowSelect
    };

    return (
      <BootstrapTable data={this.props.employees} height="350" striped={true} hover={true} condensed={true} pagination={true} selectRow={selectRowProp}>
          <TableHeaderColumn dataField="id" width="10%" isKey={true} dataAlign="center" dataSort={true}>No.</TableHeaderColumn>
          <TableHeaderColumn dataField="firstName" width="20%" dataSort={true}>姓</TableHeaderColumn>
          <TableHeaderColumn dataField="lastName" width="20%" dataSort={true}>名</TableHeaderColumn>
          <TableHeaderColumn dataField="age" width="10%" dataAlign="right" dataFormat={this.ageFormatter}>年齢</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

Gamen2List1.propTypes = {
    employees: PropTypes.array
};

export default Gamen2List1;