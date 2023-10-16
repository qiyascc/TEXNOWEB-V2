document.addEventListener("DOMContentLoaded", function() {
    var textElements = document.querySelectorAll('.medium_text_for_projects_item_description');

    textElements.forEach(function(element) {
      var textContent = element.innerText;
      if (textContent.length > 200) {
        var truncatedText = textContent.substring(0, 200) + '...';
        element.innerText = truncatedText;
      }
    });
  });