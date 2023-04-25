import Vayne from "../images/Vayne.png";
import Leblanc from "../images/Leblanc.png";
import Ahri from "../images/Ahri.png";
import Aatrox from "../images/Aatrox.png";
import Katarina from "../images/Katarina.png";
import Kindred from "../images/Kindred.png";
import MasterYi from "../images/MasterYi.png"
import Akali from "../images/Akali.png"
import Akshan from "../images/Akshan.png"
import Alistar from "../images/Alistar.png"
import Amumu from "../images/Amumu.png"
import Anivia from "../images/Anivia.png"
import Annie from "../images/Annie.png"
import Aphelios from "../images/Aphelios.png"
import Ashe from "../images/Ashe.png"
import AurelionSol from "../images/AurelionSol.png"
import Azir from "../images/Azir.png"
import Bard from "../images/Bard.png"
import Belveth from "../images/Belveth.png"
import Blitzcrank from "../images/Blitzcrank.png"
import Brand from "../images/Brand.png"
import Braum from "../images/Braum.png"
import Caitlyn from "../images/Caitlyn.png"

const products = [
  {
    id: "01",
    name: "vayne",
    image: Vayne,
    gender: ["Female"],
    positions: ["Bottom", "Top"],
    species: ["Human"],
    resource: ["Mana"],
    rangeType: ["Ranged"],
    regions: ["Demacia"],
    releaseYear: 2011,
  },

  {
    id: "02",
    name: "leblanc",
    image: Leblanc,
    gender: ["Female"],
    positions: ["Middle"],
    species: ["Human", "Magically Altered"],
    resource: ["Mana"],
    rangeType: ["Ranged"],
    regions: ["Noxus"],
    releaseYear: 2010,
  },

  {
    id: "03",
    name: "ahri",
    image: Ahri,
    gender: ["Female"],
    positions: ["Middle"],
    species: ["Vastayan"],
    resource: ["Mana"],
    rangeType: ["Ranged"],
    regions: ["Ionia"],
    releaseYear: 2011,
  },

  {
    id: "04",
    name: "aatrox",
    image: Aatrox,
    gender: ["Male"],
    positions: ["Top"],
    species: ["Darkin"],
    resource: ["Manaless"],
    rangeType: ["Melee"],
    regions: ["Runeterra", "Shurima"],
    releaseYear: 2013,
  },

  {
    id: "05",
    name: "katarina",
    image: Katarina,
    gender: ["Female"],
    positions: ["Middle"],
    species: ["Human"],
    resource: ["Manaless"],
    rangeType: ["Melee"],
    regions: ["Noxus"],
    releaseYear: 2009,
  },

  {
    id: "06",
    name: "kindred",
    image: Kindred,
    gender: ["Other"],
    positions: ["Jungle"],
    species: ["God", "Spirit"],
    resource: ["Mana"],
    rangeType: ["Ranged"],
    regions: ["Runeterra"],
    releaseYear: 2015,
  },

  {
    id: "07",
    name: "master yi",
    image: MasterYi,
    gender: ["Male"],
    positions: ["Jungle"],
    species: ["Human", "Spiritualist"],
    resource: ["Mana"],
    rangeType: ["Melee"],
    regions: ["Ionia"],
    releaseYear: 2009,
  },

  {
    id: "08",
    name: "akali",
    image: Akali,
    gender: ["Female"],
    positions: ["Middle", "Top"],
    species: ["Human"],
    resource: ["Energy"],
    rangeType: ["Melee"],
    regions: ["Ionia"],
    releaseYear: 2010,
  },

  {
    id: "09",
    name: "akshan",
    image: Akshan,
    gender: ["Male"],
    positions: ["Middle", "Top"],
    species: ["Human"],
    resource: ["Mana"],
    rangeType: ["Ranged"],
    regions: ["Shurima"],
    releaseYear: 2021,
  },

  {
    id: "10",
    name: "alistar",
    image: Alistar,
    gender: ["Male"],
    positions: ["Support"],
    species: ["Minotaur"],
    resource: ["Mana"],
    rangeType: ["Melee"],
    regions: ["Runeterra"],
    releaseYear: 2009,
  },

  {
    id: "11",
    name: "amumu",
    image: Amumu,
    gender: ["Male"],
    positions: ["Jungle","Support"],
    species: ["Undead","Yordle"],
    resource: ["Mana"],
    rangeType: ["Melee"],
    regions: ["Shurima"],
    releaseYear: 2009,
  },

  {
    id: "12",
    name: "anivia",
    image: Anivia,
    gender: ["Female"],
    positions: ["Middle"],
    species: ["God","Spirit"],
    resource: ["Mana"],
    rangeType: ["Ranged"],
    regions: ["Freljord"],
    releaseYear: 2009,
  },

  {
    id: "13",
    name: "annie",
    image: Annie,
    gender: ["Female"],
    positions: ["Middle"],
    species: ["Human","Magicborn"],
    resource: ["Mana"],
    rangeType: ["Ranged"],
    regions: ["Noxus", "Runeterra"],
    releaseYear: 2009,
  },

  {
    id: "14",
    name: "aphelios",
    image: Aphelios,
    gender: ["Male"],
    positions: ["Bottom"],
    species: ["Human","Spiritualist"],
    resource: ["Mana"],
    rangeType: ["Ranged"],
    regions: ["Targon"],
    releaseYear: 2019,
  },

  {
    id: "15",
    name: "ashe",
    image: Ashe,
    gender: ["Female"],
    positions: ["Bottom","Support"],
    species: ["Human","Iceborn"],
    resource: ["Mana"],
    rangeType: ["Ranged"],
    regions: ["Freljord"],
    releaseYear: 2009,
  },

  {
    id: "16",
    name: "azir",
    image: Azir,
    gender: ["Male"],
    positions: ["Middle"],
    species: ["God-Warrior"],
    resource: ["Mana"],
    rangeType: ["Ranged"],
    regions: ["Shurima"],
    releaseYear: 2014,
  },

  {
    id: "17",
    name: "bard",
    image: Bard,
    gender: ["Male"],
    positions: ["Support"],
    species: ["Celestial"],
    resource: ["Mana"],
    rangeType: ["Ranged"],
    regions: ["Runeterra"],
    releaseYear: 2015,
  },

  {
    id: "18",
    name: "belveth",
    image: Belveth,
    gender: ["Female"],
    positions: ["Jungle"],
    species: ["Void-Being"],
    resource: ["Manaless"],
    rangeType: ["Melee"],
    regions: ["Void"],
    releaseYear: 2022,
  },

  {
    id: "19",
    name: "blitzcrank",
    image: Blitzcrank,
    gender: ["Other"],
    positions: ["Support"],
    species: ["Golem"],
    resource: ["Mana"],
    rangeType: ["Melee"],
    regions: ["Zaun"],
    releaseYear: 2009,
  },

  {
    id: "20",
    name: "brand",
    image: Brand,
    gender: ["Male"],
    positions: ["Support"],
    species: ["Human","Magically Altered"],
    resource: ["Mana"],
    rangeType: ["Ranged"],
    regions: ["Freljord","Runeterra"],
    releaseYear: 2011,
  },

  {
    id: "21",
    name: "braum",
    image: Braum,
    gender: ["Male"],
    positions: ["Support"],
    species: ["Human","Iceborn"],
    resource: ["Mana"],
    rangeType: ["Melee"],
    regions: ["Freljord"],
    releaseYear: 2014,
  },

  {
    id: "22",
    name: "aurelionsol",
    image: AurelionSol,
    gender: ["Male"],
    positions: ["Middle"],
    species: ["Celestial","Dragon"],
    resource: ["Mana"],
    rangeType: ["Ranged"],
    regions: ["Runeterra", "Targon"],
    releaseYear: 2016,
  },

  {
    id: "23",
    name: "caitlyn",
    image: Caitlyn,
    gender: ["Female"],
    positions: ["Bottom"],
    species: ["Human"],
    resource: ["Mana"],
    rangeType: ["Ranged"],
    regions: ["Piltover"],
    releaseYear: 2011,
  },


];

export default products;
