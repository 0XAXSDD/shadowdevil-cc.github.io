const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    loop: 'one',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    preload: 'auto',
    audio: [
        {
            name: '罗罗诺亚·索隆',
            artist: 'artist1',
            theme: '#ebd0c2'
	
            url: 'https://m10.music.126.net/20200611214121/adcaade62e1836141b2e951b2ffdc563/yyaac/555d/0009/015b/b7c9781ce17c77874a3d6144f71f0b5d.m4a',
            cover: 'http://p1.music.126.net/sliytm7lO4CxCNb6wqeDvg==/109951164268510661.jpg',
        }
    ]
});