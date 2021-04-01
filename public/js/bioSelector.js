const text = document.querySelector('#biotext');
const link = document.querySelector('#biolink');
let en = true;

link.addEventListener("click", function() {
    if(en) {
        text.textContent = "Der Künstler Kaso baut in der Gestaltung seiner Musik auf eine Mischung aus R&B, Hip-Hop, Funk, Jazz und Funk-Rock. In seinem Schaffen lässt sich das junge Talent aber nicht nur von Musikrichtungen, sondern auch vom Tanzstil ”Krump” inspirieren, der fest in seinen Werken verankert ist. Kaso nutzt seine kreativen Fähigkeiten im Bereich ”Gesang”, “Songwriting”, “Tanz” und “Dichtung” als Träger seiner Musik. Mit 20 begann der Musiker, eigene Songs zu produzieren. Drei Jahre später folgte sein Umzug nach Los Angeles, Kalifornien, der einen erheblichen Einfluss auf sein Weltbild hatte, welcher sich auch in seiner Musik bemerkbar macht. Kasos starker Sinn für Individualität hat ihn schon immer herausstechen lassen, was auch sein Umfeld früh bemerkt hat. Bereits in seiner Jugend war Kaso dafür bekannt, nicht in das typische Stereotyp zu passen. Er zeichnete sich stets durch die Kunstformen aus, von denen er sich inspirieren ließ, den Stil, den er ausdrückte, und durch die Art, wie er sich selbst trug. “Ein frischer Sound ist das, was ich in die Welt der Kunst bringen möchte”, sagt Kaso. “Ich möchte etwas Neues beisteuern.”";
        link.textContent = "View English Bio";
        en = false;
    } else {
        text.textContent = "German artist, Kaso, uses a blend of R&B, Hip-Hop, Funk, Jazz, and Funk-Rock to craft his music. The young talent has been influenced by the dance style Krump, which manifests throughout his work. Kaso harnessed his creative abilities of singing, songwriting, dancing and poetry to make his music come into fruition. By the age of 20, the artist began producing original content on his own. Having moved to Los Angeles, California three years later made another impact on his world view which has transpired into his music. Kaso’s strong sense of individuality has made him stand out in society in a way that his peers have noticed. In his youth, Kaso has been known for not fitting into the typical stereotype. He always stood out because of the artforms he drew inspiration from, the style he expressed and the way he carried himself. “A fresh sound is what I want to bring to the world of art,” Kaso says. “I want to bring something new to the table.”";
        link.textContent = "View German Bio";
        en = true;
    }
})

