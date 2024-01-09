class typewriter
{
    constructor(content)
    {
        this.content=JSON.parse(content);
        this.index=0
        this.delete=false;
        this.curText='';
        this.total=(this.content).length;
        this.speed=0;
    }

    typing()
    {
       // console.log(this.content[this.index]);
       if(this.total==this.index)
       {
            this.index=0
       }
       let cur_len=this.content[this.index].length; 
        if(this.delete)
        {
          
            if(this.curText.length==0)
            {
                this.index++;
                this.speed=1000;
                this.delete=false;
            }
            else
            {
                this.speed=250;
                this.curText=this.curText.substring(0,this.curText.length-1);
                document.querySelector('.out').innerHTML=this.curText;
            }    
        }
        else
        {
            if(cur_len==this.curText.length)
            {
                this.delete=true;
                this.speed=1000;
            }
            else
            {
                this.speed=350;
                this.curText=this.content[this.index].substring(0,this.curText.length+1);
                document.querySelector('.out').innerHTML=this.curText;

            }   
        }
       // setTimeout(()=>document.querySelector('.out').classList.toggle('cursor'),1000) not very nice
        setTimeout(()=>this.typing(),this.speed);
    }
};
document.addEventListener('DOMContentLoaded',
function()
{
    const content=document.querySelector('.text').getAttribute('data-words');
    type=new typewriter(content);
   
    type.typing();
}
)
