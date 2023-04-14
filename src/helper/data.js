import avatar from "../assets/avatar-2.avif";
import blackPanther from "../assets/blackPanther.jpg";
import kingKong from "../assets/kingkong.jpg";
import pathaan from "../assets/pathaan.jpg";
import robot from "../assets/robot.jpg";
import ironMan from "../assets/iron-man.jpg";
import thor from "../assets/thor.avif";
import rrr from "../assets/rrr.avif";

const movieData = [
    {
        id: 1,
        name: "Avatar: The Way of Water",
        description: 'Set more than a decade after the events of the first film, "Avatar The Way of Water" begins to tell the story of the Sully family (Jake, Neytiri and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive and the tragedies they endure.',
        rating: 8.7,
        pic: avatar,
        stdRate: 100,
    },
    {
        id: 2,
        name: "King Kong",
        description: "Peter Jackson`s remake of the 1933 classic follows a filmmaker and his team who sail out to Skull`s Island and encounter a giant ape.",
        rating: 7,
        pic: kingKong,
        stdRate: 200,
    },
    {
        id: 3,
        name: "Pathaan",
        description: "A soldier caught by enemies and presumed dead comes back to complete his mission, accompanied by old companions and foes.",
        rating: 9.5,
        pic: pathaan,
        stdRate: 400,
    },
    {
        id: 4,
        name: "Robot 2",
        description: "After mobiles start mysteriously flying out of the hands of people in Chennai, Dr Vaseegaran summons his trusted robot Chitti to ward off the bird-shaped ",
        rating: 6.4,
        pic: robot,
        stdRate: 60,
    },
    {
        id: 5,
        name: "Black Panther",
        description: 'A voice from a young boy asks to tell him a story. The adults voice tells the story of "Vibranium." A gigantic meteorite with the toughest metal: vibranium',
        rating: 8,
        pic: blackPanther,
        stdRate: 160,
    },
    {
        id: 6,
        name: "Iron Man",
        description: 'A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force ',
        rating: 9,
        pic: ironMan,
        stdRate: 300,
    },
    {
        id: 7,
        name: "Thor",
        description: 'This epic adventure spans the Marvel Universe; from present day Earth to the realm of Asgard. At the center of the story is The Mighty Thor, a powerful but arrogant warrior whose reckless actions reignite an ancient war.',
        rating: 7.6,
        pic: thor,
        stdRate: 250,
    },
    {
        id: 8,
        name: "RRR",
        description: 'RRR is a period drama set in India during the 1920s, revolving around the inspiring journey of two of India`s freedom fighters - Alluri Sitarama Raju and Komaram Bheem.',
        rating: 8.3,
        pic: rrr,
        stdRate: 220,
    },

]

export default movieData;