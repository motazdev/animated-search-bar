$(function() {
    $('#searchBar').focusin(function() {
        $('#srch-icon').animate({
            left: '185px'
        }, 300)
    })

    $('#searchBar').focusout(function() {
        $('#srch-icon').animate({
            left: '2px'
        }, 300)
    })
})