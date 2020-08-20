window.onload = function () {
  let h1 = document.querySelector("h1");
  h1.onclick = function () {
    alert(11);
  };
  const $ = {
    git: function () {
      console.log("这是master的方法");
    },
    set: function () {
      console.log("这是login分支的方法");
    },
  };
};
