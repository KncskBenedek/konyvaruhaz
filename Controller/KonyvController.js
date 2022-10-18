import KonyvekView from "../View/KonyvekView.js";
import KonyvModel from "../Model/KonyvModel.js";
import KonyvekPublicView from "../View/konyvekPublicView.js";
class KonyvController {
    constructor(
        
    ) {
        this.public();
       
    }
    admin(){
        const konyvmodel = new KonyvModel();
        konyvmodel.adatBe("../adat.json", this.konyvAdatok);
        $(window).on("delete", (event)=>{
            konyvmodel.del(event.detail);
        });
        $(window).on("edit", (event)=>{
            konyvmodel.edit(event.detail);
        })        
    }
    public(){
        const konyvmodel = new KonyvModel();
        konyvmodel.adatBe("../adat.json", this.konyvPublicAdatok);
        $(window).on("vasarlas", (event)=>{
            konyvmodel.buy(event.detail);
        }) 

    }
    konyvPublicAdatok(tomb){
        let szuloElem = $('main');
        new KonyvekPublicView(tomb,szuloElem);
    }
    konyvAdatok(tomb) {
        let szuloElem = $('main');
        new KonyvekView(tomb,szuloElem);
    }
}

export default KonyvController;