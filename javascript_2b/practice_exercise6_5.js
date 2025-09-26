function reverseWords(sentence){
    word_list = sentence.split(" ");
    console.log(word_list);
    return word_list.reverse();
}

console.log(reverseWords("This is a sample sentence"))