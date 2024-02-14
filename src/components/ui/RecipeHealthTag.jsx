import { Tag } from "@chakra-ui/react";
import React from "react";
export const HealthTag = ({ children, ...props }) => {
  return (
    <Tag
      size="sm"
      bgColor="#E9D8FD"
      color="#44337A"
      textTransform="uppercase"
      fontSize="xs"
      {...props}
    >
      {children}
    </Tag>
  );
};
