import { Box, Flex, Textarea } from "@chakra-ui/react";
import useInputState from "../../../hooks/useInputState";

import Header from "../../../components/ui/Header/Header";
import ComboBox from "../../../components/Inputs/ComboBox";
import InputText from "../../../components/Inputs/InputText";
import SelectInput from "../../../components/Inputs/SelectInput";
import EventButton from "../../../components/Buttons/EventButton";
import DynamicTable from "../../../components/Tables/DynamicTable";
import useFetchTableData from "../../../hooks/fetch/useFetchTableData";
import { btnStyles, conteiner, flex, inputconteiner, tableconteiner, textArea } from "../styles/finalizationStyles";
import FlexLayout from "../../../components/ui/Flex/Flex";

export default function Finalization() {
  const { headerData, bodyData } = useFetchTableData("/data/tableData.json");
  const { value: selectedValue, handleChange: handleSelectChange } = useInputState<string | null>(null);
  const { value: checkedValues, handleChange: handleCheckboxChange } = useInputState<string[]>([]);

  return (
    <FlexLayout defaultOpen={2} navigationType="Accordion">
      <Header text="Review Finalization" />
      <Flex sx={flex}>
        <Box sx={conteiner} ml={"2rem"}>
          <Box sx={inputconteiner}>
            <InputText type="search" placeholder="Insert article's name" nome="search" />
            <SelectInput
              names={["", "Accepted", "Duplicated", "Rejected", "Unclassified"]}
              values={["", "Accepted", "Duplicated", "Rejected", "Unclassified"]}
              onSelect={handleSelectChange}
              selectedValue={selectedValue}
              page={""}
            />
            <ComboBox
              options={headerData}
              handleCheckboxChange={handleCheckboxChange}
              selectedItems={[
                "title",
                "author",
                "year",
                "status/selection",
                "status/extraction",
                "reading priority",
                "score",
              ]}
              text={"filter options"}
            />
          </Box>
        </Box>
      </Flex>
      <Box sx={tableconteiner} ml={"2em"} mr={"2em"} w={"78vw"}>
        <DynamicTable
          headerData={headerData}
          bodyData={bodyData}
          filteredColumns={checkedValues}
          tableType={"selection"}
        />
        <Textarea sx={textArea} placeholder="Write stuff here..."></Textarea>
        <Flex justifyContent="flex-end">
          <EventButton
            sx={btnStyles}
            text={"Export"}
            event={function (): void {
              console.log("Export the Review!");
            }}
          />
        </Flex>
      </Box>
    </FlexLayout>
  );
}
