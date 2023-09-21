import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  const maxChars = 300;

  if (!children) return null;

  if (children.length <= maxChars) return <Text>{children}</Text>;

  const summary = isExpanded
    ? children.substring(0, maxChars) + "..."
    : children;
  return (
    <Text>
      {summary}
      <Button
        size="xs"
        marginLeft={1}
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded(!isExpanded)}
      >
        {isExpanded ? "Read more" : "Read less"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
