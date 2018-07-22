//@flow
import uuidv4 from 'uuid';

const DefaultMultipleChoiceOptions = [
  { id: uuidv4(), text: 'foo' },
  { id: uuidv4(), text: 'bar' },
  { id: uuidv4(), text: 'baz' }
];

export { DefaultMultipleChoiceOptions };
