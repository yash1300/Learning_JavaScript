// const coding = ['js','java','cpp','python']

// const val = coding.forEach((item)=>{
//     console.log(item);
// })
// //this means that forEach doesnt return any value if stored in a variable and accessed it 
// console.log(val);  

// const myNums = [1,2,3,4,5,6,7,8,9,10]
//                         // callback function
// const ret = myNums.filter(    (num)        =>       num>5)
// console.log(ret);


// cosider this as the data we recieved from the database 
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

 // const userBooks = books.filter( (bk) => bk.genre === 'History')  // to find book of history genre
//  const userBooks = books.filter( (bk) => bk.publish > 2007)  // find book after 2007 without using scope{}
const userBooks = books.filter( (bk) => {
    return bk.publish > 2007 && bk.genre === 'Science'  // with using scope and checking multiple conditions 
})                                                    // while using scope use return keyword
  console.log(userBooks);