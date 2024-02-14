import { Tag } from "@chakra-ui/react";
import React from "react";
export const CautionTag = ({ children, ...props }) => {
  return (
    <Tag
      size="sm"
      bgColor="#FED7D7"
      color="#822727"
      textTransform="uppercase"
      fontSize="xs"
      {...props}
    >
      {children}
    </Tag>
  );
};
