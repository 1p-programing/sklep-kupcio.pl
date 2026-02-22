async function getResponseFrom(target) {
    try {
        const response = await fetch('/php/' + target);
        if (!response.ok) throw new Error('Error response: ' + response.status);
        
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Example ustage:= (await getResponseFrom('plik.php')).value;