export default ()=>{
  if(typeof Common == 'undefined'){
    return;
  }
  Common.check_input = function(elt){
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
                DntErrors.addError(elt_id);
                $(this).removeClass('valid');
                $(this).addClass('error');
                check_failed.push(elt_id);
            } else {
                DntErrors.removeError(elt_id);
                $(this).removeClass('error');
                $(this).addClass('valid');
            }
        });

        DntErrors.displayErrors();

        return (check_failed.length == 0)
    }
}
