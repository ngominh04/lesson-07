const fn_songuyento=(a)=>
{
    let b=2,kt=true;
    if(a<2){
        kt=false;
    }
    else{
        for(b=2;b<a-1;b++)
        {
            if(a%b==0)
            {
                kt=false;
                break;
            }
                
        }
    }
    if(kt==true){
        console.log(a," Là số nguyên tố");
    }
    else{
        console.log(a," Không là số nguyên tố");
    }
}

fn_songuyento(3);
fn_songuyento(9);