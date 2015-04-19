

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



    function getInputValue(inputId) {
        var $this = $(inputId);
        //var inputValue = $this.prop("value");
        $this.keyup(function () {
            var inputValue = this.value;
            console.log(inputValue);
            return inputValue;
        });
    }

    var dayVal = getInputValue('#day');
    var monthVal = getInputValue('#month');
    var yearVal = getInputValue('#year');

    console.log(dayVal);
    console.log(monthVal);
    console.log(yearVal);


}




$(document).ready(function(){
    checkPopinDate();
});