import { Renderer2 as renderer } from '@angular/core';


export class picColourSelector {
    prefix:string="pic_";
    container:any;
    content:any;
    options:object={};
    appendTo(container:any,renderer:any,opts:object={}) {
        if (typeof(renderer)!="object" || typeof(renderer.createElement)!="function") throw new ReferenceError('Invalid Renderer passed to Colour Selector');
        if (typeof(container)!="object" || typeof(container.appendChild)!="function") throw new ReferenceError('Invalid target element passed to Colour Selector');
        this.options=opts;
        this.content=renderer.createElement("div");
        renderer.addClass(this.content,"picColourWheel");
        container.appendChild(this.content);
    }
}
