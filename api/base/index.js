import axios from 'axios';

const base = 'https://pruebasproyecto12345.000webhostapp.com/';

class Consulta {
    constructor(url, baseUrl) {
        this.url = url;
        this.baseUrl = baseUrl || base;
        this.consulta = axios.create({ baseURL: this.baseUrl });
    }
    get() {
        return this.consulta({ url: this.url });
    }
    getOne(id) {
        return this.consulta({ url: this.url + '/' + id });
    }

    post(val) {
        return this.consulta({ url: this.url, data: val, method: 'post' });
    }

    put(val, id) {
        return this.consulta({ url: this.url + '/' + id, data: val, method: 'put' });
    }

    delete(id) {
        return this.consulta({ url: this.url + '/' + id, method: 'delete' });
    }
}

export default Consulta;