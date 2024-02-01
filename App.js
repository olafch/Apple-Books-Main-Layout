import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { FullGenrePart } from "./components/GenrePart/FullGenrePart";
import { DescriptionMenu } from "./components/CurrentMenuPart/DescriptionMenu";
import { MainMenuButtonGroup } from "./components/MainMenuButtonGroup/MainMenuButtonGroup";

export default function App() {
  return (
    <SafeAreaView style={styles.layoutContainer}>
      <ScrollView
        bounces={false}
        stickyHeaderIndices={[0]}
        stickyHeaderHiddenOnScroll
      >
        <DescriptionMenu />
        {Object.keys(booksNames).map((genre, index) => {
          return (
            <FullGenrePart
              key={index}
              genre={genre}
              booksTitles={booksNames[genre]}
            />
          );
        })}
      </ScrollView>
      <MainMenuButtonGroup
        buttons={[
          "Reading Now",
          "Library",
          "Bookstore",
          "Audiobooks",
          "Search",
        ]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
  },
});

genres = [
  "Nonfiction",
  "Classics",
  "Libros en Español",
  "Comedy",
  "Horror",
  "Science Fiction",
  "English books",
  "Poetry",
];

const booksNames = {
  Nonfiction: [
    "Sapiens: A Brief History of Humankind",
    "Educated",
    "Becoming",
    "The Body: A Guide for Occupants",
    "The Splendid and the Vile",
    "Born a Crime: Stories from a South African Childhood",
    "The Wright Brothers",
    "In Cold Blood",
    "The Immortal Life of Henrietta Lacks",
    "Thinking, Fast and Slow",
    "Outliers: The Story of Success",
    "The Sixth Extinction: An Unnatural History",
  ],
  Classics: [
    "Pride and Prejudice",
    "To Kill a Mockingbird",
    "The Great Gatsby",
    "Moby-Dick",
    "Crime and Punishment",
    "War and Peace",
    "The Catcher in the Rye",
    "Great Expectations",
    "The Adventures of Huckleberry Finn",
    "Jane Eyre",
  ],
  "Libros en Español": [
    "Cien años de soledad",
    "Don Quijote de la Mancha",
    "Ficciones",
    "La sombra del viento",
    "Rayuela",
    "El amor en los tiempos del cólera",
    "El laberinto de los espíritus",
    "La casa de los espíritus",
    "El tiempo entre costuras",
  ],
  Comedy: [
    "Catch-22",
    "Good Omens",
    "The Hitchhiker's Guide to the Galaxy",
    "Bridget Jones's Diary",
    "Three Men in a Boat",
    "A Confederacy of Dunces",
    "Me Talk Pretty One Day",
    "The World According to Garp",
    "Lamb: The Gospel According to Biff, Christ's Childhood Pal",
    "Portnoy's Complaint",
    "The Rosie Project",
    "Bossypants",
  ],
  Horror: [
    "Dracula",
    "Frankenstein",
    "The Shining",
    "It",
    "The Haunting of Hill House",
    "Pet Sematary",
    "The Exorcist",
    "The Call of Cthulhu",
    "Hell House",
    "The Silence of the Lambs",
    "The Turn of the Screw",
  ],
  "Science Fiction": [
    "Dune",
    "Neuromancer",
    "Foundation",
    "Snow Crash",
    "Brave New World",
    "The War of the Worlds",
    "Ender's Game",
    "The Left Hand of Darkness",
    "Hyperion",
    "Fahrenheit 451",
    "The Martian",
  ],
  "English books": [
    "Pride and Prejudice",
    "To Kill a Mockingbird",
    "1984",
    "The Great Gatsby",
    "Moby-Dick",
    "Catch-22",
    "The Catcher in the Rye",
    "Great Expectations",
    "Wuthering Heights",
    "The Lord of the Rings",
    "Alice's Adventures in Wonderland",
    "Jane Eyre",
  ],
  Poetry: [
    "The Waste Land",
    "Leaves of Grass",
    "The Divine Comedy",
    "The Iliad",
    "The Odyssey",
    "Sonnets",
    "Ariel",
    "Howl and Other Poems",
    "Paradise Lost",
    "The Aeneid",
    "The Canterbury Tales",
    "Songs of Innocence and of Experience",
  ],
};
