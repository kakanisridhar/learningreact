import React, { useState } from 'react';

export default function State() {
  const [fn, setFn] = useState('');
  const [ln, setLn] = useState('');
  const [comPref, setComPref] = useState(
    new Map([
      ['Email', true],
      ['Telephone', false],
      ['Post', false]
    ])
  );

  const handleComPrefChange = e => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    comPref.set(item, isChecked);
    setComPref(new Map(comPref));
  };

  return (
    <div>
      <p>
        useState takes initial state and returns array of reference to state and
        setter function when invoking setter function remember to return a new
        object otherwise re rendering will not happen
      </p>
      <div>
        <input
          type="text"
          name="firstName"
          defaultValue={fn}
          placeholder="Enter First name"
          onChange={e => setFn(e.target.value)}
        ></input>
      </div>
      <div>
        <input
          type="text"
          name="lastName"
          defaultValue={ln}
          placeholder="Enter Last name"
          onChange={e => setLn(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="Email">Email</label>
        <input
          type="checkbox"
          name="Email"
          checked={comPref.get('Email')}
          onChange={handleComPrefChange}
        ></input>
        <label htmlFor="Post">Post</label>
        <input
          type="checkbox"
          name="Post"
          checked={comPref.get('Post')}
          onChange={handleComPrefChange}
        ></input>
      </div>
      <hr></hr>
      {fn} - {ln}
    </div>
  );
}
