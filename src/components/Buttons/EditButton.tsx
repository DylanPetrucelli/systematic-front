import { EditIcon } from "@chakra-ui/icons";
import { Button, Icon } from "@chakra-ui/react";
import 'primeicons/primeicons.css';
        

interface editButtonProps {
  editIndex: number | null;
  index: number;
  handleSaveEdit: () => void;
  handleEdit: (index: number) => void;
  itemDescription: String;
  itemType: String
}

export default function EditButton({ 
  editIndex, 
  index, 
  handleSaveEdit, 
  handleEdit, 
  itemDescription,
  itemType }: editButtonProps) {
    
  return (
    <>
      {editIndex === index && itemDescription !== "" && itemType !== "" ? (
        <Button variant="ghost" onClick={handleSaveEdit}>
          <i className="pi pi-save" style={{ color: 'black' }}></i>
        </Button>
      ) : (
        <Button variant="ghost" onClick={() => handleEdit(index)}>
          <Icon as={EditIcon} w={"15px"} h={"15px"} />
        </Button>
      )}{" "}
    </>
  );
}
