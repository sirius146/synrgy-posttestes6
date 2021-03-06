// function looping() {
//     for (let i = 0; i < 4; i++) {
//       console.log(i); // 0 1 2 3 4 5
//     }
//   }
//   looping();

//multiline string

const multiLine = 
    'Kalimat satu \n \
    kalimat dua\n \
    kalimat tiga'
console.log(multiLine);

//interpolation
const penjumlahan = `Total:  ${1+2+3}`

console.log(penjumlahan)

//variabel
let makananFavorit = "Nasi Goreng"
console.log(makananFavorit)
makananFavorit = "Mie Goreng"
console.log(makananFavorit)

// const nama = "Atika Dwi Hanun Amalia"
// console.log(nama)
// nama = "Atika Tunggal hanun Amalia" //tidak bisa karena bernilai constan
// console.log(nama)

//arrow function
const halo = (name) => {
    console.log(`hai namamu, ${name} kan?`)
}

halo("ani")

//class 

class Namalengkap {
    constructor (namaAwal, namaAkhir) {
        this.namaAwal = namaAwal
        this.namaAkhir = namaAkhir
    }

    greet() {
        console.log(`Halo ${this.namaAwal} nama lengkapmu ${this.namaAwal} ${this.namaAkhir}.`)
    }

  }
 
//destructuring
const buku = {
    judul: "Buku 1",
    penulis: "Penulis 1",
    infoLain: {
        halaman:  "148 halaman",
        penerbit: "gramedia"
    }
}

const {judul, penulis, infoLain } = buku
console.log(judul, penulis)
console.log(infoLain)
const { halaman, penerbit} = infoLain

//ternaryoperator
let x = 10
let y = 20
const cek = (x > y) ? "Benar" : "Salah"
console.log(cek)

//map
let absens = [
    { noUrut: 1, nama:"Anya NyaNya", nilai: 9.3},
    { noUrut:2, nama: "Bambam MbamMbam", nilai: 6.0},
    {noUrut:3, nama: "ChaCha ChanChan", nilai: 9.5}
]

const data = absens.map(absen => absen.nama)
console.log(data)

//filter
const filterNilai = absens.filter(absen => absens.nilai > 8)
console.log(filterNilai)

//find
const temukanNilai = absens.find(absen => absen.rating == 6.0 )
console.log(temukanNilai)

//spread
buah = ["apel","jeruk","semangka"]
buahTambahan = [...buah, "melon", "durian"]
console.log(buahTambahan)

//rest
const nilai = [1,2,3,4,5]
const [satu,dua,...rest] = nilai;
console.log(dua)
console.log(rest)

//defaultparameter

function pertambahan (a=4, b=7) {
    return a+b
}

console.log(pertambahan())
console.log(pertambahan(6,9))