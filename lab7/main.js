let src_url=["head1.jpg","head2.jpg","head3.jpg","head4.jpg","head5.jpg","head6.jpg"];
let num= src_url.length;
let img_arr=[];

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

shuffle(src_url);
for(let i=0; i<num;i++)
{
    img_arr.push(new Card("A",src_url[i]));
}
shuffle(src_url);
for(let i=0; i<num;i++)
{
    img_arr.push(new Card("B",src_url[i]));
}

for(let i =0; i<num;i++)
{
    img_arr[i].imghtml.src= img_arr[i].front;
    let container= document.querySelector(".container1");
    container.append(img_arr[i].imghtml);
}

for(let i =0; i<num;i++)
{
    img_arr[i+6].imghtml.src= img_arr[i+6].front;
    let container= document.querySelector(".container2");
    container.append(img_arr[i+6].imghtml);
}