import React from "react";
import { Flex } from "theme-ui";

export const Badge: React.FC = ({ children }) => {
  return (
    <Flex variant="layout.badge" sx={{ width: "fit-content" }}>
      {children}
    </Flex>
  );
};
