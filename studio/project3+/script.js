$(document).ready(function() {
  let results = {};
  let filterValue = 'all';
  let selectors = {};

  // listen for change event on select dropdown fromHTML
  document.querySelector('#color-filter').addEventListener('change', (event) => {
    filterValue = event.target.value; // update filterValue with value from selected option
    generateContent(); // after updating filter value, then re-run the content generation to caputre
  });

  const generateContent = () => {
    Object.keys(results).forEach((type) => {
      const selector = selectors[type]
      if (selector.html()?.trim() !== '') {
        selector.slick('unslick');
        selector.html(''); 
      }      
      results[type]
      .filter((piece) => {
        return filterValue === 'all' || piece.fields.Color === filterValue;
      })
      .forEach((piece) => {
        selector.append(
          `<div class="item">          
            <h4>${piece.fields.Name}</h4>
            <img src="${piece.fields.images[0].thumbnails.large.url}" height='300' width='250' />
          </div>`
        )
      });
      selector.slick()
    })
  };

  fetch('https://api.airtable.com/v0/appS8iC7fLSvvjvuQ/collection', {
      headers: {
          Authorization: 'Bearer keyzunI8IVzH042aJ',
      }
  })
  .then(response => response.json())
  .then(data => {
    //const results = { top: [], bottom: [], accessories: [], shoes: [] };
    results = data.records.reduce((acc, val) => {
      if (!acc[val.fields.type]) {
        acc[val.fields.type] = [];
        selectors[val.fields.type] = $(`#${val.fields.type}Carousel`)
      }
      acc[val.fields.type].push(val);
      return acc 
    }, {})

    generateContent(); 
  });

  const colorButtons = [...document.querySelectorAll('.colorButton')];
document.addEventListener('click', e => {
    if (!colorButtons.includes(e.target)) return;
    document.body.style.background = e.target.textContent;

   

});


});

