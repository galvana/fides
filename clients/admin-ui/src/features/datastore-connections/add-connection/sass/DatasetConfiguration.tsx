import { Box, VStack } from "@fidesui/react";
import { capitalize } from "common/utils";
import React from "react";

import { ConnectionSystemTypeMap } from "~/types/api";

import { STEPS } from "../constants";
import { AddConnectionStep } from "../types";

type DatasetConfigurationProps = {
  connectionOption: ConnectionSystemTypeMap;
  currentStep: AddConnectionStep;
};

const DatasetConfiguration: React.FC<DatasetConfigurationProps> = ({
  connectionOption,
  currentStep = STEPS.filter((s) => s.stepId === 3)[0],
}) => (
  <VStack align="stretch">
    <Box color="gray.700" fontSize="14px" h="80px" w="475px">
      {currentStep.description?.replace(
        "{identifier}",
        capitalize(connectionOption.identifier)
      )}
    </Box>
  </VStack>
);

export default DatasetConfiguration;
