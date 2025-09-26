function canGraduate(credits, gpa){
    if (credits>=120 && gpa >= 2){
        console.log("Congratulations you can graduate");
    } else{
        console.log("You are not eligible for graduation");
    }
}

canGraduate(120, 2.5);