

$('#currentDay').text(`
${moment().format('dddd, MMMM Do')}
`)


let time = parseInt(moment().format('HH'));
console.log(time)


function timeBlock () {
    for (i=9; i <= 17; i++) {
        if (i < time) {
            console.log(time)
            let block = $(`#${i}`).attr('id')
            $(`#${i}`).addClass('past')
            console.log(block)
        } else if (i > time) {
            console.log("time")
            let block = $(`#${i}`).attr('id')
            $(`#${i}`).addClass('future')
            console.log(block)
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
       let chore = ($(this).prev().val())
       let place = ($(this).prev().attr('id'))
       localStorage.setItem(place,chore)

      })})

