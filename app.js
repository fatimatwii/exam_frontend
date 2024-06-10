document.getElementById('addSpecificItem').addEventListener('click', function () {
    addSpecificItemToList();
});

document.getElementById('addItem').addEventListener('click', function () {
    addItemToGeneralList();
});

function addSpecificItemToList() {
    var itemInput = document.getElementById('itemInput').value.trim();
    var itemType = document.querySelector('input[name="itemType"]:checked');

    if (itemInput === '' || !itemType) {
        alert('Please enter all the details for the item!');
        return;
    }

    itemType = itemType.value;

    var listItem = document.createElement('div');
    listItem.textContent = `${itemType.charAt(0).toUpperCase() + itemType.slice(1)}! - ${itemInput}`;
    listItem.classList.add('alert');
    listItem.classList.add('item');
    listItem.setAttribute('role', 'alert');

    if (itemType === 'fruits') {
        listItem.classList.add('alert-info');
        document.getElementById('fruitsList').appendChild(listItem);
    } else if (itemType === 'legumes') {
        listItem.classList.add('alert-warning');
        document.getElementById('legumesList').appendChild(listItem);
    }



    document.getElementById('itemInput').value = '';
    document.querySelector('input[name="itemType"]:checked').checked = false;
}

function addItemToGeneralList() {
    var itemInput = document.getElementById('itemInput').value.trim();
    var itemType = document.querySelector('input[name="itemType"]:checked');

    if (itemInput === '' || !itemType) {
        alert('Please enter all the details for the item!');
        return;
    }

    itemType = itemType.value;

    var listItem = document.createElement('div');
    listItem.textContent = `${itemType.charAt(0).toUpperCase() + itemType.slice(1)}! - ${itemInput}`;
    listItem.classList.add('alert');
    listItem.classList.add('item');
    listItem.setAttribute('role', 'alert');
    listItem.classList.add('alert-primary');

    var clonedItem = listItem.cloneNode(true);
    document.getElementById('fruitsLegumesList').appendChild(clonedItem);

    document.getElementById('itemInput').value = '';
    document.querySelector('input[name="itemType"]:checked').checked = false;
}
document.getElementById('fruitsLegumesList').addEventListener('click', function(event) {
    if (event.target.classList.contains('item')) {
        var item = event.target;
        var itemText = item.textContent.trim();
        var itemType = itemText.split('!')[0].trim();

        if (itemType === 'Fruits') {
            document.getElementById('fruitsList').appendChild(item);
            item.classList.remove('alert-primary');
            item.classList.add('alert-info');
        } else if (itemType === 'Legumes') {
            document.getElementById('legumesList').appendChild(item);
            item.classList.remove('alert-primary');
            item.classList.add('alert-warning');
        }
    }
});


document.getElementById('searchInput').addEventListener('keyup', function () {
    document.getElementById('searchInput').classList.add('w-100');
    var searchInput = this.value.trim().toLowerCase();
    var allItems = document.querySelectorAll('.item');

    allItems.forEach(function (item) {
        item.classList.remove('highlighted');
        if (item.textContent.toLowerCase().includes(searchInput) && searchInput !== '') {
            item.classList.add('highlighted');
        }
    });
});

document.getElementById('searchItem').addEventListener('click', function () {
    var searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    var allItems = document.querySelectorAll('.item');

    allItems.forEach(function (item) {
        item.classList.remove('highlighted');
        if (item.textContent.toLowerCase().includes(searchInput) && searchInput !== '') {
            item.classList.add('highlighted');
        }
    });
});



document.getElementById('deleteItem').addEventListener('click', function () {
    var searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    var allItems = document.querySelectorAll('.item');

    allItems.forEach(function (item) {
        if (item.textContent.toLowerCase().includes(searchInput) && searchInput !== '') {
            item.remove();
        }
    });
});
