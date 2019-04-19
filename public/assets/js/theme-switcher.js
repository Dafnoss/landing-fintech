jQuery(document).ready(function($) {

    /* ======= Theme Switcher (Remove on production site) ======= */
    $('#color-trigger').on('click', function(e) {
        var $panel = $('#color-panel');
        var panelVisible = $('#color-panel').is(':visible');
        if (panelVisible) {
            $panel.hide();
        } else {
            $panel.show();
        }
        e.preventDefault();
    });
    
    $('#color-close').on('click', function(e) {
        e.preventDefault();
        $('#color-panel').hide();
    });
    
    
    $('#color-options a').on('click', function(e) {
        var $styleSheet = $(this).attr('data-style');
        var $logoImage = $(this).attr('data-logo');
		$('#theme-style').attr('href', $styleSheet);
		$('#logo-image').attr('src', $logoImage);
				
		var $listItem = $(this).closest('li');
		$listItem.addClass('active');
		$listItem.siblings().removeClass('active');
		
		e.preventDefault();
		
	});
	
});