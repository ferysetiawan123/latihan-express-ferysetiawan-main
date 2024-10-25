const mongoose = require("mongoose");

const stok_idSchema= new mongoose.Schema({
    produk_id:{
        type: ObjectId,

    },
    jumlah : {
        type : Number,
        
    },
    tanggal_update:{
        type: Date,
        
    },
    keterangan:{
        type : String,
    },
    lokasi :{
        type: String,
    }
});

const Mahasiswa = mongoose.model('stok', mahasiswaSchema);
module.exports = Mahasiswa;