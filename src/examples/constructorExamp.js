function Book(title,author,year){
    this.title=title
    this.author=author
    this.year=year   
    };

    //getSummary
    Book.prototype.getSummary=function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
    //getAge
    Book.prototype.getAge=function(){
        const years=new Date().getFullYear-this.year;
        return `The ${this.title} is ${year} years old`;
    }
    //revise/change year
    Book.prototype.revise=function(newYear){
        this.year=newYear;
        this.revise=true;
    }
//initiate an Objects
const book1=new Book("book1","john Dash",'2016');
const book2=new Book("book2","Mary London",'2019');

console.log(book1.getAge());
console.log(book1.getSummary());
console.log(book1.getAge());


