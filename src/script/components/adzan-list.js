import "./adzan-item.js";

class adzanList extends HTMLElement {
    constructor(){
        super();
    }

    set jadwal(jadwal){
        this._jadwal = jadwal;
        this.render();
    }

    renderError(message){
        this.innerHTML += `
            <h2>${message}</h2>
        `;
    }

    render(){
        this.innerHTML = ``;
        this._jadwal.forEach(waktu => {
            const adzanItemElement = document.createElement("adzan-item");
            adzanItemElement.waktu = waktu;
            this.appendChild(adzanItemElement);
        })
    }
}

customElements.define("adzan-list", adzanList);