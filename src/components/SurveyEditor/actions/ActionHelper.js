const initializeQuestion = type => {
  return {
    text: '',
    type: type || questionTypes[0].value,
    dirty: false
  };
};

const initializeCombo = (type = questionTypes[0].value) => {
  return {
    id: uuidv4(),
    question: initializeQuestion(type),
    type: type,
    options: {
      type: type,
      value: [initializeChoice(type)]
    }
  };
};

const initializeChoice = type => {
  switch (type) {
    case 'Multiple Choice':
      return {
        id: uuidv4(),
        text: ''
      };
    default:
      return {
        id: uuidv4(),
        text: ''
      };
  }
};

const updateToAlignWithComboType = combo => {
  const q = { ...combo.question, type: combo.type };
  const o = { ...combo.options, type: combo.type };
  const c = { ...combo, question: q, options: o };
  return c;
};

const saveOptionsToCurrentCombo = (comboList, currentComboId, options) => {
  return (comboList: any).map(c => {
    if (c.id == currentComboId) {
      return { ...c, options: { ...c.options, value: options } };
    } else {
      return c;
    }
  });
};

const initializeChoiceInCurrentCombo = (
  comboList: Array<ComboType>,
  currentCombo: ComboType,
  underChoiceId: ?string
) => {
  let newComboList = comboList;
  if (currentCombo && currentCombo.question) {
    const newChoice: ChoiceType = initializeChoice(currentCombo.question.type);
    newComboList = (comboList: any).map(c => {
      if (c.id === currentCombo.id) {
        if (c.options.value && c.options.value.length > 0) {
          const choiceList = c.options.value.slice();
          if (underChoiceId) {
            // insert under a specific choice if Id provided
            const position = choiceList.findIndex(c => c.id === underChoiceId);
            choiceList.splice(position + 1, 0, newChoice);
          } else {
            //insert to the last
            choiceList.push(newChoice);
          }
          c.options = { ...c.options, value: choiceList };
        } else {
          c.options = { ...c.options, value: [newChoice] };
        }
      }
      return c;
    });
  }
  return newComboList;
};

const updateChoiceInCurrentCombo = (comboList, currentCombo, choice) => {
  let newComboList = comboList;
  if (currentCombo && currentCombo.question) {
    newComboList = (comboList: any).map(c => {
      if (
        c.id == currentCombo.id &&
        c.options.value &&
        c.options.value.length > 0
      ) {
        const choliceList = c.options.value.slice();
        c.options = {
          ...c.options,
          value: updateItemInArray(choliceList, choice)
        };
      }
      return c;
    });
  }
  return newComboList;
};

const removeChoiceFromCurrentCombo = (comboList, currentCombo, choiceId) => {
  let newComboList = comboList;
  if (currentCombo && currentCombo.question) {
    newComboList = (comboList: any).map(c => {
      if (
        c.id == currentCombo.id &&
        c.options.value &&
        c.options.value.length > 0
      ) {
        const choliceList = c.options.value.slice();
        c.options = {
          ...c.options,
          value: removeItemById(choliceList, choiceId)
        };
      }
      return c;
    });
  }
  return newComboList;
};

export {
  initializeQuestion,
  initializeChoice,
  initializeCombo,
  initializeChoiceInCurrentCombo,
  updateToAlignWithComboType,
  updateChoiceInCurrentCombo,
  saveOptionsToCurrentCombo,
  removeChoiceFromCurrentCombo
};
