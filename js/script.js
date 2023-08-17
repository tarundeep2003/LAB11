const itemInput = document.getElementById('item-input');
const addButton = document.getElementById('add-button');
const itemList = document.getElementById('item-list');

addButton.addEventListener('click', addItem);

function addItem() {
  const itemText = itemInput.value.trim();
  if (itemText === '') {
    return;
  }

  const listItem = document.createElement('li');
  const itemSpan = document.createElement('span');
  itemSpan.textContent = itemText;
  listItem.appendChild(itemSpan);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    listItem.remove();
  });
  listItem.appendChild(deleteButton);

  itemList.appendChild(listItem);

  itemInput.value = '';
  itemInput.focus();
}
