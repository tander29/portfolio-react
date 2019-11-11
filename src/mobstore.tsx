import { observable } from "mobx";

class MobStore {
  @observable thing: string = "thing one";
}

export default new MobStore();
