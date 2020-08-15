

const generatePDF=async(name)=>
{
    const{PDFDocument,rgb}=PDFLib;
    const exBytes=await fetch("./Certificate.pdf").then((res) =>{return res.arrayBuffer();
    });
    const exFonts=await fetch("./Sanchez-Italic.ttf").then((res) =>{return res.arrayBuffer();
    });
   
    
    const pdfDoc=await PDFDocument.load(exBytes);
    pdfDoc.registerFontkit(fontkit);
    const myfont=await pdfDoc.embedFont(exFonts);
    const pages=pdfDoc.getPages();
    const firstpg=pages[0]
    firstpg.drawText(name,{
        x:300,
        y:300,
        size:40,
        font:myfont,
        color: rgb(1, 0.6, 0),
        
        
    })
    const uri=await pdfDoc.saveAsBase64({dataUri: true});
   saveAs(uri,"Karma Certificate.pdf",{autoBom:true})
   //document.querySelector("#mypdf").src=uri;
  

};


const submitBtn=document.getElementById("submit")
const inputVal=document.querySelector("#name")
submitBtn.addEventListener("click",()=>{
    const val=inputVal.value
    generatePDF(val);  
});
