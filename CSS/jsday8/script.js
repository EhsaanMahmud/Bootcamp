
const data=document.getElementById('value')
const key=document.getElementById('key')
const save=document.getElementById('save')
const clearall=document.getElementById('clear')

save.addEventListener('click' ,saveData);

function saveData(){
    
    localStorage.setItem(key.value , data.value)
    location.reload
}

const list=document.getElementById('list')
for (let  i=0;i<localStorage.length;1++)
{
    let item=document.createElement('h3');
    list.innerHTML=localStorage.getItem(localStorage.key(i));
    list.appendChild(item);
}

clearall.addEventListener('click', clearData);
function clearData(){
    localStorage.clear();
    location.reload();
}