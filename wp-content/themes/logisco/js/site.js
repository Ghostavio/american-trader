// DOCUMENT READY

jQuery(document).ready(function($) {	
	var lang_html = jQuery('html').attr('lang');	
	
	if (lang_html == 'en-US') {		
		// 404 EN		
 		jQuery('.logisco-not-found-title').text('Page not found');
 		jQuery('.logisco-not-found-caption.text-not-found-1').html('The page you are accessing does not exist.');
 		jQuery('.logisco-not-found-caption.text-not-found-2').html('Please continue browsing our website by returning to the <a href="https://americantrader.com.br/en/" style="color: #949494;">home page</a>.');
	}
	
	if (lang_html == 'es-ES') {		
		// 404 ES
 		jQuery('.logisco-not-found-title').text('Página no encontrada');
 		jQuery('.logisco-not-found-caption.text-not-found-1').html('La página a la que accede no existe.');
 		jQuery('.logisco-not-found-caption.text-not-found-2').html('Continúe navegando por nuestro sitio web volviendo a la <a href="https://americantrader.com.br/es/" style="color: #949494;">página de inicio</a>.');
	}
});