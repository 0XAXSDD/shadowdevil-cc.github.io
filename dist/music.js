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
	
            url: 'https://m10.music.126.net/20200611203159/7db52b58bad938dc020fa536f1085dde/yyaac/555d/0009/015b/b7c9781ce17c77874a3d6144f71f0b5d.m4a',
            cover: 'cover1.jpg',
        }
    ]
});