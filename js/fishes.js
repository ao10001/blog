fish();
function fish() {
    return (
      $("#footer-wrap").css({
        position: "absolute",
        "text-align": "center",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }),
      $("footer").append(
        '<div class="container" id="jsi-flying-fish-container"></div>'
      ),
      $("body").append(
        '<script src="https://cdn.jsdelivr.net/gh/ao10001/blog@v1.0.2/js/fish.js"></script>'
      ),
      this
    );
  }
