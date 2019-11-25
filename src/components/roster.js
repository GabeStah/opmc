import React from "react"
import Tabulator from "tabulator-tables"
import "react-tabulator/lib/styles.css"
import "react-tabulator/lib/css/tabulator.min.css" // theme
import _ from "lodash"

class Roster extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: "",
    }

    this.handleChange = this.handleChange.bind(this)
    this.search = this.search.bind(this)

    // Debounce
    this.search = _.debounce(this.search, 400)
  }

  el = React.createRef()

  tabulator = null

  addressFormatter = cell => {
    const address = cell.getValue()
    if (address) {
      // console.log(encodeURI(address))
      const searchUrl = `https://www.google.com/maps/search/${encodeURI(
        address
      )}`
      return `<a class="w-full h-8 inline-block mx-auto hover:text-blue-400" target="_blank"
            href=${searchUrl}>${address}
          </a>`
    }
  }

  emailFormatter = cell => {
    const email = cell.getValue()
    if (email) {
      return `<a class="w-full h-8 inline-block mx-auto hover:text-blue-400" target="_blank"
            href=mailto:${email}>${email}
          </a>`
    }
  }

  handleChange(e) {
    this.setState({
      searchText: e.target.value,
    })

    // It's debounced!
    this.search()
  }

  search() {
    if (this.state.searchText) {
      this.tabulator.setFilter([
        [
          { field: "firstname", type: "like", value: this.state.searchText },
          { field: "lastname", type: "like", value: this.state.searchText },
          { field: "spouse", type: "like", value: this.state.searchText },
          { field: "email", type: "like", value: this.state.searchText },
        ],
      ])
    } else {
      this.tabulator.clearFilter(true)
    }
  }

  tooltipFormatter = cell =>
    `${cell.getRow().getData().firstname} ${cell.getRow().getData().lastname}`

  getColumns = () => {
    return [
      {
        title: "Part",
        field: "part",
        align: "left",
        frozen: true,
        responsive: 0,
      },
      {
        title: "First Name",
        field: "firstname",
        align: "left",
        frozen: true,
        responsive: 0,
      },
      {
        title: "Last Name",
        field: "lastname",
        align: "left",
        responsive: 4,
      },
      {
        title: "Spouse",
        field: "spouse",
        responsive: 5,
      },
      {
        title: "Address",
        field: "address",
        responsive: 6,
        formatter: this.addressFormatter,
      },
      {
        title: "Phone",
        field: "phone",
        responsive: 7,
      },
      {
        title: "Cell",
        field: "cell",
        responsive: 8,
      },
      {
        title: "Email",
        field: "email",
        formatter: this.emailFormatter,
        responsive: 0,
      },
      {
        title: "Active",
        field: "active",
        responsive: 3,
        headerFilter: "select",
        headerFilterParams: {
          yes: "Yes",
          no: "No",
        },
      },
    ]
  }

  componentDidMount() {
    //instantiate Tabulator when element is mounted
    this.tabulator = new Tabulator(this.el, {
      data: this.props.roster || [], //link data to table
      columns: this.getColumns(), //define table columns
      responsiveLayout: "collapse",
      tooltips: this.tooltipFormatter,
      layout: "fitColumns",
      layoutColumnsOnNewData: true,
      pagination: "local", //enable local pagination.
      paginationSize: 20,
      columnMinWidth: 100,
    })

    // this.updateColumns({ role: this.props.role })

    this.tabulator.redraw()
  }

  getFilters = ({ role }) => {
    if (role && role !== "all") {
      return [{ field: role, type: "!=", value: "" }]
    }
  }

  updateFilters = ({ role, table }) => {
    table.clearFilter(true)
    if (role && role !== "all") {
      table.setFilter(role, "!=", "")
    }
  }

  // updateColumns = ({ role }) => {
  //   // Toggle columns.
  //   const columns = this.tabulator.getColumns()
  //   const defaultColumns = ["title", "tags"]
  //   if (role && role !== "all") {
  //     columns.forEach(column => {
  //       if (
  //         !defaultColumns.includes(column.getField()) &&
  //         column.getField() !== role
  //       ) {
  //         column.hide()
  //       } else {
  //         column.show()
  //       }
  //     })
  //   } else {
  //     columns.forEach(column => column.show())
  //   }
  // }

  handleRoleValueChange({ role }) {
    // this.updateColumns({ role })

    // Redraw to properly resize columns
    this.tabulator.redraw()
  }

  buttonClassName =
    "inline-block bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mx-1 border border-blue-500 hover:border-transparent rounded"

  render() {
    // const elements = ["all", "ensemble", "lead", "tenor", "baritone", "bass"]
    return (
      <section className={"bg-white rounded-t-lg overflow-hidden py-2"}>
        <ul className={"py-4 ml-0"}>
          {/*{elements.map((value, index) => {*/}
          {/*  return (*/}
          {/*    <button*/}
          {/*      className={this.buttonClassName}*/}
          {/*      key={value}*/}
          {/*      onClick={() => {*/}
          {/*        this.handleRoleValueChange({*/}
          {/*          role: value,*/}
          {/*          table: this.tabulator,*/}
          {/*        })*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      <Link to={`/music${value === "all" ? "" : `#${value}`}`}>*/}
          {/*        {value.substr(0, 1).toUpperCase() + value.substring(1)}*/}
          {/*      </Link>*/}
          {/*    </button>*/}
          {/*  )*/}
          {/*})}*/}
          <li className={"inline-block px-1"}>
            <form>
              <input
                placeholder={"Search"}
                type={"search"}
                className={
                  "flex-1 bg-gray-200 hover:bg-white hover:border-gray-300 focus:outline-none focus:bg-white focus:shadow-outline focus:border-gray-300 appearance-none border border-transparent rounded w-full py-2 px-4 text-gray-700 leading-tight "
                }
                onChange={this.handleChange}
                value={this.state.searchText}
              />
            </form>
          </li>
        </ul>
        <div ref={el => (this.el = el)} />
      </section>
    )
  }
}

export default Roster
