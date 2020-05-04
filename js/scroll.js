var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight );

console.log(height);

// OnScroll event handler
const onScroll = () => {

    // Get scroll value
    const scroll = document.documentElement.scrollTop;

    // If scroll value is more than 0 - add class
    if (scroll > 0 && height > 900) {
        body.classList.add("scrolled");
    } else {
        body.classList.remove("scrolled")
    }
};

// Use either onScroll or throttledOnScroll
window.addEventListener('scroll', onScroll);
