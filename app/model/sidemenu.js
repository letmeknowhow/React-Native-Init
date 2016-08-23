import {action, reaction, observable, observe, computed, autorun} from 'mobx';
import autobind from 'autobind-decorator';

@autobind
class SidemenuStore {
  @observable isOpen = false;

  constructor() {
    //reaction(()=>this.counter, this.increaseTotal);
  }

  switchSidemenu(open) {
    if (this.isOpen === open) {
      return;
    }
    this.isOpen = open;
    console.log(`switchSidemenu: ${open}`);
  }
}

export default new SidemenuStore();
