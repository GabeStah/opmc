import { Link } from "gatsby"
import React from "react"
import Tabulator from "tabulator-tables"
import "react-tabulator/lib/styles.css"
import "react-tabulator/lib/css/tabulator.min.css" // theme

class SongsClass extends React.Component {
  el = React.createRef();

  tabulator = null;

  audioFormatter = (cell) => {
    const url = cell.getValue()
    if (url) {
      return`<audio
            controls
            controlsList="nodownload"
            src=${cell.getValue()}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>`;
    }
  };

  tooltipFormatter = (cell) => `${cell.getRow().getData().title} [${cell.getColumn().getField()}]`

  getColumns = () => {
    return [
      { title: 'Title', field: 'title', align: 'left', formatter: 'plaintext', frozen: true, headerFilter: "input" },
      { title: 'Ensemble', field: 'ensemble', formatter: this.audioFormatter },
      { title: 'Tenor', field: 'tenor', formatter: this.audioFormatter },
      { title: 'Lead', field: 'lead', formatter: this.audioFormatter },
      { title: 'Baritone', field: 'baritone', formatter: this.audioFormatter },
      { title: 'Bass', field: 'bass', formatter: this.audioFormatter },
    ];
  }

  componentDidMount() {
    //instantiate Tabulator when element is mounted
    this.tabulator = new Tabulator(this.el, {
      data: this.props.songs || [], //link data to table
      columns: this.getColumns({ role: 'all'}), //define table columns
      responsiveLayout: 'collapse',
      tooltips: this.tooltipFormatter,
      layout: 'fitColumns',
      layoutColumnsOnNewData:true
    });

    this.updateColumns({ role: this.props.role })

    this.tabulator.redraw()
  }

  getFilters = ({ role }) => {
    if (role && role !== 'all') {
      return [
        {field: role, type: '!=', value: ''}
      ]
    }
  }

  updateFilters = ({ role, table }) => {
    table.clearFilter(true);
    if (role && role !== 'all') {
      table.setFilter(role, '!=', '');
    }
  }

  updateColumns = ({ role }) => {
    // Toggle columns.
    const columns = this.tabulator.getColumns()
    const defaultColumns = ['title', 'tags']
    if (role && role !== 'all') {
      columns.forEach(column => {
        if (!defaultColumns.includes(column.getField()) && column.getField() !== role) {
          column.hide()
        } else {
          column.show()
        }
      })
    } else {
      columns.forEach(column => column.show())
    }
  }

  handleRoleValueChange({ role }) {
    this.updateColumns({ role })

    // Redraw to properly resize columns
    this.tabulator.redraw()
  }

  render() {
    return <section>
      <ul>
        <li style={{ display: `inline-block`, marginRight: `1rem` }} onClick={() => {this.handleRoleValueChange({role: 'all', table: this.tabulator})}}>
          <Link to={"/music"} >All</Link>
        </li>
        <li style={{ display: `inline-block`, marginRight: `1rem` }} onClick={() => {this.handleRoleValueChange({role: 'ensemble', table: this.tabulator})}}>
          <Link to={"/music#ensemble"} >Ensemble</Link>
        </li>
        <li style={{ display: `inline-block`, marginRight: `1rem` }} onClick={() => {this.handleRoleValueChange({role: 'lead', table: this.tabulator})}}>
          <Link to={"/music#lead"} >Lead</Link>
        </li>
        <li style={{ display: `inline-block`, marginRight: `1rem` }} onClick={() => {this.handleRoleValueChange({role: 'tenor', table: this.tabulator})}}>
          <Link to={"/music#tenor"} >Tenor</Link>
        </li>
        <li style={{ display: `inline-block`, marginRight: `1rem` }} onClick={() => {this.handleRoleValueChange({role: 'baritone', table: this.tabulator})}}>
          <Link to={"/music#baritone"} >Baritone</Link>
        </li>
        <li style={{ display: `inline-block`, marginRight: `1rem` }} onClick={() => {this.handleRoleValueChange({role: 'bass', table: this.tabulator})}}>
          <Link to={"/music#bass"} >Bass</Link>
        </li>
      </ul>
      <div ref={el => (this.el = el)} />
    </section>
  }
}

export default SongsClass
