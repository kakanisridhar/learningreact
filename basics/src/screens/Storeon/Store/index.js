import { createStoreon } from 'storeon';
import count from './count';
import notes from './note';

const store = createStoreon([count, notes]);

export default store;
