function ifOrWhenLoaded(cb) {
  if (
    document.readyState === "complete"
    || document.readyState === "loaded"
    || document.readyState === "interactive"
  ) {
    cb();
  } else {
    document.addEventListener('DOMContentLoaded', cb);
  }
}
ifOrWhenLoaded(()=>{
  const baseDmgs = document.getElementsByClassName('tooltip');

  function swap1v1() {
    for (const dmgEl of baseDmgs) {
      if (dmgEl.innerText === "") continue;
      const normalDmgNode = dmgEl.childNodes[0];
      const singlesDmgEl = dmgEl.childNodes[1];
      const normalDmg = normalDmgNode.data;
      normalDmgNode.data = singlesDmgEl.innerHTML;
      singlesDmgEl.innerHTML = normalDmg;
    }
  }


  const checkboxCont = document.getElementById('checkbox-cont');
  const checkbox1v1 = document.getElementById('toggle-1v1');
  checkbox1v1.addEventListener('change', swap1v1);


  function preventClickToHighlight(event) {
    if (event.detail > 1) {
      event.preventDefault();
    }
  }
  checkboxCont.addEventListener('mousedown', preventClickToHighlight);
});
