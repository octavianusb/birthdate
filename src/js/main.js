

var checkPopinDate = function () {
    function checkNumber(number) {
        var initNumber = number;
        if (number.match(/^([1-9])$/)) {
            return false;
        } else {
            return true;
        }
    }

    function isValidMonth(mh) {
        var numb = checkNumber(mh);
        if (mh.match(/^\d{2}$/) && mh <= 12 && mh > 0 && numb) {
            return true;
        } else {
            return false;
        }
    }

    function isValidDay(dy) {
        var numb = checkNumber(dy);
        if (dy.match(/^\d{2}$/) && dy <= 31 && dy > 0 && numb) {
            return true;
        } else {
            return false;
        }
    }

    function isValidYear(yr) {
        if (yr.match(/^\d{4}$/) && yr > 1900) {
            return true;
        } else {
            return false;
        }
    }

    var inputId = getInputValue('#day');
    var monthVal = getInputValue('#month');
    var yearVal = getInputValue('#year');

    function getInputValue(inputId) {
        $(inputId).keyup(function () {
            return $(this).value;
        });
    }

    //  console.log(dayVal);
    //console.log(isValidMonth('12'));

//    $('#form .form-group').each(function (index) {
//        var arr = $('#edit-birthdate .form-item').each(function (index) {
//            var arr = [];
//            var inputVal = $(this).find('input').prop('value');
//            arr = arr.concat(arr.push(inputVal));
//            console.log(arr);
//
//            $(this).find('input').keyup(function () {
////      for(i = 0, )
//                if (index === 0) {
//                    console.log('primul');
//                } else if (index === 1) {
//                    console.log('al 2-lea');
//                } else if (index === 2) {
//                    console.log('al 3-lea');
//                }
//            });
//        });
//    });
}
//  $(inputId).keyup(function () {
//    inputVal = $(inputId).value;
//  });




$(document).ready(function(){
    checkPopinDate();
});