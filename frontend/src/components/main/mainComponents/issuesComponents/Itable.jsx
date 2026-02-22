import { Table, TableBody, TableCell, TableRow } from "flowbite-react";
import { Dropdown, DropdownDivider, DropdownItem } from "flowbite-react";
import axios from "axios"
import { useEffect, useState } from "react";
import { BASE_URL, PORT } from "../../../../../variables";


const Itable = () => {
  const [issues, setIssues] = useState([]);
  
  const fetchData = async () => {
    const fetched = await axios(`${BASE_URL}:${PORT}/api/v1/issues/`);
    setIssues(fetched.data.data);
  }
  
  useEffect(() => {
    // data recieved example
    {/*{ _id: ObjectId('698c9f3343a86e1c7bfd5ff7'),
                title: 'direct markets designer',
                description: 'Investor',
                status: 'in-progress',
                priority: 'high',
                assignedTo: null,
                createdAt: ISODate('2026-02-11T15:24:35.016Z'),
                updatedAt: ISODate('2026-02-11T15:24:35.016Z'),
                __v: 0 },*/}
    fetchData()
  }, [])

  return (
    <>
      <Table className='mt-3'>
        <TableBody className='bg-white'>
          {issues.map(issue => {
            return (
              <TableRow key={issue._id} className='border border-gray-300'>
                <TableCell><div className='flex gap-2'><input type="checkbox" />{issue.title}</div></TableCell>
                <TableCell>{issue.description}</TableCell>
                <TableCell>
                  <Dropdown label={issue.status}>
                    <DropdownItem >in-progress</DropdownItem>
                    <DropdownItem>open</DropdownItem>
                    <DropdownItem>done</DropdownItem>
                    <DropdownDivider />
                    <DropdownItem>View Workflow</DropdownItem>
                  </Dropdown>
                </TableCell>
                <TableCell>
                  <Dropdown label={issue.priority}>
                    <DropdownItem >low</DropdownItem>
                    <DropdownItem>medium</DropdownItem>
                    <DropdownItem>high</DropdownItem>
                    <DropdownDivider />
                    <DropdownItem>View Workflow</DropdownItem>
                  </Dropdown>
                </TableCell>
                <TableCell>{issue.createdAt.slice(0, 10)}</TableCell>
                <TableCell>{issue.assignedTo}</TableCell>
              </TableRow>
        )
          })}
      </TableBody>
    </Table >
    </>
  )
}

export default Itable