console.log('Client-side code running');

const button = document.getElementById('myButton');

function load_function() {

    fetch('/start', {
        method: 'GET'
    })
        .then(function (response) {
            return response.text();
        }).then(function (data) {
            // update annotation_identifier and src of image el
            let image_el = document.getElementById('image');

            let splitted = data.split("---");
            let version = splitted[0];
            let id_ = splitted[1];
            image_el.setAttribute("annotation_identifier", id_);
            image_el.setAttribute("src", `${version}/${id_}.svg`);
        })
}

button.addEventListener('click', function (e) {

    let image_el = document.getElementById('image');
    let annotated_id = image_el.getAttribute("annotation_identifier");

    let participants_el = document.getElementById('participants');
    let participants_value = participants_el.value;

    let subevents_el = document.getElementById('subevents');
    let subevents_value = subevents_el.value;

    console.log('button was clicked');
    console.log(annotated_id);
    console.log(participants_value);
    console.log(subevents_value);

    let fetch_url = '/clicked?identifier=' + annotated_id + '&participants=' + participants_value + '&subevents=' + subevents_value;
    fetch(fetch_url, {
        method: 'GET'
    })
    .then(function (response) {
        return response.text();
    }).then(function (data) {
        // update annotation_identifier and src of image el

        let splitted = data.split("---");
        let version = splitted[0];
        let id_ = splitted[1];
        image_el.setAttribute("annotation_identifier", id_);
        image_el.setAttribute("src", `${version}/${id_}.svg`);
    })
});
