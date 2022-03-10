var html = "";
function showStats(data) {
        $.each(data, function(index, item) {
            $.each(item.assets, function(index, asset) {
                var assetSize = (asset.size / 1048576.0).toFixed(2);
                html += "Latest Version: " + item.tag_name + "</br>";
                html += "File name: " + asset.name + "</br>";
                html += "File size: " + assetSize + "&nbsp;MiB </br>"
                html += "Downloads: " + asset.download_count;
                document.body.innerHTML = html;
                });
        });
}
$.getJSON("https://api.github.com/repos/pearOS-archlinux/iso/releases", showStats);
