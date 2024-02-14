import { Tag } from "@chakra-ui/react";
import React from "react";
export const DietTag = ({ children, ...props }) => {
  return (
    <Tag
      size="sm"
      bgColor="#C6F6D5"
      color="#1C4532"
      textTransform="uppercase"
      fontSize="xs"
      {...props}
    >
      {children}
    </Tag>
  );
};
