import { termekLista } from "./adatok.js";


class Termek {
  constructor(szuloElem, elem) {
    this.szuloElem = szuloElem;
    this.elem = elem;
    szuloElem.append(
      `<div class="card"><div class="card-header">${elem.iro}</div>
      <div class="card-body">${elem.cim}</div>
       <div class="card-footer">${elem.ar} Ft</div>
       <button type="button">Kedvenc</button>
       <button id="X" type="button">Töröl</button>
       </div>
       `
    );
    /*
<div class="card">
  <div class="card-header">Header</div>
  <div class="card-body">Content</div>
  <div class="card-footer">Footer</div>
</div>
    */

    const BTTN = $(`div:last-child button`);
    const BXXN = $(`#X`)
    BTTN.on("click", () => {
      this.esemenyTrigger();
    });
  }

  esemenyTrigger() {
    const esemeny = new CustomEvent("kedvenc", {
      detail: this,
    });
    window.dispatchEvent(esemeny);
  }
  esemenyTrigger2() {
    const esemeny = new CustomEvent("Torol", {
      detail: this,
    });
    window.dispatchEvent(esemeny);
  }
}

export default Termek;
