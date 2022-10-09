// MOBILE MENU
function mobileMenu() {
    if (document.getElementById('dropdown_menu').style.display ==  'block') {
        document.getElementById('dropdown_menu').style.display = 'none';
    } else {
        document.getElementById('dropdown_menu').style.display = 'block';
    } 
}
document.getElementById('hamburger').addEventListener('click', mobileMenu);

function mobileLinkClick() {
    document.getElementById('dropdown_menu').style.display = 'none';
}


// WELCOME MESSAGE
let welcomeData = '{ "user" : [' +
'{ "lastName":"Stowman"} ]}';

const parseWelcomeData = JSON.parse(welcomeData);
const welcomeName = document.getElementById('welcome_name');
welcomeName.innerHTML = 'Welcome back... Jedi Master ' + parseWelcomeData.user[0].lastName;
 


/* Like/Dislike Buttons */
const ep4Likes = document.getElementById('ep4_up_counter');
const ep4Dislikes = document.getElementById('ep4_down_counter');

const ep5Likes = document.getElementById('ep5_up_counter');
const ep5Dislikes = document.getElementById('ep5_down_counter');

const ep6Likes = document.getElementById('ep6_up_counter');
const ep6Dislikes = document.getElementById('ep6_down_counter');

// JSON Object for stored data
let data = {
    'likes': {
        "ep4":"1977", 
        "ep5":"1980", 
        "ep6":"1983"
    }, 
    'dislikes': {
        "ep4":"4",
        "ep5":"5", 
        "ep6":"6", 
    }
};

ep4Likes.innerHTML = data.likes.ep4;
ep5Likes.innerHTML = data.likes.ep5;
ep6Likes.innerHTML = data.likes.ep6;

ep4Dislikes.innerHTML = data.dislikes.ep4;
ep5Dislikes.innerHTML = data.dislikes.ep5;
ep6Dislikes.innerHTML = data.dislikes.ep6;


// MEDAL BADGES


/* LIKE/DISLIKE COUNTER and WINNER BADGE*/
function inc_counter(event) {
    const ep4medal = document.getElementById('ep4_medal');
    const ep5medal = document.getElementById('ep5_medal');
    const ep6medal = document.getElementById('ep6_medal');

    let id = event.target.id;
    var counter = document.getElementById(id + "_counter");
    counter.innerHTML++;
    console.log(Number(counter.innerHTML));


    var ep4State = Number(ep4Likes.innerHTML);
    var ep5State = Number(ep5Likes.innerHTML);
    var ep6State = Number(ep6Likes.innerHTML);

    function medalCheck4() {
        if ((ep4State > ep5State) && (ep4State > ep6State)) {
            ep4medal.style.display = 'block';
        } else {ep4medal.style.display = 'none'}
    }

    function medalCheck5() {
        if ((ep5State > ep4State) && (ep5State > ep6State)) {
            ep5medal.style.display = 'block';
        } else {ep5medal.style.display = 'none'}
    }

    function medalCheck6() {
        if ((ep6State > ep4State) && (ep6State > ep5State)) {
            ep6medal.style.display = 'block';
        } else {ep6medal.style.display = 'none'}
    }

    return (medalCheck5(), medalCheck4(), medalCheck6());

};



// PARALLAX
const parallaxLayer = document.querySelectorAll('.layer');
document.addEventListener("mousemove", parallax);

function parallax(e){
    parallaxLayer.forEach(layer => {
        const speed = layer.getAttribute('data-speed');

        const x = (window.innerWidth - e.pageX * speed)/100;
        const y = (window.innerHeight - e.pageY * speed)/100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
};

parallax();
