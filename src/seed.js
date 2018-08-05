import uuidv4 from 'uuid';
import { QuestionTypeCodes } from './components/SurveyEditor/models/constant';
//@flow
const loadComboList = () => {
  return [
    {
      id: uuidv4(),
      type: QuestionTypeCodes.MULTIPLE_CHOICE,
      question: {
        text: 'Do you feel get too much exercise?'
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
      type: QuestionTypeCodes.DROPDOWN,
      question: {
        text: 'Which NBA team is your favorite?'
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
    },
    {
      id: uuidv4(),
      type: QuestionTypeCodes.MULTIPLE_CHOICE,
      question: {
        text: 'Which soccer player is your favorite?'
      },
      options: {
        type: QuestionTypeCodes.MULTIPLE_CHOICE,
        value: [
          {
            id: uuidv4(),
            text: 'Zlatan Ibrahimovic'
          },
          {
            id: uuidv4(),
            text: 'Luca Modric'
          },
          {
            id: uuidv4(),
            text: 'Leonardo Bonucci'
          }
        ]
      }
    }
  ];
};

export { loadComboList };
