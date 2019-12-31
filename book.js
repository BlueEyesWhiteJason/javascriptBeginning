function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        if(read == true)
        {
            re = "already read"
        }
        else
        {
            re = "haven't read yet"

        }
        return title + " by " + author + ", " + pages + " pages, " + re
    }
}

const hp = new Book("Harry Potter and the Mules Butt", "JK Balling", 923, true)

console.log(hp.info())