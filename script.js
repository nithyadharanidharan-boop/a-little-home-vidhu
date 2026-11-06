
// ==========================================
// A LITTLE HOME - VIDHU'S BIRTHDAY WEBSITE
// ==========================================

const birthdayMusic = document.getElementById("birthdayMusic");
const musicButton = document.getElementById("musicButton");
const startButton = document.getElementById("startButton");

const storySection = document.getElementById("story");
const storyText = document.getElementById("storyText");
const nextButton = document.getElementById("nextButton");
const storyProgress = document.getElementById("storyProgress");

const homeSection = document.getElementById("home");
const finalSection = document.getElementById("final");

// ==========================================
// YOUR ORIGINAL BIRTHDAY MESSAGE
// ==========================================

const chapters = [

    {
        title: "The Unexpected Beginning",
        message: `First of all, 🎁🥳 HAPPIEST BIRTHDAY, VIDHU! 🫀🕊️❤️

Since childhood, I’ve always wanted a little sister, but I never had one. And then you came into my life in the most unexpected way. 👯‍♀️`
    },

    {
        title: "When Strangers Became Close",
        message: `Honestly, during our first year, when I first saw you, I thought you had so much attitude! I didn’t even like you at first. 😂 But who knew that one day you would become someone so special to me?

One day, we met in the GD room because of Daniel, and that was when I started feeling a little comfortable around you. And from the very next day, I don’t know why, but I started wanting to see you every single day. We started meeting daily, spending time together, and slowly became close.`
    },

    {
        title: "A Memory That Became Home",
        message: `Then came the day we took a picture together. That picture became one of my favourite pictures of us, and I even posted it on my private account with these beautiful lines:

Aali pol suzhnthidum
Anbillaana veedu ithu
Or uyir polavae
Naangal vazhum koodu ithu 🏡🫀🕊️❤️🫂

I don’t know why, but those lines always felt like home to me. I started looking at that post every single day, and somewhere along the way, you became my little sister. 🫀🕊️`
    },

    {
        title: "You Are My Home",
        message: `After Amma left, I never wanted to replace her in your life. I just wanted to be there for you, especially during the moments when you needed someone the most. I always wanted to stand beside you through every situation.

No matter what happens, I will always be there for you. You are genuinely my home. 🏡🫀🫂`
    },

    {
        title: "A Part of Every Day",
        message: `I’ve had so many friends in my life, but you are something different and something truly special to me. You probably won’t even believe this, but every day, as soon as I reach college, the first call I make is to you! That’s how much you have become a part of my everyday life.

And there’s something I’ve always wanted to tell you.

To me, you are just like Nikas. The kind of person who holds a very special place in my heart. I’ve never said these words to anyone else, and I genuinely mean every single one of them.

You will always be my little one. 💋🕊️🫂`
    },

    {
        title: "Our First Child 😂",
        message: `Whatever happens, I’ll always be there for you. Just remember one thing: YOU ARE OUR FIRST CHILD! 😂❤️

Even if I have a child of my own one day, you will still be my first baby. I’m not even kidding. I mean every word of it! 🫂`
    },

    {
        title: "Forever Our Chella Magal",
        message: `I hope this new chapter of your life brings you endless happiness, love, peace, and everything your heart wishes for. Never forget how special you are to me.

YOU WILL ALWAYS BE OUR CHELLA MAGAL! 🫂🕊️❤️`
    },

    {
        title: "One Last Thing...",
        message: `Okay, that’s enough of my emotional speech. 😂

Once again, happiest birthday, my little girl! I love you so much. Stay the same, keep smiling, and never forget that you will always have me by your side. 🫀🕊️🏡❤️`
    }

];

// ==========================================
// MUSIC PLAYER
// ==========================================

let isPlaying = false;

musicButton.addEventListener("click", async () => {

    if (!isPlaying) {

        try {
            await birthdayMusic.play();

            isPlaying = true;
            musicButton.textContent = "♫ Pause Music";

        } catch (error) {
            console.log("Music playback failed:", error);
        }

    } else {

        birthdayMusic.pause();

        isPlaying = false;
        musicButton.textContent = "♫ Play Music";

    }

});

// ==========================================
// STORY VARIABLES
// ==========================================

let currentChapter = 0;
let typingTimer = null;
let isTyping = false;
let currentText = "";
let currentCharacter = 0;

// ==========================================
// TYPING ANIMATION
// ==========================================

function typeMessage() {

    isTyping = true;
    currentText = chapters[currentChapter].message;
    currentCharacter = 0;

    storyText.textContent = "";

    nextButton.style.display = "none";

    function typeCharacter() {

        if (currentCharacter < currentText.length) {

            storyText.textContent += currentText.charAt(currentCharacter);

            currentCharacter++;

            typingTimer = setTimeout(typeCharacter, 18);

        } else {

            finishTyping();

        }

    }

    typeCharacter();

}

// ==========================================
// FINISH TYPING
// ==========================================

function finishTyping() {

    clearTimeout(typingTimer);

    storyText.textContent = currentText;

    isTyping = false;

    if (currentChapter === chapters.length - 1) {

        nextButton.textContent = "One Last Surprise ❤️";

    } else {

        nextButton.textContent = "Continue Our Story →";

    }

    nextButton.style.display = "inline-block";

}

// ==========================================
// OPEN THE BIRTHDAY STORY
// ==========================================

startButton.addEventListener("click", async () => {

    try {

        await birthdayMusic.play();

        isPlaying = true;
        musicButton.textContent = "♫ Pause Music";

    } catch (error) {

        console.log("Music needs manual playback:", error);

    }

    homeSection.classList.add("hidden");

    storySection.classList.add("active");

    currentChapter = 0;

    displayChapter();

});

// ==========================================
// DISPLAY EACH CHAPTER
// ==========================================

function displayChapter() {

    storyProgress.textContent =
        `MEMORY ${currentChapter + 1} OF ${chapters.length}`;

    document.querySelector(".story-heading").textContent =
        chapters[currentChapter].title;

    typeMessage();

}

// ==========================================
// NEXT CHAPTER BUTTON
// ==========================================

nextButton.addEventListener("click", () => {

    if (isTyping) return;

    if (currentChapter < chapters.length - 1) {

        currentChapter++;

        displayChapter();

    } else {

        storySection.classList.remove("active");

        finalSection.classList.add("active");

        finalSection.scrollIntoView({
            behavior: "smooth"
        });

    }

});

// ==========================================
// END
// ========================================== 
