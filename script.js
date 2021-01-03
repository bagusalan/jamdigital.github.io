// objek new Date

// method :
//  getFullYear()
//  getMonth()  -> dihitung berdasarkan index (0 - 11)
//  getDate()
//  getHours()
//  getMinutes()
//  getSeconds()
//  getMilliseconds()
//  getTime()  -> mengembalikan jumlah milidetik sejak 1 januari 1970
//  getDay()  -> index (0-6)

// 

let d;
d = new Date();
d = new Date().getFullYear();
d = new Date().getMonth();
d = new Date().getDate();
d = new Date().getHours();
d = new Date().getMinutes();
d = new Date().getSeconds();
d = new Date().getMilliseconds();
d = new Date().getTime();


// Format tanggal
// tanggal singkat (MM/DD/YY), bulan tidak mengggunakan index
d = new Date("03/20/2020");
d = new Date("03-02-2020");
d = new Date("mar 20 2020");
d = new Date("20 march 2020");
d = new Date("mar,20,2020");
console.log(d);



// mengkonversi tanggal menjadi milidetik
// sama dengan method getTime()
const msec = Date.parse("mar 20,2020");
console.log(msec);

// menkonversi milidetik menjadi tanggal
const date = new Date(msec);
console.log(date);












// Contoh program
// =============================================================
// 1. jam digital
const jamDigital = document.getElementById("jamDigital");
setInterval(function(){
    const time = new Date();
    const jam = time.getHours();
    const menit = time.getMinutes();
    const detik = time.getSeconds();
    
    jamDigital.innerHTML = jam + " : "+ menit + " : " + detik ;

},1000)

// =============================================================


// 2. hitung mundur
// caranya ubah variable tujuan ke tannggal tujuan
// bahasa inggris (january,february,march,april,may,june,july,august,september,october,november,december)
// selain itu ndak usah asw

const p = document.getElementById("waktu")
const tujuan = new Date("oct 25,2020 20:00:00").getTime(); // ubah aja yang ini sesuai format

const hitungMundur = setInterval(function(){
    const waktuSekarang = new Date().getTime();
    
    const selisih = tujuan - waktuSekarang;
    // console.log(selisih); 
    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor(selisih % (1000 * 60 * 60 *24) / (1000 * 60 * 60));
    const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
    const detik = Math.floor(selisih % (1000 * 60) /  1000);

    if(hari != 0) p.innerHTML = "Remaining " + hari + " hari " + jam + " jam " + menit + " menit " + detik + " detik lagi";
    if(hari == 0) p.innerHTML = "Remaining " + jam + " jam " + menit + " menit " + detik + " detik lagi";
    if(hari == 0 && jam == 0)  p.innerHTML = "Remaining " + menit + " menit " + detik + " detik lagi";
    if(hari == 0 && jam == 0 && menit == 0 )  p.innerHTML = "Remaining " + detik + " detik lagi";

    if(selisih <= 0){
        clearInterval(hitungMundur);
        p.innerHTML = "time out";
    }
},1000);
// =============================================================











