import React, { useState } from 'react';
import { useMachine } from '@xstate/react';
import { appMachine } from './appMachine';
import { Client, Address } from './Model';

interface ClientFormProps {
  onNext: (client: Client) => void;
}

interface AddressFormProps {
  onSubmit: (address: Address) => void;
}

function ClientForm(props: ClientFormProps) {
  const [client, setClient] = useState<Client>({ name: '' });
  return (
    <>
      <div>
        <span>Full name</span>
        <input
          type="text"
          name="name"
          value={client.name}
          onChange={e => setClient({ name: e.target.value })}
          placeholder="Enter your full name"
          style={{ width: 300 }}
        ></input>
      </div>

      <div>
        <input
          type="button"
          value="Next"
          onClick={_e => props.onNext(client)}
        ></input>
      </div>
    </>
  );
}

function AddressForm(props: AddressFormProps) {
  const [address, setAddress] = useState<Address>({ postCode: '' });
  let handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({ postCode: e.target.value });
  };
  return (
    <>
      <div>
        <span>Post Code</span>
        <input
          type="text"
          name="name"
          onChange={e => setAddress({ postCode: e.target.value })}
          placeholder="Enter your post code"
          style={{ width: 300 }}
        ></input>
      </div>
      <div>
        <input
          onClick={_e => props.onSubmit(address)}
          type="button"
          value="Submit"
          style={{ width: 300 }}
        ></input>
      </div>
    </>
  );
}

export default function Lesson1() {
  const [current, send] = useMachine(appMachine);
  if (current.matches('client'))
    return (
      <ClientForm onNext={value => send('save-client', { value })}></ClientForm>
    );
  else if (current.matches('address'))
    return (
      <AddressForm onSubmit={value => send('SUBMIT', { value })}></AddressForm>
    );
  else return <div>Submitted to server</div>;
}
