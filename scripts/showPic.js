/**
 * Created by pshen on 2017/5/29.
 */

function showPic(whichpic) {
  var source = whichpic.getAttribute("href")
  var placeholder = document.getElementById("placeholder")
  placeholder.setAttribute("src", source)
}