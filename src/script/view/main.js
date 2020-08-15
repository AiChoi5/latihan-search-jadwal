import '../components/adzan-list.js';
import '../components/cari-data.js';
import DataSource from '../data/data-source.js';
//import '../components/clock.js';

//Get All Kota
const main = () => {

    let adzanListElement = document.querySelector("adzan-list");
    let adzanItemElement = document.querySelector("adzan-item");
    const search = document.querySelector("cari-data");
    let kota    = document.getElementById('kota');
    let tanggal = document.getElementById('tanggal');

    DataSource.getKota();

    const searchBtn = async () => {
        try{
            const result = await DataSource.searchJadwal(kota.value ,tanggal.value);
            renderResult(result);
            console.log("haloooo");
        } catch {
            fallbackResult();
        }
    }

    const renderResult = results => {
        adzanListElement.jadwal = results;
    };
    const fallbackResult = message => {
        adzanListElement.renderError(message);
    };

    search.clickEvent = searchBtn;

}

export default main;