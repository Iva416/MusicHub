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
