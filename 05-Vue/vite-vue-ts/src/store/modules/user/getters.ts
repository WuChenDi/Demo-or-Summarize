import { userStateType } from "./store";

const moduleGetters = {
  isLogin: (state: userStateType): string => {
    console.log("getters 执行成功");
    return `🏮${state.loading}`;
  },
};

export default moduleGetters;
