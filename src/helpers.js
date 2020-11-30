/**
 * Found this on Stackoverflow https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 * Shuffles array in place. ES6 version
 * @param {Array} a - An array containing the items.
 */
const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const hatchArray = [
  {
    id: "hatch-1",
    nr: 1,
    img: "./img/1.jpg",
    text:
      "1. Remember on the Första Advent in Skellefteå when I set the apartment on fire? We still can't go back, but it was worth it! Get a bag of CHOCOLATE and let's remember that lovely and hot day!",
    open: false
  },
  {
    id: "hatch-2",
    nr: 2,
    img: "./img/2.jpg",
    text:
      "2. We don't have a tree this year // And that sucks // Sorry, I don't have a rhyme ear // That's a lot of ducks. // Use this to decorate // Butts.",
    open: false
  },
  {
    id: "hatch-3",
    nr: 3,
    img: "./img/3.jpg",
    text:
      "3. FUTURE FACT! On the third day of December in the year 2055, Phantomen will fight an insane Alien Tomte and be sponsored by Coca Cola. This movie will make $50 Billion at the box office. Grab a bag of CHOCOALTE and think about that for a second.",
    open: false
  },
  {
    id: "hatch-4",
    nr: 4,
    img: "./img/4.jpg",
    text:
      "4. STANDUP #1: So... Covid? Am I right? When they first started to make us say Covid instead of Corona, I thought it was a new TikTok site where you meet people to make videos together! I was wrong and I really got Covid.",
    open: false
  },
  {
    id: "hatch-5",
    nr: 5,
    img: "./img/5.jpg",
    text:
      "5. Brutus is fancy // Don't be late // Go on a Brutus Date // Get some CHOCOLATE // Enjoy it with a mate",
    open: false
  },
  {
    id: "hatch-6",
    nr: 6,
    img: "./img/6.jpg",
    text:
      "6. You've been visited by the Christmas Chad! Live by his example and be nice and get hugs from all members in your house!",
    open: false
  },
  {
    id: "hatch-7",
    nr: 7,
    img: "./img/7.jpg",
    text:
      "7. It's a random Monday // But lets make it a FUNday // Choose a place to eat // And let's have a feast! (Coupon for paid dinner; must use today!)",
    open: false
  },
  {
    id: "hatch-8",
    nr: 8,
    img: "./img/8.jpg",
    text:
      "8. This picture makes no sense // Eat some CHOCOLATE // Ponder the Meaning // And wonder if Ian is really this dense. ",
    open: false
  },
  {
    id: "hatch-9",
    nr: 9,
    img: "./img/9.jpg",
    text:
      "9. STANDUP #2: Because of Covid, I can't have people sit on my lap, so I hired someone to do it for me. But after a day or two, I realized they put a dummy there. No one noticed the difference. My job has no meaning. That happened.",
    open: false
  },
  {
    id: "hatch-10",
    nr: 10,
    img: "./img/10.jpg",
    text:
      "10. We were so poor, we used to eat toy deers // But now we have some money and instead of beers // lets get CHOCOLATE by stealing from cashiers! Rob a grocery store.",
    open: false
  },
  {
    id: "hatch-11",
    nr: 11,
    img: "./img/11.jpg",
    text:
      "11. The captain of this startship orders you to take a bath! Light a candle, fill the tub with warm water, and sit in it! That's an order!",
    open: false
  },
  {
    id: "hatch-12",
    nr: 12,
    img: "./img/12.jpg",
    text:
      "12. The Christmas Brutus is here. Pick a movie (any movie), and lets have a fun movie night! Popcorn, läsk, cuddles, and warmth!",
    open: false
  },
  {
    id: "hatch-13",
    nr: 13,
    img: "./img/13.jpg",
    text:
      "13. Today is Lucia. I have the ingredients. Wanna bake some Lussekatter? Y / N?",
    open: false
  },
  {
    id: "hatch-14",
    nr: 14,
    img: "./img/14.jpg",
    text:
      "14. How beautiful we look! // Lets go out in the town // No more boring books // Date night and a city to burn down! (wanna go out on a date?) // Ian sucks at rhymes. Please no more rhymes.",
    open: false
  },
  {
    id: "hatch-15",
    nr: 15,
    img: "./img/15.jpg",
    text:
      "15. It's been a while since you ate some chocolate. Lets fika and remember the snow!",
    open: false
  },
  {
    id: "hatch-16",
    nr: 16,
    img: "./img/16.jpg",
    text:
      "16. STANDUP #3: Covid made me so poor, I got a side gig as a Buddah at a Chinese Restaurat. I realized, patting my belly was better social distancing AND reduced sexual harrassment complaints!",
    open: false
  },
  {
    id: "hatch-17",
    nr: 17,
    img: "./img/17.jpg",
    text:
      "17. While I don't have a sweater to warm your elbows // I do have something that will warm your toes",
    open: false
  },
  {
    id: "hatch-18",
    nr: 18,
    img: "./img/18.jpg",
    text:
      "18. FUTURE FACT! In the year 2099, there will be no snow and all trees will look like this. How depressing! Lets eat chocolate!",
    open: false
  },
  {
    id: "hatch-19",
    nr: 19,
    img: "./img/19.jpg",
    text:
      "19. How embarassing! I forgot to write something cool for today! Um... bag of chocolate?",
    open: false
  },
  {
    id: "hatch-20",
    nr: 20,
    img: "./img/20.jpg",
    text:
      "20. You have just been visited by the Christmas Ian! It's been a while! Grab TWO bags of chocolate! What an enabler!!",
    open: false
  },
  {
    id: "hatch-21",
    nr: 21,
    img: "./img/21.jpg",
    text:
      "21. Um... 21. What can I write for 21st day of December...? Hmmm... happy- no. Have a- that's dumb. Hmmm.",
    open: false
  },
  {
    id: "hatch-22",
    nr: 22,
    img: "./img/22.jpg",
    text:
      "22. Adam Driver couldn't make it today // I feel so Betrayed // No worries though my dear // I got the next best thing",
    open: false
  },
  {
    id: "hatch-23",
    nr: 23,
    img: "./img/23.jpg",
    text:
      "23. Dinner dinner dinner. Go out to eat with me. Your choice!",
    open: false
  },
  {
    id: "hatch-24",
    nr: 24,
    img: "./img/24.jpg",
    text:
      "24. Glad Jul min älskling! Vi borde äta svinnmycket och myser som faaaan. Är du med?",
    open: false
  },
];

export const createCalendar = () => shuffle(hatchArray);
