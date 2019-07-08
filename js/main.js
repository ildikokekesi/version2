// ------------------------------ FORM VALIDATION - kapcsolat.html ------------------------------

// ---------- ALERT ----------
$(function(){
    // elemek összegíűjtése
    let $button = $('button#button-contact');
    let $checkbox1 = $('input#checkbox1"]');
    let $username1 = $('input#username1');
    let $useremail1 = $('input#useremail1');
    let $invalidFieldlist = $('div.alert-danger ul');
    let $alert = $('div.alert-danger');
    let $form = $('form');

    // gombnyomásra reagálás
    $button.click(function (event){
        // alapértalmezett működés megakasztása
        event.preventDefault();
        
        // nem megfelelő mezők
        let invalidFields = [];
        $invalidFieldlist.html('');

        // mezők ellenőrzése
        // felhasználónév
        let username1 = $username1.val();
        if(username1.length == 0){
            //hibás kitöltés
            invalidFields.push('Név:');
            $username1.removeClass('is-valid');
            $username1.addClass('is-invalid');
        } else {
            // helyes kitöltés
            $username1.addClass('is-valid');
            $username1.removeClass('is-invalid');
        }
        //jelszó
        let useremail1 = $useremail1.val();
        if(useremail1.lenght == 0){
            // hibás kitöltés
            invalidFields.push('E-mail:');
            $useremail1.removeClass('is-valid');
            $useremail1.addClass('is-invalid');
        } else {
            // helyes kitöltés
            $useremail1.addClass('is-valid');
            $useremail1.removeClass('is-invalid');
        }
        
        // ÁSZF
        let isChecked = $checkbox1.prop('checked');
        if(!isChecked){
            // hibás kitöltés
            invalidFields.push('ÁSZF');
            $checkbox1.addClass('is-invalid');  
            $checkbox1.removeClass('is-valid');  
        } else {
            // helyes kitöltés
            $checkbox1.addClass('is-valid');
            $checkbox1.removeClass('is-invalid');
        }

        // sikeres-sikertelen elágazás
        if(invalidFields.length == 0) {
            // sikeres kitöltés
            $form.hide();
            $alert.hide();
        } else {
            // sikertelen kitöltés
            $alert.show();
            // hibák kiírása
            $.each(invalidFields, function(index, field){
                $invalidFieldlist.append('<li>' + field + '</li>');
            });
        }
    });
});





