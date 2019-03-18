function search() {
    var searchTerm = document.getElementById("searchbar").value ;
    var website = 'https://www.google.com/search?q=';
    var inURL = ' -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml)';
    var videoFormats = ' +(wmv|mpg|avi|mp4|mkv|mov)';
    var audioFormats = ' (ac3|flac|m4a|mp3|ogg|wav|wma)';
    var imageFormats = ' (bmp|gif|jpg|png|psd|tif|tiff)';
    var archiveFormats = ' +(.rar|.tar|.7z|.zip|.si)';
    var bookFormats = ' (pdf|epub|mob)';
    var inText = 'intext:"' + searchTerm + '"';
    
    if(document.getElementById("1").selected){
        link = website + inText + ' intitle:"index.of"' + inURL; 
    }
    else if(document.getElementById("2").selected){
        link = website + inText + ' intitle:"index.of"' + videoFormats + inURL; 
    }
    else if(document.getElementById("3").selected){
        link = website + inText + ' intitle:"index.of"' + audioFormats + inURL; 
    }
    else if(document.getElementById("4").selected){
        link = website + inText + ' intitle:"index.of"' + bookFormats + inURL; 
    }
    else if(document.getElementById("5").selected){
        link = website + inText + ' intitle:"index.of"' + imageFormats + inURL; 
    }
    else if(document.getElementById("6").selected){
        link = website + 'intitle:"' + searchTerm + '"' + archiveFormats + inURL; 
    }


    window.open(link,'_blank');

    
}
