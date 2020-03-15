function initMap() {
    const loc = { lat: 44.786568, lng: 20.448921 };
    const map = new google.maps.Map(document.querySelector('.map'),
    {
        zoom: 14,
        center: loc
    });
    const marker = new google.maps.Marker({position: loc, map: map});
}
// smooth scrolling
$('#navbar a, .btn').on('click', function(event){
    if(this.hash !== ''){
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate( 
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
})
// Sticky menu background
window.addEventListener('scroll', () => {
    if (window.scrollY >150) {
        document.querySelector('#navbar').style.opacity = 0.9;
    }else{
        document.querySelector('#navbar').style.opacity = 1;
    }
})