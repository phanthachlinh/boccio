export function step1FadeInValidation(){
        var donation = Step1.getDonation();

        // Check amount
        var ok = true;
        if (donation.amount == 0) {
            ok = false;
        }
        var min_amount = Step1.min_once_amount * 100;
        var max_amount = Step1.max_once_amount * 100;
        if (donation.frequency == 'regular') {
            min_amount = Step1.min_regular_amount * 100;
            max_amount = Step1.max_regular_amount * 100;
        }
        if (min_amount != '' && donation.amount < min_amount) {
            ok = false;
        }
        if (max_amount != '' && donation.amount > max_amount) {
            ok = false;
        }

        if (!check_qualification('step1')) ok = false;

        return ok;


}
export function step2FadeInValidation() {
        // Check all fields
        var ok = true;
        if (!checkField($('#email'), 'email')) { ok = false}
        if (!checkField($('#civility'), 'required')) { ok = false}
        if (!checkField($('#lastname'), 'required')) { ok = false}
        if (!checkField($('#firstname'), 'required')) { ok = false}
        if (!checkField($('#address1'), 'required')) { ok = false}
        if (!checkField($('#postcode'), 'required')) { ok = false}
        if (!checkField($('#city'), 'required')) { ok = false}

        if (!check_qualification('step2')) ok = false;
        return ok;
}
function checkField(elt, type) {
        var ok = false;
        switch(type) {
            case 'required':
                if (elt.val() != '') { ok = true; }
                break;
            case 'email':
                if (Step2.isValidEmail(elt.val())) { ok = true; }
                break;
            case 'postcode':
                if ((elt.val().length < 11) && (elt.val().length > 0)) { ok = true; }
                break;
            case 'company':
                if (elt.val().length < 35) { ok = true; }
                break;
        }




        return ok;
    }

function check_qualification(scope){
        // Lists to check input type checkbox/radio are checked or not
        var with_response_list = [];
        var without_response_list = [];

        // Parse required qualification fields
        $('[data-scope="' + scope + '"][data-required="1"]').each(function( index ) {
            var id = $(this).attr('name');
            switch($(this).prop("type")){
                case 'radio':case 'checkbox':
                    if ($(this).is(':checked')){
                        // The id is checked, store it and delete from "no response list"
                        if ($.inArray(id, with_response_list) == - 1)
                            with_response_list.push(id);
                        if ((index = $.inArray(id, without_response_list)) != - 1)
                            without_response_list.splice(index, 1);
                    }else{
                        // The id is not checked, store it if there was no response before
                        if ($.inArray(id, with_response_list) == - 1
                            && $.inArray(id, without_response_list) == - 1)
                            without_response_list.push(id);
                    }
                    break;
                default:
                    if ($(this).val() == '') {
                        without_response_list.push(id);
                    }
                    break;
            }
        });


        var check_ok = check_input($('[data-ira-check] > input[data-scope='+scope+'], input[data-ira-check][data-scope='+scope+']'));

        // Show error

        return (check_ok && without_response_list.length == 0);

}
function check_input(elt){
      var check_failed = [];
      elt.each(function(i){
          var ok = true;
          var name = elt[i].name;
          if(elt[i].value!="" || elt[i].required || elt[i].getAttribute('data-required') || false){
              var check = elt[i].getAttribute('data-ira-check') || elt[i].parentElement.getAttribute('data-ira-check') || null;
              if (check) {
                  ok = !!eval(check);
              }
          }
          let elt_id = $(this).attr('id') || $(this).parent('[name='+name+']').attr('id');

          if (!ok) {
              check_failed.push(elt_id);
          }
      });

      return (check_failed.length == 0)
  }
