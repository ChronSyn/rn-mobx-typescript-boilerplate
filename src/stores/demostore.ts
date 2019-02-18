import { observable, action, computed } from 'mobx';

class demoStore {
  constructor(){}

  @observable _demoString: String = 'Want to hear a joke about construction?';
  @observable _demoNumber: Number = 0;

  @computed get demoString(){ return this._demoString};
  @action updateDemoString(newData: string = ''){ this._demoString = newData }

  @computed get demoNumber(){ return this._demoNumber};
  @action updateDemoNumber(newData: Number = 0){ this._demoNumber = newData }
  @action decreaseDemoNumber(){ this.updateDemoNumber( this._demoNumber-1 ) }
  @action increaseDemoNumber(){ this.updateDemoNumber( this._demoNumber+1 ) }

}


/*
  If you want to export a singleton (e.g. global state), initialize it and export it as default.
  You can also export the class if you don't want a singleton. Fairly standard stuff.
*/
const singleton = new demoStore();
export default singleton;