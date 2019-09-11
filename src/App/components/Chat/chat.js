

//code from talkjs
(function(t,a,l,k,j,s){
    s=a.createElement('script');s.async=1;s.src="https://cdn.talkjs.com/talk.js";a.head.appendChild(s)
    ;k=t.Promise;t.Talk={v:1,ready:{then:function(f){if(k)return new k(function(r,e){l.push([f,r,e])});l
    .push([f])},catch:function(){return k&&new k()},c:l}};})(window,document,[]);


Talk.ready.then(function() {
    var me = new Talk.User({
        id: "123456",
        name: "Alice",
        email: "alice@example.com",
        photoUrl: "https://demo.talkjs.com/img/alice.jpg",
        welcomeMessage: "Hey there! How are you? :-)"
    });
    window.talkSession = new Talk.Session({
        appId: "typBMBGC",
        me: me
    });
    var other = new Talk.User({
        id: "654321",
        name: "Sebastian",
        email: "Sebastian@example.com",
        photoUrl: "https://demo.talkjs.com/img/sebastian.jpg",
        welcomeMessage: "Hey, how can I help?"
    });

    var conversation = talkSession.getOrCreateConversation(Talk.oneOnOneId(me, other))
    conversation.setParticipant(me);
    conversation.setParticipant(other);
    var other = new Talk.User(/* user data from your backend - see previous chapter */);

    var conversation = talkSession.getOrCreateConversation(Talk.oneOnOneId(me, other));
    conversation.setParticipant(me);
    conversation.setParticipant(other);
    var popup = talkSession.createPopup(conversation, { keepOpen: false });
    popup.mount({ show: false });

    var button = document.getElementById("btn-getInTouch");
    button.addEventListener("click", function(event) {
        event.preventDefault();
        popup.show();
    });