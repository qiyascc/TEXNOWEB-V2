function truncateText() {
    var items = document.querySelectorAll('.list-group-item p');
    items.forEach(function(item) {
        var text = item.innerText;
        if (text.length > 200) {
            item.innerText = text.substring(0, 200) + '...';
        }
    });
}

function showProject(imageSrc, linkHref, element) {
    document.getElementById('projectImage').style.backgroundImage = 'url(' + imageSrc + ')';
    document.getElementById('projectButton').href = linkHref;

    var items = document.querySelectorAll('.list-group-item');
    items.forEach(function(item) {
        item.classList.remove('active-border');
    });
    element.classList.add('active-border');

    truncateText();
}

function updateImageContainerHeight() {
    var projectListHeight = document.getElementById('projectList').offsetHeight;
    document.getElementById('projectImage').style.height = projectListHeight + 'px';
}

window.onload = function() {
    updateImageContainerHeight();
    truncateText();
}

window.onresize = function() {
    updateImageContainerHeight();
}