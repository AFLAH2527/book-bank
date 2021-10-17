function loadData(path, callBack) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", `data/${path}.json`, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callBack(JSON.parse(xobj.responseText));
    }
  };
  xobj.send(null);
}
