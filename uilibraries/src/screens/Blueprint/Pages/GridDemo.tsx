import styles from './Grid.scss';
import React, { ReactElement, useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FormGroup, RadioGroup, Radio, InputGroup } from '@blueprintjs/core';

interface Props {}

function PersonForm() {
  return (
    <>
      <FormGroup
        helperText="Helper text with details..."
        label="Label A"
        labelFor="text-input"
        labelInfo="(required)"
      >
        <InputGroup id="text-input" placeholder="Placeholder text" />
      </FormGroup>
    </>
  );
}

function AddressForm() {
  const [selected, setSelected] = useState('three');
  const handleMealChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    setSelected(e.currentTarget.value);
  };

  return (
    <>
      <RadioGroup
        label="Meal Choice"
        onChange={handleMealChange}
        selectedValue={selected}
      >
        <Radio label="Soup" value="one" />
        <Radio label="Salad" value="two" />
        <Radio label="Sandwich" value="three" />
      </RadioGroup>
    </>
  );
}

function GridDemo({}: Props): ReactElement {
  return (
    <Grid fluid>
      <Row className={styles.grid_demo}>
        <Col xs={12} sm={3} md={2} lg={1}>
          Side Menu
        </Col>
        <Col xs={6} sm={6} md={8} lg={10}>
          <Row middle="xs">
            <Col xs>
              <PersonForm />
            </Col>
            <Col xs>
              <AddressForm></AddressForm>
            </Col>
          </Row>
        </Col>
        <Col xs={6} sm={3} md={2} lg={1}>
          Right Menu
        </Col>
      </Row>
    </Grid>
  );
}

export default GridDemo;
