// Creare uno slider di immagini
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni :)
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// In oltre per scorrere le immagini permettere anche l'uso delle frecce sinistra e destra della tastiera
// Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l'immagine attuale da visualizzare nello slider

//document ready
$(function(){
    
    //invoco le funzioni
    $('.next .fa-angle-right').click(function(){ goNext(); });
    $('.prev .fa-angle-left').click(function(){ goPrev(); });

    //click direzione "avanti"
    function goNext(){
        var firstImg = $('img.first');
        var activeImg = $('img.active');
        var firstCircle = $('.fa-circle.first');
        var activeCircle = $('.fa-circle.active');

        activeImg.removeClass('active');
        activeCircle.removeClass('active');

        //uso 'last' per attribuire la direzione di --->"avanti"
        if (activeImg.hasClass('last')){
            firstImg.addClass('active');
            firstCircle.addClass('active');
        }else {
            activeImg.next().addClass('active');
            activeCircle.next().addClass('active');
        }
        
    }

    //click direzione "indietro"
    function goPrev(){
        var lastImg = $('img.last');
        var activeImg = $('img.active');
        var lastCircle = $('.fa-circle.last');
        var activeCircle = $('.fa-circle.active');
        
        activeImg.removeClass('active');
        activeCircle.removeClass('active');

        //uso 'first' per attribuire la direzione di --->"indietro"
        if (activeImg.hasClass('first')){
            lastImg.addClass('active');
            lastCircle.addClass('active');
        } else {
            activeImg.prev().addClass('active');
            activeCircle.prev().addClass('active');
        }
    }

    //Utilizzo della tastiera per "avanti" o "indietro"
    $(document).keydown(function (e) { 
        switch (e.which) {
            case 37: //freccia sinistra
                goPrev();
                break;
            case 39: //freccia destra
                goNext();
                break;
            default:
                break;
        }
    });
});
