$("#form").submit(function(e){e.preventDefault(); search()});

function search() {
    var searchTerm = $("#searchbar").val();
    if(searchTerm == "") {
        return;
    }

    var website = 'https://www.google.com/search?q=';
    var inURL = ' -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml)';
    var videoFormats = ' +(wmv|mpg|avi|mp4|mkv|mov)';
    var audioFormats = ' (ac3|flac|m4a|mp3|ogg|wav|wma)';
    var imageFormats = ' (bmp|gif|jpg|png|psd|tif|tiff)';
    var archiveFormats = ' +(.rar|.tar|.7z|.zip|.si)';
    var bookFormats = ' (pdf|epub|mob)';
    var inText = 'intext:"' + searchTerm + '"';
    

    let selectedOption=$("#select").val();
    switch(selectedOption)
    {
        case "1":
            link = website + inText + ' intitle:"index.of"' + inURL; 
            break;
        case "2":
            link = website + inText + ' intitle:"index.of"' + videoFormats + inURL;
            break;
        case "3":
            link = website + inText + ' intitle:"index.of"' + audioFormats + inURL;
            break;
        case "4":
            link = website + inText + ' intitle:"index.of"' + bookFormats + inURL;
            break;
        case "5":
            link = website + inText + ' intitle:"index.of"' + imageFormats + inURL;
            break;
        case "6":
            link = website + 'intitle:"' + searchTerm + '"' + archiveFormats + inURL;
            break;
        default:
            link = website + inText + ' intitle:"index.of"' + inURL;
            break;
    }

    window.open(link,'_blank');
}
