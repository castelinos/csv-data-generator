export async function fetchData( url ){

    try {
        let response = await fetch(url,{
            headers:{
                "Content-Type":"application/json"
            }
        });
        response = await response.json();
        return response;
        
    } catch (error) {
        console.log('Error fetching data from', url, 'Err.', error.message);
        return [];
    }
}