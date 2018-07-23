import uuidv4 from 'uuid';
import { QuestionTypeCodes } from './constant';

const QuestionTypes = [
  { text: 'Multiple Choice', value: QuestionTypeCodes.MULTIPLE_CHOICE },
  { text: 'Dropdown', value: QuestionTypeCodes.DROPDOWN },
  { text: 'Checkboxes', value: QuestionTypeCodes.CHECKBOXES },
  { text: 'Star Rating', value: QuestionTypeCodes.STAR_RATING },
  { text: 'Ranking', value: QuestionTypeCodes.RANKING },
  { text: 'Single Textbox', value: QuestionTypeCodes.SINGLE_TEXTBOX },
  { text: 'Slider', value: QuestionTypeCodes.SLIDER },
  { text: 'Comment Box', value: QuestionTypeCodes.COMMENT_BOX },
  { text: 'Multiple Textbox', value: QuestionTypeCodes.MULTIPLE_TEXTBOX },
  { text: 'Date / Time', value: QuestionTypeCodes.DATE_TIME }
];

const DefaultMultipleChoiceOptions = [
  { id: uuidv4(), text: 'foo' },
  { id: uuidv4(), text: 'bar' },
  { id: uuidv4(), text: 'baz' }
];

export { QuestionTypes, DefaultMultipleChoiceOptions };
