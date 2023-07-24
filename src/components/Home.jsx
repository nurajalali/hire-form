import { Search, Stack, Grid, Column, Button } from "@carbon/react";
import DataTable from "./DataTable";
import PopUp from "./PopUp";
import { Add } from "@carbon/icons-react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const Home = () => {
  const isOpen = useSelector((store) => store.FormModels.isOpen);
  const dispatch = useDispatch();
  const [data, setData] = useState();

  const togglePopup = () => {
    dispatch.FormModels.openForm(!isOpen);
  };
  return (
    <div>
      <Stack gap={8}>
        <Grid>
          <Column lg={{ span: 8, start: 4 }}>
            <Search
              size="lg"
              placeholder="Find your items"
              labelText="Search"
              closeButtonLabelText="Clear search input"
              id="search-1"
            />
          </Column>
          <Column>
            <Button
              hasIconOnly
              iconDescription="Icon Description"
              renderIcon={Add}
              onClick={togglePopup}
            />
          </Column>
        </Grid>
        <DataTable setData={setData} />
        {isOpen ? <PopUp data={data} /> : null}
      </Stack>
    </div>
  );
};

export default Home;
