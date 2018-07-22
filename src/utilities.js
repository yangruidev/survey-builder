function insertItem<T>(array: Array<T>, item: T, index: number) {
  let newArray: Array<T> = array.slice();
  newArray.splice(index, 0, item);
  return newArray;
}

function removeItem<T>(array: Array<T>, index: number) {
  return array.filter((item, i) => i != index);
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

//Update a property of an item (find by Id) in an array
function updateItemPropInArray<T>(
  array: Array<T>,
  newItemId: string,
  newItemPropName: string,
  newItemPropValue: T
) {
  return array.map(item => {
    if (item.id !== newItemId) {
      return item;
    } else {
      return { ...item, newItemPropName: newItemPropValue };
    }
  });
}

export { insertItem, removeItem, updateItemInArray, updateItemPropInArray };
