import { Search, Stack, Grid, Column, Button } from "@carbon/react";
import DataTable from "./DataTable";
import PopUp from "./PopUp";
import { Add } from "@carbon/icons-react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useRef } from "react";

const Home = () => {
  const isOpen = useSelector((store) => store.FormModels.isOpen);
  const dispatch = useDispatch();

  const [formEditing, setFormEditing] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const searchRef = useRef(null);

  const togglePopup = () => {
    dispatch.FormModels.isNotEdit();
    dispatch.FormModels.openForm(!isOpen);
  };

  const handleSearch = () => {
    console.log(searchRef.current.value);
    setSearchValue(searchRef.current.value);
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
              ref={searchRef}
              onChange={handleSearch}
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
        <DataTable setFormEditing={setFormEditing} searchValue={searchValue} />
        {isOpen ? <PopUp formEditing={formEditing} /> : null}
      </Stack>
    </div>
  );
};

export default Home;
