async function getData(bird) {
    // get the response from the xeno-canto server
    const res = await fetch(`https://xeno-canto.org/api/2/recordings?query=${bird}`)
    // read the response as JSON
    const data = await res.json()
    console.log(data)
}

getData('eagle')
getData('owl')