const myList = document.querySelector('ul');
const myRequest = new Request('products.json');

  $.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=92gEVl0gHbeKM91x0LdN2lJHc2OvkU8t",
    async:true,
    dataType: "json",
    success: function(json) {
                console.log(json);
                for (const product of data.products) {
                    const listItem = document.createElement('li');
                    listItem.appendChild(
                      document.createElement('strong')
                    ).textContent = product.Name;
                    listItem.append(
                      ` can be found in ${
                        product.Location
                      }. Cost: `
                    );
                    listItem.appendChild(
                      document.createElement('strong')
                    ).textContent = `£${product.Price}`;
                    myList.appendChild(listItem);
                // Parse the response.
                // Do other things.
             }},
    error: function(xhr, status, err) {
                // This time, we do not end up here!
             }
  });