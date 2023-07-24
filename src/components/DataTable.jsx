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

const DataTable = ({ setData }) => {
  const rows = useSelector((store) => store.FormModels.rows);
  const isOpen = useSelector((store) => store.FormModels.isOpen);
  const isEdit = useSelector((store) => store.FormModels.isEdit);
  const dispatch = useDispatch();

  const handleDelet = (id) => {
    dispatch.FormModels.RemoveRow(id);
  };

  const handleEdit = (id) => {
    dispatch.FormModels.editForm(!isEdit);
    dispatch.FormModels.openForm(!isOpen);
    setData(id)
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
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.FirstName}</TableCell>
            <TableCell>{row.lastName}</TableCell>
            <TableCell>{row.personalId}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>{row.BirthDate}</TableCell>
            <TableCell>
              <Button kind="ghost" onClick={() => handleDelet(row.id)}>
                Delet
              </Button>
            </TableCell>
            <TableCell>
              <Button kind="ghost" onClick={() => handleEdit(row.id)}>
                Edit
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
