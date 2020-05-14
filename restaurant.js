// Preserve the restaurant's datas
export class Restaurants {
  constructor(img ,rate, name, owner, presentation, ownerImg, chartDatas, country, city, street, stairs) {
    this.img = img
    this.rate = rate;
    this.name = name;
    this.owner = owner;
    this.presentation = presentation;
    this.ownerImg = ownerImg;
    this.chartDatas = chartDatas;
    this.country = country;
    this.city = city;
    this.street = street;
    this.stairs = stairs
  }
}

// fundamental variables
export const Mizazur = new Restaurants("img/mirazur.jpg", '*** Michelin', 'Mirazur', 'Mauro Colagreco', "Mirazur sits at the foot of a mountain and is housed in a 1930s building looking out over the sea, just inside France's border with Italy. The Argentine-born chef draws inspiration from the region, serving vegetables from his own gardens and other local produce to create colorful...", 'mauro-colagreco.jpg', [45, 46, 56, 87, 102, 111, 140 , 130, 150, 174, 214, 233, 180, 130, 77, 45, 32], 'France', 'Menton', '30 Avenue Aristide Briand, 06500', ['<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>']); 
export const Arpège = new Restaurants("img/arpege.jpg", '*** Michelin', "Arpège", "Alain Passard", "Alain Passard is one of the iconic chefs of France, and has held three Michelin stars since 1996. In his earlier career he became a two Michelin star chef at the tender age of 26 at Casino d’Enghien, in 1986 purchasing an existing restaurant (l’Archetstrate) from celebrated chef Alain Senderens, and renaming it Arpege, after the perfume from Lanvin.", 'alain-passard.jpg', [11, 36, 66, 47, 72, 81, 120 , 135, 130, 160, 174, 173, 180, 130, 77, 45, 32], 'France', 'Paris', '84 Rue de Varenne, 75007', ['<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>']);
export const Septime = new Restaurants("img/septime.jpg", '*** Michelin', "Septime", "Bertand Grébaut", "This is fine dining without the pomp and circumstance or the arrogance. Grébaut is a master at coaxing out the flavors in every ingredient and playing on texture.", 'bertand-grébaut.jpg', [35, 26, 36, 57, 102, 116, 143 , 139, 154, 134, 114, 83, 70, 40, 17, 15, 12], 'France', 'Paris', '80 Rue de Charonne, 75011', ['<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>']);
export const PlazaAthénée = new Restaurants("img/paris-plaza-athenee.jpg", '*** Michelin', "Plaza Athénée", "Alain Ducasse", "Here, Alain Ducasse tells a personal and radical story, continuing the work he began twenty-five years ago. He represents the naturalness cuisine, inspired by the fish-vegetables-cereals trilogy, with the help of his chef Romain Meder.", 'alaind-ducasse.jpg', [25, 15, 17, 27, 32, 41, 50 , 130, 89, 54, 104, 113, 130, 132, 77, 45, 32], 'France', 'Paris', '25 Avenue Montaigne, 75008', ['<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>']);
export const PavillonLedoyen = new Restaurants("img/alleno-paris-au.jpg", '*** Michelin', "Pavillon Ledoyen", "Yannick Alléno", "This Parisian institution – in an elegant pavilion in the Champs - Élysées gardens – has been taken over by Yannick Alléno, who has set about writing a new chapter in its story. The chef creates a tour de force, immediately stamping his hallmark.", 'yannick-alléno.jpg', [55, 59, 56, 47, 62, 81, 120 , 124, 133, 159, 174, 190, 183, 120, 74, 42, 13], 'France', 'Paris', '8 Avenue Dutuit, 75008', ['<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>']);
export const restaurants = [Mizazur, Arpège, Septime, PlazaAthénée, PavillonLedoyen];
export const rate = ['<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>'];


