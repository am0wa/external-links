(function (){
  this.processLinks(document.links);
})()

function processLinks(links, target = '_blank'){
  // go through all links and correct the target
  for (var i = 0, linksLength = links.length; i < linksLength; i++) {
    if (links[i].hostname != window.location.hostname) {
      links[i].target = target;
    }
  }
  /* console.info("External-linksJS::Processed links: " + links.length); */
}
