export class GlassesList {
    constructor(){
        this.glist = []
    }
    addGlasses (glasses) {
        this.glist.push(glasses)
    }
    renderGlasses(){
        // các thẻ HTML chứa nội dung các đối tượng kính
        let content = '';
        // dùng reduce thay map vì hạn chế của map là ko return ra ngoài được
        content += this.glist.reduce((glContent,item,index)=>{
            // glContent = glContent (nội dung cũ) + ` nội dung mới `
            glContent += `
                <div class="col-4">
                    <img class="img-fluid" src="${item.src}" data-id="${item.id}" alt="Glasses" onclick="tryOnGlasses(event)" >
                </div>
            `;
            return glContent
        },'')
        return content;
    }
}