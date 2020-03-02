declare let FB;

(<any>window).fbAsyncInit = () => {
    FB.init({
        appId            : 2123438804574660,
        xfbml            : false,
        version          : 'v2.9',
        autoLogAppEvents : true
    });
    console.log({ FB });
    FB.XFBML.parse();
    FB.Event.subscribe('xfbml.render', () => console.log("Loaded"))
    FB.CustomerChat.show(true);
    FB.CustomerChat.showDialog();
};

(function(d, s, id) {
    let js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    js.target = "_top"
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
