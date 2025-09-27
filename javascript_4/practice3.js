let member = {
    name: "Ajee",
    membershipType: "basic",
    borrowedBooks: [],
    borrowBook(book){
        member.borrowedBooks.push(book);
        console.log(`The book ${book} has been added🤭.`)
    },

    getBorrowedCount(){
        num = borrowedBooks.length;
        console.log(`${member.name} has borrowed ${num} books.`);
        
    },

    getMembershipInfo(){
        if (member.membershipType === "premium"){
            console.log("This user has a premium badge and can borrow up to 10 books at a time!")
        } else {
            console.log("You have a basic account and you can only borrow a maximum of 5 books.")
        }
    }
}

console.log(member.name, member.membershipType);

member.borrowBook("Gabriel Allon");
member.borrowBook("Jack Ryan");


console.log(member.name, member.membershipType, member.borrowedBooks);

member.getMembershipInfo();

