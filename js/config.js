// for navigator language
// var lang = window.navigator.language;
// you can change the language
var lang = 'nl';

//change weather params here:
//units: metric or imperial
var weatherParams = {
    'q':'Aarschot,Belgium',
    'units':'metric',
    'lang':lang,
    'APPID':'e5ea7887f6fe2b6e7fac38e407a0b587'
};

var feed = 'http://www.hln.be/rss.xml';


// compliments:
var morning = [
            'Good morning, handsome!',
			'Jij kookt deze avond!',
			'Ni douche?',
			'Brrr tis koud !',
            'Enjoy your day!',
            'How was your sleep?'
        ];
        
var afternoon = [
            'Hello, beauty!',
            'You look sexy!',
			'Wat doe jij hier in het midden van de dag?',
            'Looking good today!'
        ];
       
var evening = [
            'Wow, you look hot!',
            'You look nice!',
            'Hi, sexy!',
			'Leuke dag gehad?'
        ];
