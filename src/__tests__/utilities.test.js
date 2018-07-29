import {
  insertItem,
  removeItemById,
  updateItemInArray,
  updateItemPropInArray,
  createOrUpdateItemInArray
} from '../utilities';

test('insertItem', () => {
  let arr = ['apple', 'peach', 'grape'];
  let item = 'mango';
  let newArray = insertItem(arr, item, 2);
  expect(newArray.indexOf(item)).toEqual(2);
});
