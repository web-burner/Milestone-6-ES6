const loadBtns = () => {
  const url = "https://openapi.programming-hero.com/api/levels/all";
  fetch(url)
    .then((res) => res.json())
    .then((data) => showLessonBtn(data.data));
};

const showLessonBtn = (btns) => {
  const lessonBtnContainer = document.getElementById("all-btns");
  btns.map((btn) => {
    const lessonBtn = document.createElement("button");
    lessonBtn.innerHTML = `
        <button id="${btn.level_no}" class="btn lesson-btn hover:bg-blue-700 hover:text-white">Lesson ${btn.level_no}</button>
        `;
    lessonBtnContainer.append(lessonBtn);
  });
};
const spinner = (status) => {
  if (status === true) {
    document.getElementById("word-container").classList.add("hidden");
    document.getElementById("spinner").classList.remove("hidden");
  }
  if (status === false) {
    document.getElementById("word-container").classList.remove("hidden");
    document.getElementById("spinner").classList.add("hidden");
  }
};
const btnContainer = document.getElementById("all-btns");
btnContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("lesson-btn")) {
    loadWords(e.target.id);
    activeBtn(e.target.id);
  }
});

const loadWords = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((word) => showWords(word.data));
  spinner(true);
};

const showWords = (words) => {
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";
  if (words.length === 0) {
    wordContainer.innerHTML = `<div class="flex justify-center items-center flex-col col-span-4">
        <figure>
            <img src="./assets/alert-error.png" alt="">
        </figure>
        <div class="text-center">
            <p>এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <p class="text-4xl font-semibold">নেক্সট Lesson এ যান</p>
        </div>
    </div>`;
    spinner(false);
    return;
  }
  words.map((word) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="p-5 bg-gray-100 shadow-md h-[250px] flex flex-col justify-between">
        <div class="flex flex-col justify-between h-[120px]">
            <p class="text-center text-3xl font-bold">${word.word}</p>
            <div class="text-center">
                <span>Meaning</span>/
                <span>Pronunciation</span>
            </div>
            <div class="text-center text-2xl font-semibold">
                <span class="text-2xl font-semibold">${word.meaning === null || word.meaning === undefined ? "অর্থ খুঁজে পাওয়া যায় নি" : word.meaning}</span>/
                <span class="text-2xl font-semibold">${word.pronunciation === null || word.pronunciation === undefined ? "উচ্চারণ খুঁজে পাওয়া যায় নি" : word.pronunciation}</span>
            </div>
          </div>
            <div class=" flex justify-between">
                <div onclick="loadWordDetails(${word.id})" class="bg-sky-100 px-3 py-2 rounded-md"><i class="fa-solid fa-circle-info"></i></div>
                <div onclick="pronounceWord('${word.word}')" class="bg-sky-100 px-3 py-2 rounded-md"><i class="fa-solid fa-volume-high"></i></div>
            </div>
        </div>`;
    wordContainer.append(div);
  });
  spinner(false);
};

const activeBtn = (id) => {
  const lessonsBtn = document.querySelectorAll(".lesson-btn");
  lessonsBtn.forEach((btn) => btn.classList.remove("btn-primary"));
  document.getElementById(id).classList.add("btn-primary");
};
const loadAllWord = () => {
  const url = "https://openapi.programming-hero.com/api/words/all";
  fetch(url)
    .then((res) => res.json())
    .then((data) => showFilteredWord(data.data));
};

const showFilteredWord = (words) => {
  const allWords = words;
  document.getElementById("input-text").addEventListener("keyup", (e) => {
    const filteredWord = allWords.filter((w) =>
      w.word.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    showWords(filteredWord);
  });
};

const loadWordDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/word/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((word) => showWordDetails(word.data));
};
const synonymsShow = (synonyms) => {
  const synonymsStr = synonyms.map(
    (synonym) => `<span class="btn">${synonym}</span>`,
  );
  return synonymsStr.join("");
};
const showWordDetails = (word) => {
  const detailContainer = document.getElementById("details-container");
  console.log(word)
  detailContainer.innerHTML = `<div>
        <div>
            <p class="text-3xl font-bold">${word.word}</p>
        </div>
        <div>
            <p class="text-xl font-bold">Meaning</p>
            <p class="">${word.meaning}</p>
        </div>
        <div>
            <p class="text-xl font-bold">Explain:</p>
            <p>${word.sentence}</p>
        </div>
        <div>
            <p class="text-xl font-bold">Synonym</p>
            <div class="flex gap-3">
              ${synonymsShow(word.synonyms)}
            </div>
        </div>
    </div>`;
  document.getElementById("word_modal").showModal();
};

const pronounceWord = (word) => {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-EN"; // English
  window.speechSynthesis.speak(utterance);
};

loadAllWord();
loadBtns();
