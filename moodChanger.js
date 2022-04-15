const kaomoji = document.querySelector("#kaomoji");
const happyBtn = document.querySelector("#happy");
const sadBtn = document.querySelector("#sad");
const confusedBtn = document.querySelector("#confused");
const angryBtn = document.querySelector("#angry");
const resetBtn = document.querySelector("#reset");

happyBtn.addEventListener("click", function (e) {
  state.dispatch({ type: "HAPPY", payload: "^ㅂ^" });
  kaomoji.innerText = state.getState().mood;
});
sadBtn.addEventListener("click", function (e) {
  state.dispatch({ type: "SAD", payload: "T.T" });
  kaomoji.innerText = state.getState().mood;
});
confusedBtn.addEventListener("click", function (e) {
  state.dispatch({ type: "CONFUSED", payload: "⊙.☉" });
  kaomoji.innerText = state.getState().mood;
});
angryBtn.addEventListener("click", function (e) {
  state.dispatch({ type: "ANGRY", payload: "ಠ_ಠ" });
  kaomoji.innerText = state.getState().mood;
});
resetBtn.addEventListener("click", function (e) {
  state.dispatch({ type: "RESET" });
  kaomoji.innerText = state.getState().mood;
});
