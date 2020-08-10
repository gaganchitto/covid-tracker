function updatemap() {
    fetch("https://www.trackcorona.live/api/provinces")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data)
            rsp.data.forEach(element => {
                longitude = element.longitude;
                latitude = element.latitude;

                cases = element.confirmed;
                if (cases > 255) {
                    colors = "rgb(255,0,0)"
                } else {
                    colors = `rgb(${cases},0,0)`
                }

                // Maarker
                new mapboxgl.Marker({
                        draggable: false,
                        color: colors,
                    })
                    .setLngLat([longitude, latitude])
                    .addTo(map);
            });
        })
}
updatemap();
setInterval(updatemap, 700000);
//https://api.covid19api.com/summary