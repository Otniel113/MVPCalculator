function cekValid(){
    var kill = parseInt(document.getElementById("kill").value);
    var death = parseInt(document.getElementById("death").value);
    var assist = parseInt(document.getElementById("assist").value);
    var gold = parseInt(document.getElementById("gold").value);
    var minutes = document.getElementById("minutes").value;
    var teamfight = document.getElementById("teamfight").value;
    var win_lose = document.getElementById("win_lose").value;

    if (kill === "" || death === "" || assist === "" || 
        gold === "" || minutes === "" || teamfight === ""){
        alert("Masih ada yang kosong");
    }else{
        if (kill < 0 || death < 0 || assist < 0 || gold < 0 || teamfight < 0){
            alert("Tolong masukkan bilangan lebih daripada 0");
        }else{
            if (teamfight > 100){
                alert("Angka teamfight participation maksimal adalah 100");
            }else{
                var gpm = gold/minutes;
                var win_bin = 0;
                if (win_lose == "Win"){
                    win_bin = 1;
                }else{
                    win_bin = 0;
                }
                var output = calculateMVP(kill, death, assist, gpm, teamfight, win_bin);
                alert(output);
            }
        }
    }
}

function calculateMVP(kill, death, assist, gpm, teamfight, win_bin){
    var score = 2.5837641270148257 + 0.27109702 * kill - 0.32408744 * death + 0.20936271 * assist + 0.00331038 * gpm + 0.02022654 * teamfight - 0.05238146 * win_bin;
    if (score < 3.0){
        score = 3.0;
    }
    return ("Point Anda adalah " + score.toFixed(1));
}