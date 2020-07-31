
// displays the current time in the div with id currentDay 
// uses moment 
$('#currentDay').text(`
${moment().format('dddd, MMMM Do')}
`)

// changes the time from string to an integer
let time = parseInt(moment().format('HH'));

// funtion that loops for each hour 
function timeBlock () {
    for (i=9; i <= 17; i++) {
        // if the time has past, assigning past class to current id 
        if (i < time) {
            console.log(time)
            let block = $(`#${i}`).attr('id')
            $(`#${i}`).addClass('past')
            console.log(block)
            // if the time is in the future, assigning future class to current id 
        } else if (i > time) {
            console.log("time")
            let block = $(`#${i}`).attr('id')
            $(`#${i}`).addClass('future')
            console.log(block)
             // if the time is this hour, assigning present class to current id 
        } else {
            console.log(time)
            let block = $(`#${i}`).attr('id')
            $(`#${i}`).addClass('present')
            console.log(block)
        }
    } }
timeBlock()

// getting anything saved in local storage for each hour 
$('#9').val(localStorage.getItem('9'))
$('#10').val(localStorage.getItem('10'))
$('#11').val(localStorage.getItem('11'))
$('#12').val(localStorage.getItem('12'))
$('#13').val(localStorage.getItem('13'))
$('#14').val(localStorage.getItem('14'))
$('#15').val(localStorage.getItem('15'))
$('#16').val(localStorage.getItem('16'))
$('#17').val(localStorage.getItem('17'))


// when they click the section  
    $(document).ready(function() {

      $('.saveBtn').click(function() {
        //   this is the value of the content in 'this' time block 
       let chore = ($(this).prev().val())
    //    this takes the id from the button they push 
    // assigning the id to the content 
       let place = ($(this).prev().attr('id'))
    //    storing it in local storage 
       localStorage.setItem(place,chore)

      })})

