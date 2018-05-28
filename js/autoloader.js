$(document).ready(function() {
    $('a').click(function(e){
        redirect = $(this).attr('href');
            e.preventDefault();
                $('body').fadeOut("fast", function(){
                document.location.href = redirect;
        });
    });
});