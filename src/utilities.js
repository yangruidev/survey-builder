function insertItem<T>(array: Array<T>, item: T, index: number) {
  let newArray: Array<T> = array.slice();
  newArray.splice(index, 0, item);
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

export {
  insertItem,
  removeItemById,
  updateItemInArray,
  updateItemPropInArray,
  createOrUpdateItemInArray
};
