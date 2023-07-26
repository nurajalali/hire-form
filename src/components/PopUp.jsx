import {
  unstable__FluidTextInput as FluidTextInput,
  DatePicker,
  DatePickerInput,
  Button,
  Dropdown,
  Grid,
  Column,
} from "@carbon/react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const PopUp = ({ formEditing }) => {
  const [FirstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ID, setID] = useState();
  const [BirthDay, setBirthDay] = useState();
  const [status, setStatus] = useState();
  const counter = useSelector((store) => store.FormModels.counter);
  const isEdit = useSelector((store) => store.FormModels.isEdit);
  const editedRow = useSelector((store) =>
    store.FormModels.rows.find((item) => item.rowId === formEditing)
  );
  
  useEffect(() => {
    if (isEdit) {
      setFirstName(editedRow.FirstName);
      setLastName(editedRow.lastName);
      setBirthDay(editedRow.BirthDate);
      setID(editedRow.personalId);
      setStatus(editedRow.status);
    }
  }, []);

  const dispatch = useDispatch();

  const handleFN = (e) => {
    setFirstName(e.target.value);
  };
  const handleLN = (e) => {
    setLastName(e.target.value);
  };
  const handleID = (e) => {
    setID(e.target.value);
  };
  const handleDate = (e) => {
    console.log(e);

    setBirthDay(e.target.value);
  };
  const handleStatus = (e) => {
    setStatus(e.selectedItem);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch.FormModels.newCounter();
    const newRow = {
      FirstName: FirstName,
      lastName: lastName,
      personalId: ID,
      BirthDate: BirthDay,
      status: status,
    };
    if (isEdit) {
      console.log("form editing is", formEditing);
      console.log(newRow);
      dispatch.FormModels.updateRowTable({ ...newRow, rowId: formEditing });
    } else {
      dispatch.FormModels.addNewRows({ ...newRow, rowId: counter });
    }
  };
  return (
    <>
      <Grid narrow>
        <Column lg={4}>
          <FluidTextInput
            labelText="FisrtName"
            type="text"
            value={FirstName}
            placeholder="example: nura"
            id="input-1"
            onChange={handleFN}
          />
        </Column>
        <Column lg={4}>
          <FluidTextInput
            labelText="LastName"
            value={lastName}
            placeholder="example: jalali"
            id="input-1"
            onChange={handleLN}
          />
        </Column>
      </Grid>
      <Grid>
        <Column lg={4}>
          <FluidTextInput
            labelText="ID number"
            placeholder="0082689762"
            value={ID}
            id="input-1"
            onChange={handleID}
          />
        </Column>
        <Column>
          <DatePicker
            datePickerType="single"
            value="07/15/1988"
            dateFormat="d/m/Y"
          >
            <DatePickerInput
              placeholder="dd/mm/yyyy"
              labelText="BirthDay"
              value={BirthDay}
              id="date-picker-single"
              size="md"
              onInput={handleDate}
            />
          </DatePicker>
        </Column>
      </Grid>
      <Grid>
        <Column lg={4}>
          <Dropdown
            titleText="Status"
            label="choose your status"
            value={status}
            size="lg"
            items={["Pending", "Accepted", "Rejected"]}
            onChange={handleStatus}
          />
        </Column>
      </Grid>
      <Grid>
        <Column>
          <Button onClick={handleSubmit}>Sumbit</Button>
        </Column>
      </Grid>
    </>
  );
};

export default PopUp;
