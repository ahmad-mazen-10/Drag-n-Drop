const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null;

for (let i = 0; i < list_items.length; i++){
    const item = list_items[i];
    
    item.addEventListener('dragstart', function (e) {
        draggedItem = item;
        setTimeout(() => {
            item.style.display = 'none';
        },0)
    });

    item.addEventListener('dragend', function (e) { 
        setTimeout(() => {
            draggedItem.style.display = 'block';
            draggedItem = null;
        }, 0);
    });

    for (let p = 0; p < lists.length; p++) {
        const list = lists[p];

		list.addEventListener('dragover', function (e) {
			e.preventDefault();
		});
        list.addEventListener('dragenter', (e) =>{
            e.preventDefault();
            list.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        })
        list.addEventListener('dragleave', (e) =>{
            e.preventDefault();
            list.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        })
        
        list.addEventListener('drop', function (e) {
            this.append(draggedItem);
            list.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';

        });
    }
} 