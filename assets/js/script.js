<<<<<<< HEAD
const APIController = (function() {

    const clientId = '1d9227c0cc824b66aef7a7edb670448a';
    const clientSecret = '7e4780e225f643c99b90a189b7e8c46e';

    //private methods
    const _getToken = async () => {

        const result = await fetch('https://accounts.spotify.com/api/token', {
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : 'Basic' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        return data.access_token;
    }
})();
=======
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
>>>>>>> 46309f1b376f40d5518f0c0e493dcab4e5416f4c
