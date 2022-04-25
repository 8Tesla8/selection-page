import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'selection-list',
    templateUrl: './selection-list.component.html',
    styleUrls: ['./selection-list.component.scss']
})

export class SelectionListComponent {

    @Output() closeBtnClick = new EventEmitter();
    
    public selectionList:SelectionListItem[];

    constructor() {
        this.selectionList = this.generateData();
    }

    private generateData():SelectionListItem[]{
        var list :SelectionListItem[] = [
            { title: 'Selection 1', icon: 'assets/calendar.svg'},
            { title: 'Selection 2', icon: 'assets/favorite.svg'},
            { title: 'Selection 3', icon: 'assets/grade.svg'},
            { title: 'Selection 4', icon: 'assets/home.svg'},
            { title: 'Selection 5', icon: 'assets/settings.svg'},
            { title: 'Selection 6', icon: 'assets/visibility.svg'},
        ];

        return list;
    }


    public onCloseBtnClick():void {
        this.closeBtnClick.emit();
    }

    public onItemClick(item: SelectionListItem):void {
        alert(item.title);
    }

}

export class SelectionListItem{
    public title:string;
    public icon:string;
}
