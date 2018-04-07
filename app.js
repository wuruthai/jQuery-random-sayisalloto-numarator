var uretilenSayi = [];
$( document ).ready( function () {
	$( ".twitter-share-button" ).click( function () {
		$( this ).attr( "href", "https://twitter.com/intent/tweet?text=Şanslı numaralarım: " + uretilenSayilar );
	} );

	var cevirBtn = $( ".cevir" );

	cevirBtn.on( "click", tahminYarat );

	/*
   bu fonksiyon bilmen ne yapar
  */
	function tahminYarat() {
		cevirBtn.prop( "disabled", true );

		uretilenSayilar = sayiUret( 6 );

		sayilarElement = $( "#sayilar" );
		sayilarElement.fadeOut( 400, "swing", function () {
			sayilarElement.empty();

			uretilenSayilar.forEach( sayi => {
				sayilarElement.append( '<div class="col text-center circle"><h2>' + sayi + "</h2></div>" );
			} );

			sayilarElement.fadeIn( 400, "swing" );
			cevirBtn.prop( "disabled", false );
		} );
	}

	// sayi uretir ve geri doner
	function sayiUret( adet ) {
		var arr = [];
		while ( arr.length < adet ) {
			var yeniSayi = Math.floor( Math.random() * 54 ) + 1;
			if ( arr.indexOf( yeniSayi ) === -1 ) {
				arr.push( yeniSayi );
			}
		}
		arr.sort( function ( a, b ) {
			return a > b;
		} );

		return arr;
	}
} );
