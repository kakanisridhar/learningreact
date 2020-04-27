import { createMachine, assign } from 'xstate';
import { Client, Address } from './Model';

interface AppContext {
  client?: Client;
  address?: Address;
}

type AppState =
  | {
      value: 'client';
      context: AppContext;
    }
  | {
      value: 'address';
      context: AppContext;
    }
  | {
      value: 'submitted';
      context: AppContext;
    };

type AppEvent =
  | {
      type: 'save-client';
      value: Client;
    }
  | { type: 'SUBMIT'; value: Address };

export const appMachine = createMachine<AppContext, AppEvent, AppState>(
  {
    id: 'memberdetailsflow',
    initial: 'client',
    context: {
      client: { name: '' },
      address: { postCode: '' },
    },
    states: {
      client: {
        on: {
          'save-client': {
            target: 'address',
            actions: assign({
              client: (_, event) => event.value,
            }),
          },
          SUBMIT: {
            target: 'submitted',
            actions: assign({
              address: (_, event) => event.value,
            }),
          },
        },
      },
      address: {
        on: {
          SUBMIT: {
            target: 'submitted',
            actions: assign({
              address: (_, event) => event.value,
            }),
          },
        },
      },
      submitted: {
        type: 'final',
        entry: 'logtoconsole',
      },
    },
  },
  {
    actions: {
      logtoconsole: (context, event) => {
        console.log('context=' + JSON.stringify(context));
      },
    },
  }
);
