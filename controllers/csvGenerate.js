import config from "../config.js";
import { fetchData } from "../lib/request.js";
import { extractDataByKey } from "../lib/utils.js";
import ObjectsToCsv from 'objects-to-csv';

export async function generateCSV(req, res){

    try {
        const TYPICODE_BASE_URL = "https://jsonplaceholder.typicode.com";

        let pipeline = [
            fetchAndExtractData(TYPICODE_BASE_URL+'/users', 'name'),
            fetchAndExtractData(TYPICODE_BASE_URL+'/posts', 'title'),
            fetchAndExtractData(TYPICODE_BASE_URL+'/comments', 'body')
        ]

        let extractedData = await Promise.all(pipeline);
        extractedData = extractedData.flat(1);

        let data = [];

        while( extractedData.length > 0 ){
            let elem = extractedData.shift();
            let dataIndex = data.findIndex(val => val.id === elem.id);
            (dataIndex === -1 ) ? data.push(elem) : data.splice( dataIndex, 1, {...data[dataIndex], ...elem});
        }

        const csv = new ObjectsToCsv(data);
        const filename = 'csv-file-' + Date.now() + '.csv';
        await csv.toDisk(`public/${filename}`);
        
        res.status(201).json({ path: new URL(filename, config.url).toString() });

    } catch (error) {
        console.error('Error generating csv', error.message);
        res.status(500).json({ message: 'Internal server error'});
    }
    
}

async function fetchAndExtractData( url, key ){
    let data = await fetchData(url);
    return extractDataByKey( data, key);
}




