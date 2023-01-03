import { getStyle } from "../utils/tool";

export default {
  mounted(el) {
    const oImgWrap = el,
      oMagWrap = oImgWrap.querySelector(".mag-wrap"),
      oMagImg = oMagWrap.querySelector(".mag-img"),
      imgWidth = parseInt(getStyle(oImgWrap, "width")),
      imgHeight = parseInt(getStyle(oImgWrap, "height")),
      magWidth = parseInt(getStyle(oMagWrap, "width")),
      magHeight = parseInt(getStyle(oMagWrap, "height")),
      imgX = oImgWrap.offsetLeft,
      imgY = oImgWrap.offsetTop;
    const init = () => {
      bindEvent();
    };
    function bindEvent() {
      oImgWrap.addEventListener(
        "mouseover",
        function (e) {
          oMagWrap.className += " show";
          document.addEventListener("mousemove", handleMouseMove, false);
        },
        false
      );
      oImgWrap.addEventListener("mouseout", handleMouseOut, false);
    }
    function handleMouseMove(e) {
      const { x, y, mouseX, mouseY } = getXY(e);
      showMag(x, y, mouseX, mouseY);
    }
    function handleMouseOut() {
      oMagWrap.className = "mag-wrap";
      document.removeEventListener("mousemove", handleMouseMove, false);
    }
    function showMag(x, y, mouseX, mouseY) {
      oMagWrap.style.left = x + "px";
      oMagWrap.style.top = y + "px";
      oMagImg.style.left = -x + "px";
      oMagImg.style.top = -y + "px";
      if (mouseX < 0 || mouseY < 0 || mouseX > imgWidth || mouseY > imgHeight){
        oMagWrap.className = 'mag-wrap'
        document.removeEventListener('mousemove',handleMouseMove, false)
      }
    }
    function getXY(e) {
      return {
        x: e.pageX - imgX - magWidth / 2,
        y: e.pageY - imgY - magHeight / 2,
        mouseX: e.pageX - imgX,
        mouseY: e.pageY - imgY,
      };
    }
    init();
  },
};
