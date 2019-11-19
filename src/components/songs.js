import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import 'react-tabulator/lib/styles.css';
import 'react-tabulator/lib/css/tabulator.min.css'; // theme
import { ReactTabulator } from 'react-tabulator'

const Songs = ({ filter = {} }) => {
  const { role } = filter
  const [roleValue, setRoleValue] = useState(role)

  function handleRoleValueChange({ target: { value }}) {
    setRoleValue(value)
  }

  const ref = null

  const audioFormatter = (cell) => {
    const url = cell.getValue()
    if (url) {
      return`<audio
            controls
            src=${cell.getValue()}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>`;
    }
  };

  const tooltipFormatter = (cell) => `${cell.getRow().getData().title} [${cell.getColumn().getField()}]`

  const getColumns = (role) => {
    let columns = [
      { title: 'Title', field: 'title', align: 'left', formatter: 'plaintext', frozen:true },
      { title: 'Ensemble', field: 'ensemble', formatter: audioFormatter },
    ];
    if (!role || role === '' || role === 'all') {
      columns = columns.concat([
        { title: 'Tenor', field: 'tenor', formatter: audioFormatter },
        { title: 'Lead', field: 'lead', formatter: audioFormatter },
        { title: 'Baritone', field: 'baritone', formatter: audioFormatter },
        { title: 'Bass', field: 'bass', formatter: audioFormatter },
      ])
    } else {
      columns.push({ title: role.substr(0, 1).toUpperCase() + role.substr(1), field: role, formatter: audioFormatter })
      if (ref) {
        ref.setData()
      }
    }
    return columns;
  }



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

  // useEffect(() => {
  //   document.title = `You clicked ${role} times`;
  //
  // });

  return <ReactTabulator
    ref={ref => (ref = ref)}
    columns={getColumns(roleValue)}
    data={data.allSongs.nodes}
    tooltips={tooltipFormatter}
    layout={"fitData"}
    responsiveLayout={"collapse"}
    reactiveData={true}
  />
}

export default Songs
