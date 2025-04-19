//String
console.log('Hello World');
console.log('Yofi Yudistian');
console.log("Yofi Yudistian");

//variable
const hp = 'oppo';      //const tidak bisa diubah
const myName = 'Yofi Yudistian';
let laptop = 'asus';    // let bisa diubah
var galon = 'aqua'

console.log(hp)
console.log(myName)
console.log(laptop)
console.log(galon)

//hp = 'smasnug';
//console.log(hp)

laptop = 'ADVAN';
console.log(laptop)

const myNamee = 'agung'
console.log(myNamee);


// concatenation (gabung 2 variabel)
const firstName = 'kofi'
const lastName = 'Yudistian'
const fullName = firstName +  ' ' + lastName;

console.log(firstName)
console.log(lastName)
console.log(fullName)

let namaKu = 'Yofi';
let makananFvorit = 'mie ayam';
let cetak = 'Hallo namaku' + ' ' + namaKu + ' dan makanan favoritku adalah ' + makananFvorit;
console.log(cetak);


//number
const a = 10;
const b = 5;
const c = a+b;
const d = a-b;
const e = a/b;
const f = a*b;
const g = a%b;
const z = 10+10*10;
const x = (10+10)*10;
const y = 0.87
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(z);
console.log(x);
console.log(y);

const apel = 5000;
const pisang = 10000;
const total = 3*apel + 2*pisang - 10000;
console.log(total);

const apel1 = 5000;
const pisang1 = 10000;
const totPisang1 = 2;
const totApel1 = 3;
const total1 = apel1*totApel1 + pisang1*totPisang1;
const harga = total1 - total1*0.1;
console.log(harga);

//boolean
const isSubs = true;
const tes = 'a' !== "A"
const tes1 = 'a' === "A"
const tes2 = 20 > 10
const tes3 = 20 < 10
const tes4 = 20 >= 10
const tes5 = 20 <= 10
console.log(tes)
console.log(tes1)
console.log(tes2)
console.log(tes3)
console.log(tes4)
console.log(tes5)


//log operator
const umurKu = 19;
const driveCar = 17;
const adaSim = false;
//const boleh = umurKu >= driveCar && adaSim === true;


const lagiTes = false;
//const boleh = adaSim === true || lagiTes === true


const mabuk = true;
const boleh = !mabuk;
console.log(boleh);

const umurAnna = 15;
const bioskop = 17;
const adaOrtu = true;
const nonton = umurAnna >= bioskop || adaOrtu === true;
console.log(nonton);

//object
const productDetail = 
{
    name: 'gedang',
    warna: 'kuning',
    harga: 10000
}

const person = 
{
    name: 'agung',
    umur: 80,
    tahunLahir : 1998,
    kerja : true,
}

console.log(productDetail)
console.log(productDetail.warna)
console.log(person)
console.log(person.name + " lahir pada tahun " + person.tahunLahir);

