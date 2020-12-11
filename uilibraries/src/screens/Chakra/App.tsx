import React from 'react';
import { normalize, schema } from 'normalizr';
import {
  Flex,
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  Textarea,
  Button,
  Text,
  SimpleGrid,
  Box
} from '@chakra-ui/core';

interface Props {}

const widget = new schema.Entity('widgets');
export const screen = new schema.Entity('screens', {
  widgets: [widget]
});

function App() {
  let [value, setValue] = React.useState('');
  let [norm, setNorm] = React.useState('');

  let handleInputChange = e => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  let handleNormalize = e => {
    const normalized = normalize(JSON.parse(value), screen);
    setNorm(JSON.stringify(normalized.entities));
  };

  return (
    <ThemeProvider>
      <ColorModeProvider>
        <Flex direction="column">
          <SimpleGrid columns={3} w="100%" spacing="40px">
            <Box>
              <Textarea
                placeholder="Enter api response"
                value={value}
                onChange={handleInputChange}
                size="md"
              />
            </Box>
            <Box>
              <Textarea
                placeholder="Normalized data"
                size="md"
                value={norm}
                isReadOnly
              />
            </Box>
          </SimpleGrid>
          <Box>
            <Button variant="outline" onClick={handleNormalize}>
              Normalize
            </Button>
          </Box>
        </Flex>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
