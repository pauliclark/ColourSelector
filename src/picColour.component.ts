import { Component, ElementRef,Renderer2, OnInit, Output, Input, EventEmitter, HostListener} from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';
import { picColourSelector } from './colourSelector.js';


@Component({
  selector: 'picColourSelector',
  templateUrl: './colour.component.html',
  styleUrls: [ './colour.component.css' ],
  providers: [ picColourSelector ]
})
export class ColourComponent implements OnInit{
  prefix:string="pic_";
    @Output() ngModelChange:EventEmitter<any> = new EventEmitter()
    
    @Input('colour') colour: string;
    constructor(private el: ElementRef,
        private renderer: Renderer2,
        private _builder: AnimationBuilder,
        private selector:picColourSelector ) {
          this.el=el;
          this.renderer=renderer;
    }
    
    ngOnInit() {
      this.renderer.setAttribute(this.el.nativeElement,"spelling","false");
      //this.ngModelChange.emit('#fff');
    }
    onInputChange(event: Event) {
     // console.log(event);
      //console.log([this.value,this.el.nativeElement.value]);
      this.ngModelChange.emit(this.colour);
    }
    open(event: Event) {
      this.dialog();
    }
    dialog() {
      var dialog=this.renderer.createElement("div");
      this.renderer.addClass(dialog,`${this.prefix}dialog`);
      var content=this.renderer.createElement("div");
      dialog.appendChild(content);
      this.selector.appendTo(content,this.renderer);
      //content.appendChild(colourBuilder.content);
      this.el.nativeElement.parentNode.insertBefore(dialog,this.el.nativeElement);
      
      var myAnimation = this._builder.build([
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 }))
      ]);
  
      // then create a player from it
      const player = myAnimation.create(dialog);
  
      player.play();

      console.log(dialog);
    }
}