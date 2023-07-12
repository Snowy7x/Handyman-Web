import {Hero} from "@/components";
export default function Home() {
    return (
        <div className="page">
            <Hero animes={[
                {
                    Title: "Gintama",
                    Image: "https://images3.alphacoders.com/713/713053.png",
                    Description: "The Amanto, aliens from outer space, have invaded Earth and taken over feudal Japan. As a result, a prohibition on swords has been established, and the samurai of Japan are treated with disregard as a consequence.",
                    genres: ["Action", "Sci-Fi", "Comedy", "Historical", "Parody", "Samurai", "Shounen"],
                    Id: "1",
                },
                {
                    Title: "Naruto",
                    Image: "https://wallpaperaccess.com/full/8008.jpg",
                    Description: "Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja.",
                    genres: ["Action", "Adventure", "Comedy", "Super Power", "Martial Arts", "Shounen"],
                    Id: "20",
                },
                {
                    Title: "One Piece",
                    Image: "https://images5.alphacoders.com/606/606284.jpg",
                    Description: "Gol D. Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world.",
                    genres: ["Action", "Adventure", "Comedy", "Super Power", "Drama", "Fantasy", "Shounen"],
                    Id: "21",
                },
                {
                    Title: "Bleach",
                    Image: "https://wallpaperaccess.com/full/192590.jpg",
                    Description: "Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while protecting Ichigo's family from the assailant.",
                    genres: ["Action", "Adventure", "Comedy", "Super Power", "Supernatural", "Shounen"],
                    Id: "22",
                },
                {
                    Title: "My Hero Academia",
                    Image: "https://images4.alphacoders.com/819/819837.png",
                    Description: "The appearance of \"quirks,\" newly discovered super powers, has been steadily increasing over the years, with 80 percent of humanity possessing various abilities from manipulation of elements to shapeshifting.",
                    genres: ["Action", "Comedy", "Super Power", "School", "Shounen"],
                    Id: "23",
                },
            ]} />
        </div>
    )
}
