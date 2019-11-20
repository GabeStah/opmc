import { Link } from "gatsby"
import React, { useState } from "react"
import 'react-tabulator/lib/styles.css';
import 'react-tabulator/lib/css/tabulator.min.css'; // theme
import { ReactTabulator } from 'react-tabulator'
import { useSongs } from '../data/use-songs'

const Songs = ({ role }) => {
  const [roleValue, setRoleValue] = useState(role)
  let [tableValue, setTableValue] = useState()

  let tableRef = React.createRef()

  const data = useSongs()

  const audioFormatter = (cell) => {
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

  const tooltipFormatter = (cell) => `${cell.getRow().getData().title} [${cell.getColumn().getField()}]`

  const getColumns = (role) => {
    let columns = [
      { title: 'Title', field: 'title', align: 'left', formatter: 'plaintext', frozen:true, headerFilter:"input"},
    ];
    if (!role || role === '' || role === 'all') {
      columns = columns.concat([
        { title: 'Ensemble', field: 'ensemble', formatter: audioFormatter },
        { title: 'Tenor', field: 'tenor', formatter: audioFormatter },
        { title: 'Lead', field: 'lead', formatter: audioFormatter },
        { title: 'Baritone', field: 'baritone', formatter: audioFormatter },
        { title: 'Bass', field: 'bass', formatter: audioFormatter },
      ])
    } else {
      columns.push({ title: role.substr(0, 1).toUpperCase() + role.substr(1), field: role, formatter: audioFormatter })
    }
    return columns;
  }

  const [columnsValue, setColumnsValue] = useState(getColumns(roleValue))

  const getFilters = ({ role }) => {
    if (role && role !== 'all') {
      return [
        {field: role, type: '!=', value: ''}
      ]
    }
  }

  const updateFilters = ({ role }) => {
    tableValue.table.clearFilter(true);
    if (role && role !== 'all') {
      tableValue.table.setFilter(role, '!=', '');
    }
  }

  function handleRoleValueChange(value) {
    setRoleValue(value)
    setColumnsValue(roleValue)

    tableValue.table.setColumns(getColumns(value))
    updateFilters({role: value})
  }

  return <section>
    <ul>
      <li style={{ display: `inline-block`, marginRight: `1rem` }} onClick={() => {handleRoleValueChange('all')}}>
        <Link to={"/music"} >All</Link>
      </li>
      <li style={{ display: `inline-block`, marginRight: `1rem` }} onClick={() => {handleRoleValueChange('ensemble')}}>
        <Link to={"/music#ensemble"} >Ensemble</Link>
      </li>
      <li style={{ display: `inline-block`, marginRight: `1rem` }} onClick={() => {handleRoleValueChange('lead')}}>
        <Link to={"/music#lead"} >Lead</Link>
      </li>
      <li style={{ display: `inline-block`, marginRight: `1rem` }} onClick={() => {handleRoleValueChange('tenor')}}>
        Tenor
        {/*<Link to={"/music#tenor"} >Tenor</Link>*/}
      </li>
      <li style={{ display: `inline-block`, marginRight: `1rem` }} onClick={() => {handleRoleValueChange('baritone')}}>
        Baritone
        {/*<Link to={"/music#baritone"} >Baritone</Link>*/}
      </li>
      <li style={{ display: `inline-block`, marginRight: `1rem` }} onClick={() => {handleRoleValueChange('bass')}}>
        Bass
        {/*<Link to={"/music#bass"} >Bass</Link>*/}
      </li>
    </ul>
    <ReactTabulator
      ref={ref => (tableRef = setTableValue(tableRef))}
      columns={columnsValue}
      data={data}
      tooltips={tooltipFormatter}
      initialFilter={getFilters({role: roleValue})}
      // layout={"fitData"}
      responsiveLayout={"collapse"}
    />
    </section>
}

export default Songs
