import {
  insertItemToArray,
  copyItemInArray,
  removeItemById,
  updateItemInArray,
  updateItemPropInArray,
  createOrUpdateItemInArray,
  moveItemInArrayToBeforeOrAfterTargetItem
} from '../utilities';

const objectArray = [
  { id: 1, value: 'apple' },
  { id: 2, value: 'peach' },
  { id: 3, value: 'grape' },
  { id: 4, value: 'cherry' }
];

const stringArray = ['apple', 'peach', 'grape'];

test('insertItemToArray', () => {
  let item = 'mango';
  let newArray = insertItemToArray(stringArray.slice(), item, 2);
  expect(newArray.indexOf(item)).toEqual(2);
  expect(newArray.length).toEqual(4);
});

test('copyItemInArray', () => {
  const copyId = 2;
  const copyIdNotExist = 12;
  const newArray1 = copyItemInArray(objectArray.slice(), copyId);
  const newArray2 = copyItemInArray(objectArray.slice(), copyIdNotExist);
  const itemToCopy = newArray1.filter(c => c.id == copyId)[0];
  const position = newArray1.indexOf(itemToCopy);
  const newItem = newArray1[position + 1];
  expect(newArray1.length).toEqual(5);
  expect(itemToCopy.value).toEqual(newItem.value);
  expect(itemToCopy.id).not.toEqual(newItem.id);
  expect(newArray2).toEqual(objectArray);
});

test('removeItemById', () => {
  const itemToRemove = objectArray.slice()[
    Math.floor(Math.random() * objectArray.length)
  ];
  const arrayAfterRemove = removeItemById(objectArray.slice(), itemToRemove.id);
  expect(arrayAfterRemove).not.toContain(itemToRemove);
  expect(arrayAfterRemove.length).toEqual(objectArray.length - 1);
});
