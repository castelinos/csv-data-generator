export function extractDataByKey( rawData, key ){

    if( !rawData || rawData.length < 1 ) {
        console.log("No data found for extraction!");
        return;
    } 

    if( !key || key.trim() === '' ) {
        console.log('Improper key passed for extraction');
        return;
    }

    return rawData.map((obj) => ({ 'id' : obj["id"], [key]:  obj[key] }))
}
