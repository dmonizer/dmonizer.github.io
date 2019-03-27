function googleBookmarksToGeoJson(xmlstring) {

  function parseXML(input) {
    try {
      const parser = new DOMParser();
      return parser.parseFromString(input, "application/xml");
    } catch (err) {
      alert(err.message)
    }
  }

  var getUrlList = (xmlDoc) => xmlDoc.getElementsByTagName("url");

  var createArrayFromNodelist = (nodeList) => [].slice.call(nodeList);

  var itemHasMapsUrl = (item) => {
    return (item.textContent.indexOf("maps.google.com") > -1);
  }

  var getMapsUrlItems = (urlsArray) => urlsArray.filter((urlItem) => itemHasMapsUrl(urlItem))

  var parseGmapsUrl = (url) => {
    return url.substr(url.indexOf('?q=') + 3, url.length - url.indexOf('?q=') + 3).split(',').map((item)=>+item).reverse();
  }

  var parseLabels = (nodeList) => {
    return createArrayFromNodelist(nodeList).map((item) => item.textContent)
  }

  var presentBookmark = (bookmark) => {
    const bookmarkUrl = bookmark.getElementsByTagName("url")[0].textContent;
    return {
      "type": "Feature",
      "properties": {
        "title": bookmark.getElementsByTagName("title")[0].textContent,
        "url": bookmarkUrl,
        "labels": parseLabels(bookmark.getElementsByTagName("label")),
      },
      "geometry": {
        "type": "Point",
        "coordinates": parseGmapsUrl(bookmarkUrl)
      }
    }

  }

  var mapsUrls = getMapsUrlItems(createArrayFromNodelist(getUrlList(parseXML(xmlstring))))
  var mapsBookmarks = mapsUrls.map((urlItem) => urlItem.parentElement);
  return {
    "type" : "FeatureCollection",
    "features" : mapsBookmarks.map((bm) => presentBookmark(bm))
  } 
}

function convert() {
  var xml = document.getElementById("googleXML").value;
  gj = document.getElementById("geojson");
  p = document.createElement("pre");
  p.innerText = JSON.stringify(googleBookmarksToGeoJson(xml.trim()));
  gj.appendChild(p);
  }

  
