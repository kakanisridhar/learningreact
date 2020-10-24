import React, { useState } from 'react';
import { Input, InputNumber } from 'antd';

export default function Inputs() {
  const [values, setValues] = useState({});
  const handleChange = (event: any) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    event.persist();
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <div>
        Data Bind
        <Input
          placeholder="data bind"
          name="dataBound"
          onChange={handleChange}
        />
      </div>
      <div>
        <InputNumber
          min={1}
          max={10}
          defaultValue={3}
          onChange={handleChange}
          name="cols"
        />
      </div>
      <div>
        <button onClick={() => console.log(values)}> Submit </button>
      </div>
    </div>
  );
}
