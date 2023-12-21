document.getElementById('output').style.visibility = 'hidden';
document.getElementById('lbsInput').addEventListener('input', 
    function(e){
        document.getElementById('output').style.visibility = 'visible';
        let lbs = e.target.value;
        document.getElementById('gramsOutput').innerHTML = Number(lbs/0.0022046).toFixed(4);
        document.getElementById('kgOutput').innerHTML = Number(lbs/2.2046).toFixed(4);
        document.getElementById('ozOutput').innerHTML = Number(lbs*16).toFixed(4);
        // document.getElementById('lbsCard').style.visibility = 'hidden';
    });
    // document.getElementById('kgsInput').addEventListener('input', 
    // function(e){
    //     document.getElementById('output').style.visibility = 'visible';
    //     let kgs = e.target.value;
    //     document.getElementById('gramsOutput').innerHTML = Number(kgs*1000).toFixed(4);
    //     document.getElementById('kgOutput').style.visibility = 'hidden';
    //     document.getElementById('ozOutput').innerHTML = Number(kgs*35.274).toFixed(4);
    //     document.getElementById('lbsCard').innerHTML = Number(kgs*2.2046).toFixed(4)
    // });

