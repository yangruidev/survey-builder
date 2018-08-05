import uuidv4 from 'uuid';

function insertItemToArray<T>(array: Array<T>, item: T, index: number) {
  let newArray: Array<T> = array.slice();
  newArray.splice(index, 0, item);
  return newArray;
}

function copyItemInArray<T>(array: Array<T>, id: string) {
  let itemToCopy = array.filter(i => i.id === id)[0];
  let newArray = array.slice();
  if (itemToCopy) {
    let newItem = Object.assign({}, array.filter(i => i.id === id)[0]);
    newItem.id = uuidv4();
    if (newItem) {
      newArray = insertItemToArray(
        newArray,
        newItem,
        array.indexOf(itemToCopy) + 1
      );
    }
  }
  return newArray;
}

function removeItemById<T>(array: Array<T>, id: string) {
  return array.filter(i => i.id != id);
}

function updateItemInArray<T>(array: Array<T>, newItem: T) {
  return array.map(item => {
    if (item.id !== newItem.id) {
      return item;
    } else {
      return newItem;
    }
  });
}

function createOrUpdateItemInArray<T>(array: Array<T>, newItem: T) {
  let exist = false;
  let newArray = [];
  if (array && array.length > 0) {
    newArray = array.map(item => {
      if (item.id !== newItem.id) {
        return item;
      } else {
        exist = true;
        return newItem;
      }
      if (!exist) {
        newArray.push(newItem);
      }
      return newArray;
    });
  } else {
    newArray.push(newItem);
  }
  return newArray;
}

//Update a property of an item (find by Id) in an array
function updateItemPropInArray<T>(
  array: Array<T>,
  newItemId: string,
  newItemPropName: string,
  newItemPropValue: Object
) {
  return array.map(item => {
    if (item.id !== newItemId) {
      return item;
    } else {
      const newItem = Object.assign({}, item);
      newItem[newItemPropName] = newItemPropValue;
      return newItem;
    }
  });
}

function moveItemInArrayToBeforeOrAfterTargetItem<T>(
  array: Array<T>,
  itemToMoveId: string,
  targetItemId: string,
  position: string
) {
  const positionChange = position == 'before' ? -1 : 1;

  const itemToMove = array.filter(c => c.id === itemToMoveId)[0];
  const arrayAfterRemove = array.filter(c => c.id !== itemToMoveId);
  const targetPosition = arrayAfterRemove.map(c => c.id).indexOf(targetItemId);
  const arrayAfterAddBack = insertItemToArray(
    arrayAfterRemove,
    itemToMove,
    targetPosition + positionChange
  );
  return arrayAfterAddBack;
}

export {
  insertItemToArray,
  copyItemInArray,
  removeItemById,
  updateItemInArray,
  updateItemPropInArray,
  createOrUpdateItemInArray,
  moveItemInArrayToBeforeOrAfterTargetItem
};
