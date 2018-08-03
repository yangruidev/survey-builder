import uuidv4 from 'uuid';
import { QuestionTypeCodes } from './components/SurveyEditor/models/constant';
//@flow
const loadComboList = () => {
  return [
    {
      id: uuidv4(),
      question: {
        text: 'Do you feel get too much exercise?',
        type: QuestionTypeCodes.MULTIPLE_CHOICE
      },
      options: {
        type: QuestionTypeCodes.MULTIPLE_CHOICE,
        value: [
          {
            id: uuidv4(),
            text: 'Too much'
          },
          {
            id: uuidv4(),
            text: 'About right amount'
          },
          {
            id: uuidv4(),
            text: 'Too little'
          }
        ]
      }
    },
    {
      id: uuidv4(),
      question: {
        text: 'Which NBA team is your favorite?',
        type: QuestionTypeCodes.DROPDOWN
      },
      options: {
        type: QuestionTypeCodes.DROPDOWN,
        value: [
          {
            id: uuidv4(),
            text: 'Boston Celtics'
          },
          {
            id: uuidv4(),
            text: 'Golden State Warriors'
          },
          {
            id: uuidv4(),
            text: 'Houston Rocket'
          }
        ]
      }
    }
  ];
};

export { loadComboList };
