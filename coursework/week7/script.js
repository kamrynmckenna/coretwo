console.log('hi');

fetch('https://api.airtable.com/v0/appS8iC7fLSvvjvuQ/collection', {
    headers: {
        Authorization: 'Bearer keyzunI8IVzH042aJ',
    }
})
.then(response => response.json())
.then(data => {

    //console.log(data);

const collection= document.querySelector('.collection');

console.log(collection);
data.records.forEach(piece {
    console.log(piece),
    collection.innerHTML += 
    <div class="piece">
    `<h3>${piece.fields.name}</h3>`; 
    `<h5>${piece.fields.type}</h5`;

</div>
});

});
