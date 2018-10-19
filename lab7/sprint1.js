class Card {
    constructor(id,src) {
      this.id=id;
      this.src=src;
      this.front="card_hs.png";
      this.imghtml= document.createElement("img");
      this.Onclick= this.Onclick.bind(this);
      this.imghtml.addEventListener('click',this.Onclick);
    }

    Onclick(){
      this.imghtml.src=this.src;
    }
}