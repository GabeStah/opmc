import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import 'react-tabulator/lib/styles.css';
import 'react-tabulator/lib/css/tabulator.min.css'; // theme
import { ReactTabulator } from 'react-tabulator'

const Songs = ({ role }) => {
  const [roleValue, setRoleValue] = useState(role)
  const [tableValue, setTableValue] = useState()

  const data = useStaticQuery(graphql`
      query SongQuery {
          allSongs {
              nodes {
                  id
                  baritone
                  bass
                  ensemble
                  lead
                  tenor
                  title
              }
          }
      }
  `)

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

  const getFilters = () => {
    if (roleValue && roleValue !== 'all') {
      return [
        {field: roleValue, type: '!=', value: ''}
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
        <Link to={"/music#tenor"} >Tenor</Link>
      </li>
      <li style={{ display: `inline-block`, marginRight: `1rem` }} onClick={() => {handleRoleValueChange('baritone')}}>
        <Link to={"/music#baritone"} >Baritone</Link>
      </li>
      <li style={{ display: `inline-block`, marginRight: `1rem` }} onClick={() => {handleRoleValueChange('bass')}}>
        <Link to={"/music#bass"} >Bass</Link>
      </li>
    </ul>
    <ReactTabulator
      ref={ref => (ref = setTableValue(ref))}
      columns={columnsValue}
      data={data.allSongs.nodes}
      tooltips={tooltipFormatter}
      initialFilter={getFilters()}
      // layout={"fitData"}
      responsiveLayout={"collapse"}
      reactiveData={true}
      persistentSort={true}
      persistentLayout={true}
    />
    </section>
}

export default Songs
