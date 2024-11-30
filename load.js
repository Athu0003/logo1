$(document).ready(function () {
    let page = 1; // Track the current page of data
    let loading = false; // To prevent multiple AJAX requests

    function loadMoreData(page) {
        $.ajax({
            url: `http://127.0.0.1:5502/index.html page=${page}`, // Replace with your server endpoint
            type: "GET",
            beforeSend: function () {
                $("#loading").show();
            },
            success: function (data) {
                if (data.trim() === "") {
                    // No more data to load
                    $(window).off("scroll");
                    $("#loading").hide();
                } else {
                    $("#content").append(data);
                }
            },
            complete: function () {
                $("#loading").hide();
                loading = false;
            },
            error: function () {
                console.log("Error loading data");
            }
        });
    }

    // Attach scroll event listener
    $(window).on("scroll", function () {
        if (
            $(window).scrollTop() + $(window).height() >= $(document).height() - 100 &&
            !loading
        ) {
            loading = true; // Set loading to true to prevent duplicate requests
            page++; // Increment the page number
            loadMoreData(page); // Load the next batch of data
        }
    });

    // Load the initial data
    loadMoreData(page);
});
