const fn_SNT= (a) =>
{
    let kt=true;
    let b=3;
    if(a<1)
    {
        kt=false;
    }
    else if(a==2)
    {
        kt=true;
    }
    else if(a%2==0)
    {
        kt =false;
    }
    else
    {
        for(b=3;b<a-1;b++)
        {
            if(a%b==0)
            {
                kt=false;break;
            }
        }
    }
    if(kt==true)
    {
        console.log(a," Là số nguyên tố");
    }
    else{
        console.log(a," Không là số nguyên tố");
    }
}

fn_SNT(-1);
fn_SNT(2);
fn_SNT(3);
fn_SNT(8);
fn_SNT(11);