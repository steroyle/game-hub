import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface ExpandableTextProps {
  children: string;
}

const ExpandableText = ({ children }: ExpandableTextProps) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) {
    return <Text>{children}</Text>;
  }

  const summary = expanded
    ? children
    : children
      .substring(0, limit)
      .replace(/\s*$/, '') // remove the last character if it is a space
      + '...';

  return (
    <>
      <Text>{summary}</Text>
      <Button
        onClick={() => setExpanded(prevStat => !prevStat)}
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        mt={3}
      >
        {expanded ? 'Show less' : 'Show more'}
      </Button>
    </>
  )
}

export default ExpandableText;