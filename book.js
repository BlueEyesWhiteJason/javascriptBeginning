function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        if(read)
        {
            var re = "read"
        }
        else if(!read)
        {
            var re = "not read yet"
        }
        return (title + "by" + author + ", " + pages + "pages, " + re)
        
    }
}