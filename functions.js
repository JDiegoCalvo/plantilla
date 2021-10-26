// Sharing buttons
function set_social_share_buttons()
{
	const url = window.location.href;

	const ul = document.querySelector( '#social_share_buttons_aside' );

	let btn = [
		{
			'href'  : 'https://www.facebook.com/sharer/sharer.php?u=',
			'title' : 'Share in Facebook'
		},
		{
			'href'  : 'https://twitter.com/share?url=',
			'title' : 'Share in Twitter'
		},
		{
			'href'  : 'http://www.linkedin.com/shareArticle?mini=true&url=',
			'title' : 'Share in Linkedin'
		},
		{
			'href'  : 'http://pinterest.com/pin/create/button/?url=',
			'title' : 'Share in Pinterest'
		},
		{
			'href'  : 'mailto:?Subject=Hello%20you%20must%20see%20this&Body=',
			'title' : 'Share in Email'
		},
		{
			'href'  : 'whatsapp://send?text=',
			'title' : 'Share in Whatsapp'
		}
	];

	let i = 0, li, a, span;

	for ( i = 0; i < btn.length; i++ )
	{
		li = document.createElement( 'li' );

		ul.appendChild( li );

		a = document.createElement( 'a' );
			a.setAttribute( 'href', btn[i].href + url );
			a.setAttribute( 'rel', 'noopener noreferrer' );
			a.setAttribute( 'target', '_blank' );
			a.setAttribute( 'title', btn[i].title );

		li.appendChild( a );

		span = document.createElement( 'span' );

		a.appendChild( span );
	}
}

set_social_share_buttons();

// Suscribirse
function suscribirse( e, form, id, method )
{
	e.preventDefault();

	let data = new FormData();
		data.append( 'url', window.location.href + '?method=' + method );
		data.append( 'email', form.email.value.trim() );

	fetch( 'php/suscribirse.php',
	{
		method : 'POST',
		body   : data
	});

	document.getElementById( id ).innerHTML = '';

	const p = document.createElement( 'p' );

	const text_node = document.createTextNode( '¡Gracias por suscribirte!' );

	p.appendChild( text_node );

	document.getElementById( id ).appendChild( p );
}

// Ranking stars
function show_ranking_stars()
{
	const div = document.querySelector( '#ranking_stars_div' );

	let p = document.createElement( 'p' );
		p.setAttribute( 'id', 'ranking_stars_speech' );

	let text = document.createTextNode( 'Rate our app!' );

		p.appendChild( text );

	div.appendChild( p );

	let ul = document.createElement( 'ul' );
		ul.setAttribute( 'id', 'ranking_stars' );

	let li = document.createElement( 'li' );
		li.setAttribute( 'id', 'ranking_stars_no_1' );
		li.setAttribute( 'title', 'Very bad. It is wasting time.' );

	ul.appendChild( li );

	li = document.createElement( 'li' );
		li.setAttribute( 'id', 'ranking_stars_no_2' );
		li.setAttribute( 'title', 'Bad. I do not recommend it.' );

	ul.appendChild( li );

	li = document.createElement( 'li' );
		li.setAttribute( 'id', 'ranking_stars_no_3' );
		li.setAttribute( 'title', "Regular. I've seen betters." );

	ul.appendChild( li );

	li = document.createElement( 'li' );
		li.setAttribute( 'id', 'ranking_stars_no_4' );
		li.setAttribute( 'title', 'Well. It served me well and I would recommend it.' );

	ul.appendChild( li );

	li = document.createElement( 'li' );
		li.setAttribute( 'id', 'ranking_stars_no_5' );
		li.setAttribute( 'title', 'Very good. Just what I wanted.' );

	ul.appendChild( li );

	div.appendChild( ul );

	p = document.createElement( 'p' );

	text = document.createTextNode( 'Total votes: ' );

	p.appendChild( text );

	let span = document.createElement( 'span' );
		span.setAttribute( 'id', 'ranking_stars_total' );

	text = document.createTextNode( '0' );

	span.appendChild( text );

	p.appendChild( span );

	text = document.createTextNode( '. Average ' );

	p.appendChild( text );

	span = document.createElement( 'span' );
		span.setAttribute( 'id', 'ranking_stars_average' );

	text = document.createTextNode( '0' );

	span.appendChild( text );
	
	p.appendChild( span );

	div.appendChild( p );

	ranking_stars_no_1.onmouseover = function () 
	{
		set_ranking_stars( 'hover', 'normal', 'normal', 'normal', 'normal' );
	}

	ranking_stars_no_1.onmouseout = function () 
	{
		set_ranking_stars( ranking_stars_1, ranking_stars_2, ranking_stars_3, ranking_stars_4, ranking_stars_5 );
	}

	ranking_stars_no_1.onclick = function () 
	{
		rank_stars( 1 );
	}

	ranking_stars_no_2.onmouseover = function () 
	{
		set_ranking_stars( 'hover', 'hover', 'normal', 'normal', 'normal' );
	}

	ranking_stars_no_2.onmouseout = function () 
	{
		set_ranking_stars( ranking_stars_1, ranking_stars_2, ranking_stars_3, ranking_stars_4, ranking_stars_5 );
	}

	ranking_stars_no_2.onclick = function () 
	{
		rank_stars( 2 );
	}

	ranking_stars_no_3.onmouseover = function () 
	{
		set_ranking_stars( 'hover', 'hover', 'hover', 'normal', 'normal' );
	}

	ranking_stars_no_3.onmouseout = function () 
	{
		set_ranking_stars( ranking_stars_1, ranking_stars_2, ranking_stars_3, ranking_stars_4, ranking_stars_5 );
	}

	ranking_stars_no_3.onclick = function () 
	{
		rank_stars( 3 );
	}

	ranking_stars_no_4.onmouseover = function () 
	{
		set_ranking_stars( 'hover', 'hover', 'hover', 'hover', 'normal' );
	}

	ranking_stars_no_4.onmouseout = function () 
	{
		set_ranking_stars( ranking_stars_1, ranking_stars_2, ranking_stars_3, ranking_stars_4, ranking_stars_5 );
	}

	ranking_stars_no_4.onclick = function () 
	{
		rank_stars( 4 );
	}

	ranking_stars_no_5.onmouseover = function () 
	{
		set_ranking_stars( 'hover', 'hover', 'hover', 'hover', 'hover' );
	}

	ranking_stars_no_5.onmouseout = function () 
	{
		set_ranking_stars( ranking_stars_1, ranking_stars_2, ranking_stars_3, ranking_stars_4, ranking_stars_5 );
	}

	ranking_stars_no_5.onclick = function () 
	{
		rank_stars( 5 );
	}

	init_ranking_stars();
}

show_ranking_stars();

function init_ranking_stars() 
{
	var data = new FormData();
		data.append( 'url', window.location.href );

	fetch( 'php/init_ranking_stars.php', 
	{ 
		method : 'POST', 
		body   : data 
	})
	.then( res => res.json() )
	.then(  r  => 
	{
		render_ranking_stars( r );
	});
}

function render_ranking_stars( r )
{
	ranking_stars_1 = r.one;
	ranking_stars_2 = r.two;
	ranking_stars_3 = r.three;
	ranking_stars_4 = r.four;
	ranking_stars_5 = r.five;

	set_ranking_stars( r.one, r.two, r.three, r.four, r.five );
	
	ranking_stars_total.innerHTML   = r.total;
	ranking_stars_average.innerHTML = r.average;
}

let ranking_stars_1,
	ranking_stars_2,
	ranking_stars_3,
	ranking_stars_4,
	ranking_stars_5
	ranking_stars_is_setted = false;

function set_ranking_stars( t, e, n, a, s ) 
{
	if ( !ranking_stars_is_setted )
	{
		ranking_stars_no_1.classList.remove( 'ranking-stars-normal' );
		ranking_stars_no_2.classList.remove( 'ranking-stars-normal' );
		ranking_stars_no_3.classList.remove( 'ranking-stars-normal' );
		ranking_stars_no_4.classList.remove( 'ranking-stars-normal' );
		ranking_stars_no_5.classList.remove( 'ranking-stars-normal' );

		ranking_stars_no_1.classList.remove( 'ranking-stars-hover' );
		ranking_stars_no_2.classList.remove( 'ranking-stars-hover' );
		ranking_stars_no_3.classList.remove( 'ranking-stars-hover' );
		ranking_stars_no_4.classList.remove( 'ranking-stars-hover' );
		ranking_stars_no_5.classList.remove( 'ranking-stars-hover' );

		ranking_stars_no_1.classList.add( 'ranking-stars-' + t );
		ranking_stars_no_2.classList.add( 'ranking-stars-' + e );
		ranking_stars_no_3.classList.add( 'ranking-stars-' + n );
		ranking_stars_no_4.classList.add( 'ranking-stars-' + a );
		ranking_stars_no_5.classList.add( 'ranking-stars-' + s );

	}
}

function rank_stars( rate ) 
{
	if ( !ranking_stars_is_setted )
	{
		let data = new FormData();
			data.append( 'url', window.location.href );
			data.append( 'rate', rate );
			
		fetch( 'php/rank_stars.php', 
		{ 
			method : 'POST', 
			body   : data
		})
		.then( r => 
		{
			ranking_stars_is_setted = true;

			ranking_stars_speech.innerHTML  = 'Thank you very much for rating this post.';

			init_ranking_stars();
		});

	}
}

// Comentarios
const comentarios_list = document.getElementById( 'comentarios_list' );

function comentarios()
{
	let data = new FormData();
		data.append( 'url', window.location.href );

	fetch( 'php/comentarios.php',
	{
		method : 'POST',
		body   : data
	})
	.then( res => res.json() )
	.then(  r  => 
	{
		comentarios_list.innerHTML = `
			<li>
				<p>Comentarios: (${ r.length })</p>
			</li>
		`;

		for ( let i = 0; i < r.length; i++ )
		{
			comentarios_list.innerHTML += `
				<li>
					<p>${ r[i].fecha }</p>
					<p>${ r[i].nombre }</p>
					<p>${ r[i].comentario }</p>
				</li>
			`;
		}
	});
}

comentarios();

const comentar_form = document.getElementById( 'comentar_form' );

function comentar( e, form )
{
	e.preventDefault();

	let data = new FormData();
		data.append( 'url', window.location.href );
		data.append( 'nombre', form.nombre.value.trim() );
		data.append( 'email', form.email.value.trim() );
		data.append( 'comentario', form.comentario.value.trim() );

	fetch( 'php/comentar.php',
	{
		method : 'POST',
		body   : data
	})
	.then( r => 
	{
		comentar_form.innerHTML = '';

		const p = document.createElement( 'p' );

		const text_node = document.createTextNode( '¡Gracias por tu comentario!' );

		p.appendChild( text_node );

		comentar_form.appendChild( p );

		comentarios();
	});
}

// Contacto
const contacto_form = document.getElementById( 'contacto_form' );

function contacto( e, form )
{
	e.preventDefault();

	let data = new FormData();
		data.append( 'to', 'spam@dctprime.com' );
		data.append( 'url', window.location.href );
		data.append( 'nombre', form.nombre.value.trim() );
		data.append( 'email', form.email.value.trim() );
		data.append( 'codigo', form.codigo.value );
		data.append( 'whatsapp', form.whatsapp.value.trim() );
		data.append( 'mensaje', form.mensaje.value.trim() );

	fetch( 'php/contacto.php',
	{
		method : 'POST',
		body   : data
	});

	contacto_form.innerHTML = '';

	const p = document.createElement( 'p' );

	const text_node = document.createTextNode( '¡Gracias por tu mensaje!' );

	p.appendChild( text_node );

	contacto_form.appendChild( p );
}

function set_phone_number_code()
{
	const phone_number_country_codes_select = document.getElementById( 'phone_number_country_codes_select' );

	let i = 0, option, text_node, Phone_number_country_codes = [];

	const Phone_number_country_codes_and_country = [
		{
			"code": "+7 840",
			"name": "Abkhazia"
		},
		{
			"code": "+93",
			"name": "Afghanistan"
		},
		{
			"code": "+355",
			"name": "Albania"
		},
		{
			"code": "+213",
			"name": "Algeria"
		},
		{
			"code": "+1 684",
			"name": "American Samoa"
		},
		{
			"code": "+376",
			"name": "Andorra"
		},
		{
			"code": "+244",
			"name": "Angola"
		},
		{
			"code": "+1 264",
			"name": "Anguilla"
		},
		{
			"code": "+1 268",
			"name": "Antigua and Barbuda"
		},
		{
			"code": "+54",
			"name": "Argentina"
		},
		{
			"code": "+374",
			"name": "Armenia"
		},
		{
			"code": "+297",
			"name": "Aruba"
		},
		{
			"code": "+247",
			"name": "Ascension"
		},
		{
			"code": "+61",
			"name": "Australia"
		},
		{
			"code": "+672",
			"name": "Australian External Territories"
		},
		{
			"code": "+43",
			"name": "Austria"
		},
		{
			"code": "+994",
			"name": "Azerbaijan"
		},
		{
			"code": "+1 242",
			"name": "Bahamas"
		},
		{
			"code": "+973",
			"name": "Bahrain"
		},
		{
			"code": "+880",
			"name": "Bangladesh"
		},
		{
			"code": "+1 246",
			"name": "Barbados"
		},
		{
			"code": "+1 268",
			"name": "Barbuda"
		},
		{
			"code": "+375",
			"name": "Belarus"
		},
		{
			"code": "+32",
			"name": "Belgium"
		},
		{
			"code": "+501",
			"name": "Belize"
		},
		{
			"code": "+229",
			"name": "Benin"
		},
		{
			"code": "+1 441",
			"name": "Bermuda"
		},
		{
			"code": "+975",
			"name": "Bhutan"
		},
		{
			"code": "+591",
			"name": "Bolivia"
		},
		{
			"code": "+387",
			"name": "Bosnia and Herzegovina"
		},
		{
			"code": "+267",
			"name": "Botswana"
		},
		{
			"code": "+55",
			"name": "Brazil"
		},
		{
			"code": "+246",
			"name": "British Indian Ocean Territory"
		},
		{
			"code": "+1 284",
			"name": "British Virgin Islands"
		},
		{
			"code": "+673",
			"name": "Brunei"
		},
		{
			"code": "+359",
			"name": "Bulgaria"
		},
		{
			"code": "+226",
			"name": "Burkina Faso"
		},
		{
			"code": "+257",
			"name": "Burundi"
		},
		{
			"code": "+855",
			"name": "Cambodia"
		},
		{
			"code": "+237",
			"name": "Cameroon"
		},
		{
			"code": "+1",
			"name": "Canada"
		},
		{
			"code": "+238",
			"name": "Cape Verde"
		},
		{
			"code": "+1 345",
			"name": "Cayman Islands"
		},
		{
			"code": "+236",
			"name": "Central African Republic"
		},
		{
			"code": "+235",
			"name": "Chad"
		},
		{
			"code": "+56",
			"name": "Chile"
		},
		{
			"code": "+86",
			"name": "China"
		},
		{
			"code": "+61",
			"name": "Christmas Island"
		},
		{
			"code": "+61",
			"name": "Cocos-Keeling Islands"
		},
		{
			"code": "+57",
			"name": "Colombia"
		},
		{
			"code": "+269",
			"name": "Comoros"
		},
		{
			"code": "+242",
			"name": "Congo"
		},
		{
			"code": "+243",
			"name": "Congo, Dem. Rep. of (Zaire)"
		},
		{
			"code": "+682",
			"name": "Cook Islands"
		},
		{
			"code": "+506",
			"name": "Costa Rica"
		},
		{
			"code": "+385",
			"name": "Croatia"
		},
		{
			"code": "+53",
			"name": "Cuba"
		},
		{
			"code": "+599",
			"name": "Curacao"
		},
		{
			"code": "+537",
			"name": "Cyprus"
		},
		{
			"code": "+420",
			"name": "Czech Republic"
		},
		{
			"code": "+45",
			"name": "Denmark"
		},
		{
			"code": "+246",
			"name": "Diego Garcia"
		},
		{
			"code": "+253",
			"name": "Djibouti"
		},
		{
			"code": "+1 767",
			"name": "Dominica"
		},
		{
			"code": "+1 809",
			"name": "Dominican Republic"
		},
		{
			"code": "+670",
			"name": "East Timor"
		},
		{
			"code": "+56",
			"name": "Easter Island"
		},
		{
			"code": "+593",
			"name": "Ecuador"
		},
		{
			"code": "+20",
			"name": "Egypt"
		},
		{
			"code": "+503",
			"name": "El Salvador"
		},
		{
			"code": "+240",
			"name": "Equatorial Guinea"
		},
		{
			"code": "+291",
			"name": "Eritrea"
		},
		{
			"code": "+372",
			"name": "Estonia"
		},
		{
			"code": "+251",
			"name": "Ethiopia"
		},
		{
			"code": "+500",
			"name": "Falkland Islands"
		},
		{
			"code": "+298",
			"name": "Faroe Islands"
		},
		{
			"code": "+679",
			"name": "Fiji"
		},
		{
			"code": "+358",
			"name": "Finland"
		},
		{
			"code": "+33",
			"name": "France"
		},
		{
			"code": "+596",
			"name": "French Antilles"
		},
		{
			"code": "+594",
			"name": "French Guiana"
		},
		{
			"code": "+689",
			"name": "French Polynesia"
		},
		{
			"code": "+241",
			"name": "Gabon"
		},
		{
			"code": "+220",
			"name": "Gambia"
		},
		{
			"code": "+995",
			"name": "Georgia"
		},
		{
			"code": "+49",
			"name": "Germany"
		},
		{
			"code": "+233",
			"name": "Ghana"
		},
		{
			"code": "+350",
			"name": "Gibraltar"
		},
		{
			"code": "+30",
			"name": "Greece"
		},
		{
			"code": "+299",
			"name": "Greenland"
		},
		{
			"code": "+1 473",
			"name": "Grenada"
		},
		{
			"code": "+590",
			"name": "Guadeloupe"
		},
		{
			"code": "+1 671",
			"name": "Guam"
		},
		{
			"code": "+502",
			"name": "Guatemala"
		},
		{
			"code": "+224",
			"name": "Guinea"
		},
		{
			"code": "+245",
			"name": "Guinea-Bissau"
		},
		{
			"code": "+595",
			"name": "Guyana"
		},
		{
			"code": "+509",
			"name": "Haiti"
		},
		{
			"code": "+504",
			"name": "Honduras"
		},
		{
			"code": "+852",
			"name": "Hong Kong SAR China"
		},
		{
			"code": "+36",
			"name": "Hungary"
		},
		{
			"code": "+354",
			"name": "Iceland"
		},
		{
			"code": "+91",
			"name": "India"
		},
		{
			"code": "+62",
			"name": "Indonesia"
		},
		{
			"code": "+98",
			"name": "Iran"
		},
		{
			"code": "+964",
			"name": "Iraq"
		},
		{
			"code": "+353",
			"name": "Ireland"
		},
		{
			"code": "+972",
			"name": "Israel"
		},
		{
			"code": "+39",
			"name": "Italy"
		},
		{
			"code": "+225",
			"name": "Ivory Coast"
		},
		{
			"code": "+1 876",
			"name": "Jamaica"
		},
		{
			"code": "+81",
			"name": "Japan"
		},
		{
			"code": "+962",
			"name": "Jordan"
		},
		{
			"code": "+7 7",
			"name": "Kazakhstan"
		},
		{
			"code": "+254",
			"name": "Kenya"
		},
		{
			"code": "+686",
			"name": "Kiribati"
		},
		{
			"code": "+965",
			"name": "Kuwait"
		},
		{
			"code": "+996",
			"name": "Kyrgyzstan"
		},
		{
			"code": "+856",
			"name": "Laos"
		},
		{
			"code": "+371",
			"name": "Latvia"
		},
		{
			"code": "+961",
			"name": "Lebanon"
		},
		{
			"code": "+266",
			"name": "Lesotho"
		},
		{
			"code": "+231",
			"name": "Liberia"
		},
		{
			"code": "+218",
			"name": "Libya"
		},
		{
			"code": "+423",
			"name": "Liechtenstein"
		},
		{
			"code": "+370",
			"name": "Lithuania"
		},
		{
			"code": "+352",
			"name": "Luxembourg"
		},
		{
			"code": "+853",
			"name": "Macau SAR China"
		},
		{
			"code": "+389",
			"name": "Macedonia"
		},
		{
			"code": "+261",
			"name": "Madagascar"
		},
		{
			"code": "+265",
			"name": "Malawi"
		},
		{
			"code": "+60",
			"name": "Malaysia"
		},
		{
			"code": "+960",
			"name": "Maldives"
		},
		{
			"code": "+223",
			"name": "Mali"
		},
		{
			"code": "+356",
			"name": "Malta"
		},
		{
			"code": "+692",
			"name": "Marshall Islands"
		},
		{
			"code": "+596",
			"name": "Martinique"
		},
		{
			"code": "+222",
			"name": "Mauritania"
		},
		{
			"code": "+230",
			"name": "Mauritius"
		},
		{
			"code": "+262",
			"name": "Mayotte"
		},
		{
			"code": "+52",
			"name": "Mexico"
		},
		{
			"code": "+691",
			"name": "Micronesia"
		},
		{
			"code": "+1 808",
			"name": "Midway Island"
		},
		{
			"code": "+373",
			"name": "Moldova"
		},
		{
			"code": "+377",
			"name": "Monaco"
		},
		{
			"code": "+976",
			"name": "Mongolia"
		},
		{
			"code": "+382",
			"name": "Montenegro"
		},
		{
			"code": "+1664",
			"name": "Montserrat"
		},
		{
			"code": "+212",
			"name": "Morocco"
		},
		{
			"code": "+95",
			"name": "Myanmar"
		},
		{
			"code": "+264",
			"name": "Namibia"
		},
		{
			"code": "+674",
			"name": "Nauru"
		},
		{
			"code": "+977",
			"name": "Nepal"
		},
		{
			"code": "+31",
			"name": "Netherlands"
		},
		{
			"code": "+599",
			"name": "Netherlands Antilles"
		},
		{
			"code": "+1 869",
			"name": "Nevis"
		},
		{
			"code": "+687",
			"name": "New Caledonia"
		},
		{
			"code": "+64",
			"name": "New Zealand"
		},
		{
			"code": "+505",
			"name": "Nicaragua"
		},
		{
			"code": "+227",
			"name": "Niger"
		},
		{
			"code": "+234",
			"name": "Nigeria"
		},
		{
			"code": "+683",
			"name": "Niue"
		},
		{
			"code": "+672",
			"name": "Norfolk Island"
		},
		{
			"code": "+850",
			"name": "North Korea"
		},
		{
			"code": "+1 670",
			"name": "Northern Mariana Islands"
		},
		{
			"code": "+47",
			"name": "Norway"
		},
		{
			"code": "+968",
			"name": "Oman"
		},
		{
			"code": "+92",
			"name": "Pakistan"
		},
		{
			"code": "+680",
			"name": "Palau"
		},
		{
			"code": "+970",
			"name": "Palestinian Territory"
		},
		{
			"code": "+507",
			"name": "Panama"
		},
		{
			"code": "+675",
			"name": "Papua New Guinea"
		},
		{
			"code": "+595",
			"name": "Paraguay"
		},
		{
			"code": "+51",
			"name": "Peru"
		},
		{
			"code": "+63",
			"name": "Philippines"
		},
		{
			"code": "+48",
			"name": "Poland"
		},
		{
			"code": "+351",
			"name": "Portugal"
		},
		{
			"code": "+1 787",
			"name": "Puerto Rico"
		},
		{
			"code": "+974",
			"name": "Qatar"
		},
		{
			"code": "+262",
			"name": "Reunion"
		},
		{
			"code": "+40",
			"name": "Romania"
		},
		{
			"code": "+7",
			"name": "Russia"
		},
		{
			"code": "+250",
			"name": "Rwanda"
		},
		{
			"code": "+685",
			"name": "Samoa"
		},
		{
			"code": "+378",
			"name": "San Marino"
		},
		{
			"code": "+966",
			"name": "Saudi Arabia"
		},
		{
			"code": "+221",
			"name": "Senegal"
		},
		{
			"code": "+381",
			"name": "Serbia"
		},
		{
			"code": "+248",
			"name": "Seychelles"
		},
		{
			"code": "+232",
			"name": "Sierra Leone"
		},
		{
			"code": "+65",
			"name": "Singapore"
		},
		{
			"code": "+421",
			"name": "Slovakia"
		},
		{
			"code": "+386",
			"name": "Slovenia"
		},
		{
			"code": "+677",
			"name": "Solomon Islands"
		},
		{
			"code": "+27",
			"name": "South Africa"
		},
		{
			"code": "+500",
			"name": "South Georgia and the South Sandwich Islands"
		},
		{
			"code": "+82",
			"name": "South Korea"
		},
		{
			"code": "+34",
			"name": "Spain"
		},
		{
			"code": "+94",
			"name": "Sri Lanka"
		},
		{
			"code": "+249",
			"name": "Sudan"
		},
		{
			"code": "+597",
			"name": "Suriname"
		},
		{
			"code": "+268",
			"name": "Swaziland"
		},
		{
			"code": "+46",
			"name": "Sweden"
		},
		{
			"code": "+41",
			"name": "Switzerland"
		},
		{
			"code": "+963",
			"name": "Syria"
		},
		{
			"code": "+886",
			"name": "Taiwan"
		},
		{
			"code": "+992",
			"name": "Tajikistan"
		},
		{
			"code": "+255",
			"name": "Tanzania"
		},
		{
			"code": "+66",
			"name": "Thailand"
		},
		{
			"code": "+670",
			"name": "Timor Leste"
		},
		{
			"code": "+228",
			"name": "Togo"
		},
		{
			"code": "+690",
			"name": "Tokelau"
		},
		{
			"code": "+676",
			"name": "Tonga"
		},
		{
			"code": "+1 868",
			"name": "Trinidad and Tobago"
		},
		{
			"code": "+216",
			"name": "Tunisia"
		},
		{
			"code": "+90",
			"name": "Turkey"
		},
		{
			"code": "+993",
			"name": "Turkmenistan"
		},
		{
			"code": "+1 649",
			"name": "Turks and Caicos Islands"
		},
		{
			"code": "+688",
			"name": "Tuvalu"
		},
		{
			"code": "+1 340",
			"name": "U.S. Virgin Islands"
		},
		{
			"code": "+256",
			"name": "Uganda"
		},
		{
			"code": "+380",
			"name": "Ukraine"
		},
		{
			"code": "+971",
			"name": "United Arab Emirates"
		},
		{
			"code": "+44",
			"name": "United Kingdom"
		},
		{
			"code": "+1",
			"name": "United States"
		},
		{
			"code": "+598",
			"name": "Uruguay"
		},
		{
			"code": "+998",
			"name": "Uzbekistan"
		},
		{
			"code": "+678",
			"name": "Vanuatu"
		},
		{
			"code": "+58",
			"name": "Venezuela"
		},
		{
			"code": "+84",
			"name": "Vietnam"
		},
		{
			"code": "+1 808",
			"name": "Wake Island"
		},
		{
			"code": "+681",
			"name": "Wallis and Futuna"
		},
		{
			"code": "+967",
			"name": "Yemen"
		},
		{
			"code": "+260",
			"name": "Zambia"
		},
		{
			"code": "+255",
			"name": "Zanzibar"
		},
		{
			"code": "+263",
			"name": "Zimbabwe"
		}
	];

	for ( i = 0; i < Phone_number_country_codes_and_country.length; i++ )
	{
		if ( Phone_number_country_codes.indexOf( Phone_number_country_codes_and_country[i].code ) == -1 )
		{
			Phone_number_country_codes.push( Phone_number_country_codes_and_country[i].code );

		}

		Phone_number_country_codes.sort();
	}

	for ( i = 0; i < Phone_number_country_codes.length; i++ )
	{
		option = document.createElement( 'option' );

		text_node = document.createTextNode( Phone_number_country_codes[i] );

		option.appendChild( text_node );

		phone_number_country_codes_select.appendChild( option );
	}

	phone_number_country_codes_select.value = '+52';
}

set_phone_number_code();

// Cookies
function aceptar_cookies()
{
	set_cookie ( 'cookies_policy', Date(), 365 );

	document.querySelector( '#cookies_div' ).classList.add( 'd-none' );
}
function check_cookie() 
{
	const cookies_policy = get_cookie( 'cookies_policy' );

	if ( cookies_policy == '' ) 
	{
		document.querySelector( '#cookies_div' ).classList.remove( 'd-none' );

	}
}
function set_cookie ( cname, cvalue, exdays ) 
{
	let d = new Date();
		d.setTime( d.getTime() + ( exdays * 24 * 60 * 60 * 1000 ) );

	let expires = 'expires=' + d.toGMTString();

	document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}
