function showValues() {

    let $form = document.forms['form'];

    let $text = '';

    //acceder individualmente a algun elemento 

    let $name = $form['name'];
    let $lastname = $form['lastname'];

    /* for (let element of $form) {

        $text += element.value + '<br>';
    } */

    //console.log($text);

    $text = $name.value + '<br>' + $lastname.value;

    document.getElementById('values-1').innerHTML = $text;
}