let editRow = null; 

document.getElementById('detailsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if (name && age) {
        const table = document.getElementById('detailsTable').getElementsByTagName('tbody')[0];
        
        if (editRow) {
            editRow.cells[0].textContent = name;
            editRow.cells[1].textContent = age;
            editRow = null; 
        } else {
            const row = table.insertRow();
            row.classList.add('table-row'); 

            const nameCell = row.insertCell(0);
            const ageCell = row.insertCell(1);
            const actionCell = row.insertCell(2);

            nameCell.textContent = name;
            ageCell.textContent = age;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = function() {
                row.remove();
            };

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.onclick = function() {
                document.getElementById('name').value = nameCell.textContent;
                document.getElementById('age').value = ageCell.textContent;

                editRow = row; 
            };

            actionCell.appendChild(editButton);
            actionCell.appendChild(deleteButton);
        }

        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
    }
});
