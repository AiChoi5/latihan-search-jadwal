const baseUrl = `https://api.banghasan.com/sholat/format/json`;

class DataSource {
    static getKota() {
        return fetch(`${baseUrl}/kota`)
        .then(res => {
            return res.json();
        })
        .then(json => {
            if (json.kota) {
                Promise.resolve(json.kota);
                let kota = document.getElementById('kota');
                for (let index = 0; index < json.kota.length; index++){
                    const r            = json.kota[index];
                    let   option       = document.createElement("option");
                        option.text  = r.nama;
                        option.value = r.id;
                        kota.appendChild(option);
                }
            } else {
                Promise.reject(`Maaf tidak ada`);
            }
        })
        .catch(err => {
            console.log("err", err);
            document.getElementById("messages").html = 'Maaf, tidak bisa';
        });
    }
    static searchJadwal() {
        return fetch(`${baseUrl}/jadwal/kota/${kota.value}/tanggal/${tanggal.value}`)
        .then(res => {
            return res.json();
        })
        .then(json => {
            if (json.jadwal.data) {
                return Promise.resolve(json.jadwal.data);
            } else {
                return Promise.reject(`Maaf tidak ada`);
            }
        })
        .catch(err => {
            console.log("err", err);
            document.getElementById("messages").html = 'Maaf, tidak bisa';
        });
    }
}

export default DataSource;