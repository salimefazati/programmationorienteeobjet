// class.crée la classe DOCUMENT GRACE AU MOT-clé class 
class Document {
    // definissons le constructeur de le classe grace au mot-clé constructor
    constructor(titre, nombePage,auteur){
        this.titre = titre;
        this.nombePage = nombePage;
        this.auteur = auteur;
    }
//Méthode description de la classe Document 
Description(){
    console.log("le titre du document est", this.titre);
    console.log("l'auteur est ", this.auteur);
    console.log("le document contient ", this.nombePage);

}
}

// crée plusieur document similaire à partir du modéle de document 
let documentHtml= new Document("introduction au HTML", 35, "nourdine combo");
let documentCss= new Document("Apprendre le Css", 15, "ali fahar");
let documentJavascript= new Document ("introduction au Javascript", 55, "Nissay abdou" );
let documentMysql= new Document("Apprendre MySQL",35, "fatima ali");


//crée plusieur document similaire à partir du modéle de Document
let documentHtml1 =new Document ("introduction au HTML" ,35, "nourdine combo");

//classe enfant livre étendu de la classe Document
class Livre extends Document{
   // constructor de la classe Livre
        
   constructor(titre, nombePage,auteur, maisonEdition) {
    // Propriétés héritées de la classe parent Document
    // super() appelle au constructeur de la parent Document
    super(titre,nombePage,auteur);
    //propriété spécifique de la classe enfant LIVRE
    this.maisonEdition = maisonEdition;
   }
   // Méthode spécifique à la classe Livre
   convertirPdf(){
    console.log("je convertis le Livre en PDF.");
   }
}

//crée plusieurs  exemplaires de Livre.
// En programmation , on dit : je crée une instance  de la classe  Livre
let LivreInformatique = new Livre ("Information c'est facile", 45, "Bcar koutsi", "Ylang edition");