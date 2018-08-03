import {
  removeItemById,
  updateItemInArray,
  updateItemPropInArray,
  createOrUpdateItemInArray,
  insertItemToArray
} from '../utilities';

test('insertItem', () => {
  let arr = ['apple', 'peach', 'grape'];
  let item = 'mango';
  let newArray = insertItemToArray(arr, item, 2);
  expect(newArray.indexOf(item)).toEqual(2);
});
