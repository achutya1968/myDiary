let entryForm = document.getElementById('entryForm');
const entriesSection = document.getElementById('entries');
const entryTextbox = document.querySelector('.entry-textbox');
const entriesNav = document.querySelector('.entries-nav');

let count = 1;
function addEntryToDom(e) {
    event.preventDefault();
    const entryDiv = document.createElement('div');
    const displayEntryButton = document.createElement('button');
    displayEntryButton.className = 'display-entry-button';
    displayEntryButton.innerText = count;
    entriesNav.append(displayEntryButton);
    entryDiv.className = 'single-entry';
    entryDiv.innerText = entryTextbox.value;
    entryDiv.style.display = 'none';
    entriesSection.append(entryDiv);
    entryTextbox.value = '';
    displayEntryButton.addEventListener('click', function () {
        const allEntries = document.querySelectorAll('.single-entry');
        for (let i = 0; i < allEntries.length; i++) {
            allEntries[i].style.display = 'none';
        }

        entryDiv.style.display ='block';
    })


    count++
}

entryForm.addEventListener("submit", addEntryToDom)

console.log('Hello sir')