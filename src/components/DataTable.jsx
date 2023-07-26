import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Button,
} from "@carbon/react";
import { useSelector, useDispatch } from "react-redux";

const DataTable = ({ setFormEditing, searchValue }) => {
  const rows = useSelector((store) => store.FormModels.rows);
  const isOpen = useSelector((store) => store.FormModels.isOpen);

  const dispatch = useDispatch();

  const handleDelet = (id) => {
    dispatch.FormModels.RemoveRow(id);
    console.log("delet", id);
  };

  const handleEdit = (id) => {
    dispatch.FormModels.isEdit();
    dispatch.FormModels.openForm(!isOpen);
    setFormEditing(id);
    // const updateRowTable = rows.map((row) => {
    //   if (row.id === id) {
    //     console.log(row.FirstName);
    //   }
    // });
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>FirstName</TableHeader>
          <TableHeader>LastName</TableHeader>
          <TableHeader>ID</TableHeader>
          <TableHeader>Status</TableHeader>
          <TableHeader>BirthDate</TableHeader>
          <TableHeader></TableHeader>
          <TableHeader></TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => {
          const rowData = (
            <TableRow key={row.rowId}>
              <TableCell>{row.FirstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.personalId}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.BirthDate}</TableCell>
              <TableCell>
                <Button kind="ghost" onClick={() => handleDelet(row.rowId)}>
                  Delet
                </Button>
              </TableCell>
              <TableCell>
                <Button kind="ghost" onClick={() => handleEdit(row.rowId)}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          );
          if (searchValue === "") {
            return rowData;
          } else if (row.FirstName.includes(searchValue)) {
            return rowData;
          }
        })}
      </TableBody>
    </Table>
  );
};

export default DataTable;
