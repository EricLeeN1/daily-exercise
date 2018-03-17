export default {
  albumDatas(state,data){
    let list = data.list;
    if (list) {
      list.forEach(ele => {
        ele.active = false;
      });
      list[0].active = true;
    }
    state.albumDatas = data;
  }
}
