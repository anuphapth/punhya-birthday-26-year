const envelopeWrap = document.getElementById("envelopeWrap");
const flap = document.getElementById("flap");
const seal = document.getElementById("seal");
const letter = document.getElementById("letter");
const hint = document.getElementById("hint");
const flipBtn = document.getElementById("flipBtn");

let opened = false;

envelopeWrap.addEventListener("click", () => {
  if (opened) return;
  opened = true;

  hint.classList.add("fade");

  // 1) พลิกซอง + สลับ seal ขึ้นมาหน้าซอง (z-index) ตอนซองหมุนผ่าน ~90 องศา
  //    seal ถูกวาดไว้ตั้งแต่โหลดหน้าแล้ว จึงไม่ต้อง render ใหม่ตอนนี้
  envelopeWrap.style.transform = "rotateY(180deg) scale(.96)";

  setTimeout(() => {
    seal.classList.add("show");
  }, 250);

  // 2) เปิดฝาซอง = จังหวะ "ซองถูกเปิด" → seal มุดลงไปอยู่หลังซอง ถูกซองบังทั้งตัว
  setTimeout(() => {
    flap.style.transform = "rotateX(180deg)";
    seal.classList.add("behind");
  }, 850);

  // 3) ซองจางหายพร้อมกับ seal และให้จดหมายลอยออกมา
  setTimeout(() => {
    envelopeWrap.style.opacity = "0";
    envelopeWrap.style.pointerEvents = "none";
    seal.classList.add("gone");
    letter.classList.add("show");
  }, 1700);
});

flipBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  letter.classList.add("flipped");
  flipBtn.style.display = "none";
});
