//Add movie to DOM
$(`form`).on('click', '.submit', function (evt) {
    evt.preventDefault()
    const movie = $(`input`).get(0).value
    const rating = $(`input`).get(1).value

    if (movie.length < 2) {
        alert(`Movie Title needs to has at leat two characters in it.`)
    } else {
        let newMovie = $(`<li> ${movie}  ${rating} </li>`)
        newMovie.append($(`<button> Delete </button>`))
        $(`ul`).append(newMovie)
        $(`li`).find('button').css('margin-left', '100px')

        // console.log($(`li`).find(`button`))
    }
})


//Delete move from dom
$(`ul`).on('click', 'button', function (e) {
    $(this).parent().remove()
})

