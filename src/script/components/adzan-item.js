class adzanItem extends HTMLElement {
    constructor(){
        super();
    }

    set waktu(waktu){
        this._waktu = waktu;
        this.render();
    }
    
    render(){
        this.innerHTML = `       
            <style>
                .waktuBottom {
                    background-color:rgb(29, 29, 29);
                    font-size:36px;
                    color:white;
                }
                .ket {
                    font-size:24px;
                }
                .jadwalWaktu div {
                    padding:5px;
                    text-align:center;
                    flex-basis:20%;
                }
            </style> 
            <div class="ket waktuBottom" id="jadwal">
             <div id="subuh">${this._waktu.subuh}</div>
             <div id="dzuhur">${this._waktu.dzuhur}</div>
             <div id="ashar">${this._waktu.ashar}</div>
             <div id="maghrib">${this._waktu.maghrib}</div>
             <div id="isya">${this._waktu.isya}</div>
            </div>
        `;
    }
}

customElements.define("adzan-item", adzanItem);