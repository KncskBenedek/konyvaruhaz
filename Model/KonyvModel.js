class KonyvModel {
    #konyvekTomb = [];

    constructor() {
     }

    adatBe(vegpont, myCallBack) {
        fetch(vegpont, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                this.#konyvekTomb = data.konyv;
                myCallBack(this.#konyvekTomb);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    edit(adat){
        console.log("editke " + adat);
    }

    del(adat){
        console.log("el törölget " + adat);
    }
    buy(adat){
        console.log("vásrolgat " + adat);
    }
}

export default KonyvModel;