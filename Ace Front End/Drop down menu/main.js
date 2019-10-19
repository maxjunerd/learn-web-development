const dropdown = document.getElementById('dropdown');
const dropItem = document.getElementById('drop-items')
//dropItem.hidden = true;
dropItem.style.display = 'none';
const hoverDropItems = () => {
    //dropItem.hidden = false;
    dropItem.style.display = 'flex';
};
const hoverOffDropItems = () => {
    dropItem.style.display = 'none'
};
dropdown.addEventListener('mouseover', hoverDropItems);
dropdown.addEventListener('mouseout', hoverOffDropItems);
