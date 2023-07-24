import {
  unstable__FluidTextInput as FluidTextInput,
  DatePicker,
  DatePickerInput,
  Button,
  Dropdown,
  Grid,
  Column,
} from "@carbon/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PopUp = ({ data }) => {
  const [FirstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ID, setID] = useState();
  const [BirthDay, setBirthDay] = useState();
  const [status, setStatus] = useState();
  const isEdit = useSelector((store) => store.FormModels.isEdit);
  const editedRow = useSelector((store) =>
    store.FormModels.rows.find((item) => item.id === data)
  );

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
    const newRow = {
      id: Math.random(),
      FirstName: FirstName,
      lastName: lastName,
      personalId: ID,
      BirthDate: BirthDay,
      status: status,
    };
    dispatch.FormModels.addNewRows(newRow);
  };

  return (
    <>
      <h1>{data}</h1>
      <h2>{JSON.stringify(editedRow)}</h2>
      <Grid narrow>
        <Column lg={4}>
          <FluidTextInput
            labelText="FisrtName"
            value={isEdit ? editedRow?.FirstName : ""}
            placeholder="example: nura"
            id="input-1"
            onChange={handleFN}
          />
        </Column>
        <Column lg={4}>
          <FluidTextInput
            labelText="LastName"
            placeholder="example: jalali"
            value={isEdit ? editedRow?.lastName : ""}
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
            value={isEdit ? editedRow?.personalId : ""}
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
              id="date-picker-single"
              value={!isEdit ? editedRow?.BirthDay : ""}
              size="md"
              onInput={handleDate}
            />
          </DatePicker>
        </Column>
      </Grid>
      <Grid>
        <Column lg={4}>
          <Dropdown
            id="default"
            titleText="Status"
            label="choose your status"
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
