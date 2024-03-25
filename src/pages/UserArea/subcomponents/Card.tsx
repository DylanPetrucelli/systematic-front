import CardIcon from "./CardIcon";
import CardInfos from "./CardInfos";
import EditionInfos from "./EditionInfos";
import { Box, Card } from "@chakra-ui/react";
import EnterRevisionButton from "./EnterRevisionButton";
import { conteiner, infoconteiner } from "../styles/CardStyles";

interface iRevisionCardProps {
  title: string;
  RevisorNames: string[];
  lastEdition: string;
  creation: string;
  isEdited: boolean;
}

export default function RevisionCard({ title, RevisorNames, lastEdition, creation, isEdited }: iRevisionCardProps) {
  return (
    <>
      <Card sx={conteiner}>
        <CardIcon />
        <CardInfos title={title} RevisorNames={RevisorNames} />
        <Box sx={infoconteiner}>
          <EnterRevisionButton text="Ver Revisão" />
          <EditionInfos lastEdition={lastEdition} creation={creation} isEdited={isEdited} />
        </Box>
      </Card>
    </>
  );
}
