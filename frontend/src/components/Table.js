import { useEffect, useMemo, useState } from 'react'
import React from 'react'
import styles from './Table.module.css'
import axios from 'axios'
import { useTable } from 'react-table'

const Table = () => {
    const [fetched, setFetched] = useState([])
    const [keys, setKeys] = useState([])
    const [memoColumn, setMemoColumn]= useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/church')
            .then((res) => {
                setFetched(res.data)
                console.log(res.data)
                const key = Object.keys(res.data[0])
                setKeys(key)
            })
            .catch((err) => { console.log(err) })
    }, [])
    useEffect(() => {
        var cols = []
        keys.map((key)=> {
            var obj = {
                Header: key,
                accessor: key,
            }
            cols.push(obj)
        })
        setMemoColumn(cols)
        
    },[keys])
   
    const data = React.useMemo(() => fetched, [fetched])
    const columns = React.useMemo(() => memoColumn, [memoColumn])
   


    const tableInstance = useTable({ columns, data })
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return (
        <div className={styles.container}>

            <table className={styles.table}  {...getTableProps()}>
                <thead className={styles.tableHead} >
                    {// Loop over the header rows
                        headerGroups.map(headerGroup => (
                            // Apply the header row props
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {// Loop over the headers in each row
                                    headerGroup.headers.map(column => (
                                        // Apply the header cell props
                                        <th {...column.getHeaderProps()} className={styles.headItem}>
                                            {// Render the header
                                                column.render('Header')}
                                        </th>
                                    ))}
                            </tr>
                        ))}
                </thead>
                {/* Apply the table body props */}
                <tbody className={styles.tableBody} {...getTableBodyProps()}>
                    {// Loop over the table rows
                        rows.map(row => {
                            // Prepare the row for display
                            prepareRow(row)
                            return (
                                // Apply the row props
                                <tr className={styles.row} {...row.getRowProps()}>
                                    {// Loop over the rows cells
                                        row.cells.map(cell => {
                                            // Apply the cell props
                                            return (
                                                <td {...cell.getCellProps()} className={styles.value}>
                                                    {// Render the cell contents
                                                        cell.render('Cell')}
                                                </td>
                                            )
                                        })}
                                </tr>
                            )
                        })}
                </tbody>
            </table>

        </div>
    )
        // const data = React.useMemo(
    //     () => [
    //       {
    //         col1: 'HelloHelloHelloHelloHelloHelloHelloHello',
    //         col2: 'World',
    //         col3: 'Hello',
    //         col4: 'World',
    //       },
    //       {
    //         col1: 'react-table',
    //         col2: 'rocks',
    //         col3: 'react-table',
    //         col4: 'rocks',
    //       },
    //       {
    //         col1: 'whatever',
    //         col2: 'you want',
    //         col3: 'whatever',
    //         col4: 'you want',
    //       },
    //       {
    //         col1: 'HelloHelloHelloHelloHelloHelloHelloHello',
    //         col2: 'World',
    //         col3: 'Hello',
    //         col4: 'World',
    //       },
    //       {
    //         col1: 'react-table',
    //         col2: 'rocks',
    //         col3: 'react-table',
    //         col4: 'rocks',
    //       },
    //       {
    //         col1: 'whatever',
    //         col2: 'you want',
    //         col3: 'whatever',
    //         col4: 'you want',
    //       },
    //       {
    //         col1: 'HelloHelloHelloHelloHelloHelloHelloHello',
    //         col2: 'World',
    //         col3: 'Hello',
    //         col4: 'World',
    //       },
    //       {
    //         col1: 'react-table',
    //         col2: 'rocks',
    //         col3: 'react-table',
    //         col4: 'rocks',
    //       },
    //       {
    //         col1: 'whatever',
    //         col2: 'you want',
    //         col3: 'whatever',
    //         col4: 'you want',
    //       },
    //       {
    //         col1: 'HelloHelloHelloHelloHelloHelloHelloHello',
    //         col2: 'World',
    //         col3: 'Hello',
    //         col4: 'World',
    //       },
    //       {
    //         col1: 'react-table',
    //         col2: 'rocks',
    //         col3: 'react-table',
    //         col4: 'rocks',
    //       },
    //       {
    //         col1: 'whatever',
    //         col2: 'you want',
    //         col3: 'whatever',
    //         col4: 'you want',
    //       },
    //       {
    //         col1: 'HelloHelloHelloHelloHelloHelloHelloHello',
    //         col2: 'World',
    //         col3: 'Hello',
    //         col4: 'World',
    //       },
    //       {
    //         col1: 'react-table',
    //         col2: 'rocks',
    //         col3: 'react-table',
    //         col4: 'rocks',
    //       },
    //       {
    //         col1: 'whatever',
    //         col2: 'you want',
    //         col3: 'whatever',
    //         col4: 'you want',
    //       },
    //       {
    //         col1: 'HelloHelloHelloHelloHelloHelloHelloHello',
    //         col2: 'World',
    //         col3: 'Hello',
    //         col4: 'World',
    //       },
    //       {
    //         col1: 'react-table',
    //         col2: 'rocks',
    //         col3: 'react-table',
    //         col4: 'rocks',
    //       },
    //       {
    //         col1: 'whatever',
    //         col2: 'you want',
    //         col3: 'whatever',
    //         col4: 'you want',
    //       },
    //       {
    //         col1: 'HelloHelloHelloHelloHelloHelloHelloHello',
    //         col2: 'World',
    //         col3: 'Hello',
    //         col4: 'World',
    //       },
    //       {
    //         col1: 'react-table',
    //         col2: 'rocks',
    //         col3: 'react-table',
    //         col4: 'rocks',
    //       },
    //       {
    //         col1: 'whatever',
    //         col2: 'you want',
    //         col3: 'whatever',
    //         col4: 'you want',
    //       },
    //     ],
    //     []
    //   )
    //   const columns = React.useMemo(
    //     () => [
    //       {
    //         Header: 'Column 1',
    //         accessor: 'col1', // accessor is the "key" in the data
    //       },
    //       {
    //         Header: 'Column 2',
    //         accessor: 'col2',
    //       },
    //       {
    //         Header: 'Column 3',
    //         accessor: 'col3', // accessor is the "key" in the data
    //       },
    //       {
    //         Header: 'Column 4',
    //         accessor: 'col4',
    //       },
    //     ],
    //     []
    //   )


}

export default Table