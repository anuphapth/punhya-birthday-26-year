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

  // 1) Flip the envelope and switch the seal to the front (z-index) as it rotates past ~90deg.
  //    The seal was already painted when the page loaded, so nothing needs re-rendering here.
  envelopeWrap.style.transform = "rotateY(180deg) scale(.96)";

  setTimeout(() => {
    seal.classList.add("show");
  }, 250);

  // 2) Opening the flap = the "envelope is opened" beat -> the seal slips behind the envelope
  //    and is fully covered by it
  setTimeout(() => {
    flap.style.transform = "rotateX(180deg)";
    seal.classList.add("behind");
  }, 850);

  // 3) The envelope fades out together with the seal, then the letter floats out
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
