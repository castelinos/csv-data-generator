## Steps to run the CSV generator

1. Clone the git repository

2. Install Node packages
` npm install`

3. Rename the .env.example file to .env
    1. Set the desired server port number

4. Run start script
` npm start `

## Testing steps
1. Make a GET request to http://localhost:[port-number]/generate-csv

2. If request is successful, a url path is returned as a part of response

3. Make a GET request to the provided url path and the generated csv file will be downloaded.